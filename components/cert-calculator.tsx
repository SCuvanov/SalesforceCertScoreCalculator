"use client";

import {
  DEFAULT_CERTIFICATION_ID,
  buildRoleMap,
  getActiveCertifications,
  getCertificationById,
} from "@/lib/certifications";
import { toKebabCase } from "@/lib/kebab-case";
import {
  buildMoreStatRows,
  computeWeightedScore,
  messageForScore,
  scorePasses,
} from "@/lib/scoring";
import {
  emptyScoresForCert,
  loadPersistedState,
  savePersistedState,
} from "@/lib/storage";
import { decodeScoresPayload, encodeScoresPayload, wouldUrlBeTooLong } from "@/lib/url-state";
import type { Certification } from "@/lib/cert-schema";
import {
  BarChart3,
  Calculator,
  CheckCircle2,
  ChevronDown,
  Compass,
  ListChecks,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const ALL_ROLES = "__all__";

type WorkspaceView = "scores" | "breakdown";

function urlSearchSyncMatches(wanted: URLSearchParams): boolean {
  if (typeof window === "undefined") return false;
  const cur = new URLSearchParams(window.location.search);
  return cur.get("cert") === wanted.get("cert") && cur.get("s") === wanted.get("s");
}

/** Updates the query string without App Router navigation (avoids remounts / focus loss in inputs). */
function replaceUrlQueryIfNeeded(wanted: URLSearchParams): void {
  if (typeof window === "undefined") return;
  if (urlSearchSyncMatches(wanted)) return;
  const q = wanted.toString();
  const path = window.location.pathname;
  const next = q ? `${path}?${q}` : path;
  window.history.replaceState(window.history.state, "", next);
}

export function CertCalculator() {
  const pathname = usePathname();

  const activeCerts = useMemo(() => getActiveCertifications(), []);
  const roleMap = useMemo(() => buildRoleMap(activeCerts), [activeCerts]);
  const roles = useMemo(() => [...roleMap.keys()], [roleMap]);

  const [hydrated, setHydrated] = useState(false);
  const [roleFilter, setRoleFilter] = useState(ALL_ROLES);
  const [certId, setCertId] = useState(DEFAULT_CERTIFICATION_ID);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [result, setResult] = useState<{
    final: number;
    message: string;
  } | null>(null);
  const [workspaceView, setWorkspaceView] = useState<WorkspaceView>("scores");

  const cert = getCertificationById(certId);

  const filteredCerts = useMemo(() => {
    if (roleFilter === ALL_ROLES) return activeCerts;
    return roleMap.get(roleFilter) ?? [];
  }, [activeCerts, roleFilter, roleMap]);

  useEffect(() => {
    queueMicrotask(() => {
      const params =
        typeof window !== "undefined"
          ? new URLSearchParams(window.location.search)
          : new URLSearchParams();
      const urlCert = params.get("cert");
      const urlS = params.get("s");
      const persisted = loadPersistedState();

      let nextId = DEFAULT_CERTIFICATION_ID;
      if (urlCert && getCertificationById(urlCert)) {
        nextId = urlCert;
      } else if (persisted?.certId && getCertificationById(persisted.certId)) {
        nextId = persisted.certId;
      }

      const c = getCertificationById(nextId)!;
      let nextScores = emptyScoresForCert(c);

      if (urlS) {
        const decoded = decodeScoresPayload(urlS);
        if (decoded) {
          for (const k of Object.keys(c.categories)) {
            if (decoded[k] !== undefined) nextScores[k] = decoded[k];
          }
        }
      } else if (persisted?.scores && persisted.certId === nextId) {
        nextScores = { ...nextScores, ...persisted.scores };
      }

      setCertId(nextId);
      setScores(nextScores);
      if (persisted?.roleFilter) setRoleFilter(persisted.roleFilter);
      setHydrated(true);
    });
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const id = setTimeout(() => {
      savePersistedState({
        certId,
        roleFilter,
        scores,
      });
    }, 400);
    return () => clearTimeout(id);
  }, [hydrated, certId, roleFilter, scores]);

  useEffect(() => {
    if (!hydrated) return;
    const id = setTimeout(() => {
      const params = new URLSearchParams();
      params.set("cert", certId);
      const hasScores = Object.values(scores).some((v) => v > 0);
      if (hasScores) {
        const enc = encodeScoresPayload(scores);
        const trial = `${pathname}?cert=${encodeURIComponent(certId)}&s=${encodeURIComponent(enc)}`;
        if (!wouldUrlBeTooLong(trial)) {
          params.set("s", enc);
        }
      }
      replaceUrlQueryIfNeeded(params);
    }, 300);
    return () => clearTimeout(id);
  }, [hydrated, certId, scores, pathname]);

  const onRoleChange = (value: string) => {
    setRoleFilter(value);
    if (value === ALL_ROLES) return;
    const list = roleMap.get(value);
    if (!list?.length) return;
    pickCert(list[0]);
  };

  const pickCert = (c: Certification) => {
    setCertId(c.id);
    setScores(emptyScoresForCert(c));
    setFieldErrors({});
    setResult(null);
    setWorkspaceView("scores");
  };

  const onScoreChange = (category: string, raw: string) => {
    const n = raw === "" ? NaN : Number(raw);
    setScores((prev) => ({ ...prev, [category]: n }));
    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next[category];
      return next;
    });
  };

  const validateScores = (): boolean => {
    if (!cert) return false;
    const err: Record<string, string> = {};
    for (const name of Object.keys(cert.categories)) {
      const v = scores[name];
      if (v === undefined || Number.isNaN(v)) {
        err[name] = "Enter a number.";
        continue;
      }
      if (v < 0 || v > 100) {
        err[name] = "Use 0–100.";
      }
    }
    setFieldErrors(err);
    return Object.keys(err).length === 0;
  };

  const resultPassed =
    cert !== undefined &&
    result !== null &&
    scorePasses(result.final, cert.passingScore);

  const onCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cert) return;
    if (!validateScores()) return;
    const final = computeWeightedScore(scores, cert.categories);
    setResult({
      final,
      message: messageForScore(final, cert.passingScore),
    });
    setWorkspaceView("breakdown");
  };

  const moreRowsByImpact = useMemo(() => {
    if (!cert) return [];
    const rows = buildMoreStatRows(scores, cert.categories);
    return [...rows].sort(
      (a, b) =>
        b.weightedRoomToImprove - a.weightedRoomToImprove ||
        a.categoryName.localeCompare(b.categoryName),
    );
  }, [cert, scores]);

  const onClear = () => {
    const currentCert = cert ?? getCertificationById(certId);
    if (!currentCert) return;
    setScores(emptyScoresForCert(currentCert));
    setFieldErrors({});
    setResult(null);
    setWorkspaceView("scores");
    const clearParams = new URLSearchParams();
    clearParams.set("cert", certId);
    replaceUrlQueryIfNeeded(clearParams);
  };

  if (!cert) {
    return (
      <p className="text-red-600" role="alert">
        Unknown certification. Reset the URL or clear saved data.
      </p>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      {cert.retired && (
        <div
          className="mb-6 rounded-2xl border border-red-200/90 bg-gradient-to-r from-red-50 to-rose-50/80 p-4 text-sm text-red-950 shadow-sm ring-1 ring-red-100/60 motion-safe:transition-shadow motion-safe:duration-300 motion-safe:hover:shadow-md"
          role="status"
        >
          This certification is marked retired in app data.
          {cert.replacedBy && (
            <>
              {" "}
              See instead:{" "}
              <button
                type="button"
                className="font-semibold text-red-800 underline decoration-red-300 underline-offset-2 transition-colors motion-safe:duration-200 hover:text-red-900 motion-safe:hover:decoration-red-400"
                onClick={() => {
                  const id = cert.replacedBy;
                  if (!id) return;
                  const next = getCertificationById(id);
                  if (next) pickCert(next);
                }}
              >
                {cert.replacedBy
                  ? (getCertificationById(cert.replacedBy)?.name ?? cert.replacedBy)
                  : ""}
              </button>
            </>
          )}
        </div>
      )}

      <section className="mb-10 grid gap-4 sm:grid-cols-3" aria-label="Steps">
        {[
          "Select a Certification",
          "Fill out category percentages",
          "Calculate!",
        ].map((text, i) => (
          <div
            key={text}
            className="group flex items-center gap-4 rounded-2xl border border-white/60 bg-white/70 p-5 shadow-lg shadow-slate-900/[0.06] ring-1 ring-slate-200/40 backdrop-blur-md motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-xl motion-safe:hover:shadow-slate-900/10"
          >
            <span
              className="flex h-11 min-w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-lg font-bold text-white shadow-md shadow-teal-600/35 ring-2 ring-white/50 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:group-hover:scale-105"
              aria-hidden
            >
              {i + 1}
            </span>
            <p className="text-sm font-semibold leading-snug text-slate-800">
              {text}
            </p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-white/70 bg-white/75 p-5 shadow-2xl shadow-indigo-950/[0.07] ring-1 ring-slate-200/30 backdrop-blur-xl motion-safe:transition-shadow motion-safe:duration-500 motion-safe:hover:shadow-indigo-950/10 sm:p-8 print:border-0 print:bg-white print:shadow-none print:hover:shadow-none">
        <div className="mb-8 flex flex-col gap-5 sm:flex-row">
          <label className="flex min-h-11 flex-1 flex-col gap-2 text-sm font-semibold text-slate-700">
            <span>Filter by role</span>
            <div className="group relative">
              <select
                className="min-h-12 w-full cursor-pointer appearance-none rounded-xl border border-slate-200/90 bg-white/90 py-2.5 pl-4 pr-11 text-base text-slate-900 shadow-inner shadow-slate-900/[0.03] transition-colors motion-safe:duration-200 motion-safe:hover:border-slate-300 motion-safe:hover:shadow-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/25"
                value={roleFilter}
                onChange={(e) => onRoleChange(e.target.value)}
              >
                <option value={ALL_ROLES}>All roles</option>
                {roles.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-teal-600/70 motion-safe:transition-transform motion-safe:duration-200 group-hover:-translate-y-[55%]"
                aria-hidden
              />
            </div>
          </label>

          <label className="flex min-h-11 flex-1 flex-col gap-2 text-sm font-semibold text-slate-700">
            <span>Certification</span>
            <div className="group relative">
              <select
                className="min-h-12 w-full cursor-pointer appearance-none rounded-xl border border-slate-200/90 bg-white/90 py-2.5 pl-4 pr-11 text-base text-slate-900 shadow-inner shadow-slate-900/[0.03] transition-colors motion-safe:duration-200 motion-safe:hover:border-slate-300 motion-safe:hover:shadow-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/25"
                value={certId}
                onChange={(e) => {
                  const next = getCertificationById(e.target.value);
                  if (next) pickCert(next);
                }}
              >
                {filteredCerts.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-teal-600/70 motion-safe:transition-transform motion-safe:duration-200 group-hover:-translate-y-[55%]"
                aria-hidden
              />
            </div>
          </label>
        </div>

        <div
          className="mb-8 print:hidden"
          role="tablist"
          aria-label="Switch between score entry and topic breakdown"
        >
          <div className="flex rounded-2xl border border-slate-200/80 bg-slate-100/70 p-1 shadow-inner shadow-slate-900/[0.04]">
            <button
              type="button"
              role="tab"
              id="tab-scores"
              aria-selected={workspaceView === "scores"}
              aria-controls="scores-workspace"
              tabIndex={workspaceView === "scores" ? 0 : -1}
              onClick={() => setWorkspaceView("scores")}
              className={
                workspaceView === "scores"
                  ? "flex flex-1 items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-semibold text-teal-900 shadow-md shadow-teal-900/10 ring-1 ring-teal-200/60 transition-all motion-safe:duration-200"
                  : "flex flex-1 items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-slate-600 transition-all motion-safe:duration-200 motion-safe:hover:bg-white/60 motion-safe:hover:text-slate-800"
              }
            >
              <ListChecks className="h-4 w-4 shrink-0" aria-hidden />
              Enter scores
            </button>
            <button
              type="button"
              role="tab"
              id="tab-breakdown"
              aria-selected={workspaceView === "breakdown"}
              aria-controls="breakdown-workspace"
              tabIndex={workspaceView === "breakdown" ? 0 : -1}
              onClick={() => setWorkspaceView("breakdown")}
              className={
                workspaceView === "breakdown"
                  ? "flex flex-1 items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-semibold text-violet-950 shadow-md shadow-violet-900/10 ring-1 ring-violet-200/60 transition-all motion-safe:duration-200"
                  : "flex flex-1 items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-slate-600 transition-all motion-safe:duration-200 motion-safe:hover:bg-white/60 motion-safe:hover:text-slate-800"
              }
            >
              <BarChart3 className="h-4 w-4 shrink-0" aria-hidden />
              Topic breakdown
            </button>
          </div>
        </div>

        <div
          id="scores-workspace"
          role="tabpanel"
          aria-labelledby="tab-scores"
          className={
            workspaceView === "scores" ? "" : "hidden print:block"
          }
        >
        <form
          id="calc-form"
          className="space-y-4"
          onSubmit={onCalculate}
          noValidate
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {Object.keys(cert.categories).map((category) => {
              const id = `cat-${toKebabCase(category)}`;
              const val = scores[category];
              const displayVal = Number.isNaN(val) ? "" : String(val);
              const errMsg = fieldErrors[category];
              const isMissingValueError = errMsg === "Enter a number.";
              return (
                <div key={category} className="flex flex-col gap-1">
                  <label
                    htmlFor={id}
                    className={
                      isMissingValueError
                        ? "text-sm font-semibold text-red-800"
                        : "text-sm font-semibold text-slate-700"
                    }
                  >
                    {category}
                  </label>
                  <input
                    id={id}
                    name={category}
                    type="number"
                    min={0}
                    max={100}
                    step={1}
                    inputMode="numeric"
                    required
                    value={displayVal}
                    onChange={(e) => onScoreChange(category, e.target.value)}
                    className={
                      isMissingValueError
                        ? "min-h-12 rounded-xl border-2 border-red-400 bg-rose-50/70 px-4 text-base text-slate-900 shadow-inner shadow-red-900/10 transition-colors motion-safe:duration-200 motion-safe:hover:border-red-500 motion-safe:hover:shadow-sm focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/35"
                        : "min-h-12 rounded-xl border border-slate-200/90 bg-white/90 px-4 text-base text-slate-900 shadow-inner shadow-slate-900/[0.03] transition-colors motion-safe:duration-200 motion-safe:hover:border-slate-300/95 motion-safe:hover:shadow-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/25"
                    }
                    aria-invalid={fieldErrors[category] ? true : undefined}
                    aria-describedby={
                      fieldErrors[category] ? `${id}-err` : undefined
                    }
                  />
                  {fieldErrors[category] && (
                    <p id={`${id}-err`} className="text-sm text-red-600">
                      {fieldErrors[category]}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-3 print:hidden">
            <button
              type="submit"
              className="inline-flex min-h-12 min-w-[148px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 px-6 font-semibold text-white shadow-lg shadow-teal-600/30 transition-all motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:from-teal-500 motion-safe:hover:to-cyan-500 motion-safe:hover:shadow-xl motion-safe:hover:shadow-teal-600/35 motion-safe:active:translate-y-0 motion-safe:active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              <Calculator className="h-5 w-5" aria-hidden />
              Calculate
            </button>
            <button
              type="button"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200/90 bg-white/80 px-5 font-semibold text-slate-800 shadow-sm backdrop-blur-sm transition-all motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-slate-300 motion-safe:hover:bg-white motion-safe:hover:shadow-md motion-safe:active:translate-y-0 motion-safe:active:scale-[0.98]"
              onClick={onClear}
            >
              Clear
            </button>
          </div>
        </form>

        </div>

        <div
          id="breakdown-workspace"
          role="tabpanel"
          aria-labelledby="tab-breakdown"
          className={
            workspaceView === "breakdown" ? "" : "hidden print:block"
          }
        >
          {!result ? (
            <div className="rounded-2xl border border-dashed border-slate-300/90 bg-slate-50/80 px-6 py-12 text-center text-sm text-slate-600">
              <p className="mx-auto max-w-md font-medium text-slate-700">
                Go to <strong className="text-slate-900">Enter scores</strong>,
                fill in your section percentages, then press{" "}
                <strong className="text-slate-900">Calculate</strong> to see
                your estimate and topic breakdown here.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              <div
                key={`${certId}-${result.final}`}
                className={`animate-ui-fade-up space-y-3 rounded-2xl border p-4 shadow-md ring-1 sm:p-5 print:border print:border-slate-200 print:bg-slate-50 print:shadow-none print:ring-0 ${
                  resultPassed
                    ? "border-emerald-300/55 bg-gradient-to-br from-emerald-50/95 via-teal-50/50 to-cyan-50/35 shadow-emerald-900/[0.07] ring-emerald-200/50"
                    : "border-amber-300/55 bg-gradient-to-br from-amber-50/92 via-orange-50/45 to-rose-50/35 shadow-amber-900/[0.06] ring-amber-200/45"
                }`}
                aria-live="polite"
                aria-atomic="true"
              >
                <div className="flex flex-wrap items-start gap-2">
                  {resultPassed ? (
                    <CheckCircle2
                      className="mt-0.5 h-6 w-6 shrink-0 text-emerald-600 motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:scale-105"
                      aria-hidden
                    />
                  ) : (
                    <Compass
                      className="mt-0.5 h-6 w-6 shrink-0 text-amber-600 motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:rotate-12"
                      aria-hidden
                    />
                  )}
                  <div className="min-w-0 flex-1 space-y-0.5">
                    <p
                      className={
                        resultPassed
                          ? "text-base font-bold leading-snug tracking-tight text-emerald-950"
                          : "text-base font-bold leading-snug tracking-tight text-amber-950"
                      }
                    >
                      {result.message}
                    </p>
                    <p className="text-[0.65rem] font-semibold uppercase leading-tight tracking-wider text-slate-500">
                      {resultPassed
                        ? "Passing estimate"
                        : "Below passing estimate"}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-x-8 gap-y-2 border-t border-white/60 pt-3 text-slate-800 print:border-slate-200">
                  <p>
                    <span className="text-xs font-medium text-slate-500">
                      Final score
                    </span>
                    <span
                      className={
                        resultPassed
                          ? "ml-2 text-xl font-bold tabular-nums leading-none text-emerald-800"
                          : "ml-2 text-xl font-bold tabular-nums leading-none text-amber-900"
                      }
                    >
                      {result.final}
                    </span>
                  </p>
                  <p>
                    <span className="text-xs font-medium text-slate-500">
                      Score needed
                    </span>
                    <span className="ml-2 text-xl font-bold tabular-nums leading-none text-slate-700">
                      {cert.passingScore}
                    </span>
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-violet-200/40 bg-gradient-to-b from-white/95 to-violet-50/30 p-4 shadow-md shadow-violet-950/[0.04] ring-1 ring-violet-100/40 motion-safe:transition-all motion-safe:duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-lg motion-safe:hover:shadow-violet-950/[0.06] sm:p-5 print:border-slate-200 print:bg-white print:shadow-none print:ring-0">
                <div className="mb-3 border-b border-violet-100/80 pb-3">
                  <p className="text-base font-bold text-slate-900">
                    Topic breakdown
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-600">
                    Highest impact first
                  </p>
                </div>
                <div
                  className="mb-2 hidden items-baseline justify-between gap-3 text-[0.65rem] font-semibold uppercase tracking-wide text-slate-400 sm:flex"
                  aria-hidden
                >
                  <span>Topic</span>
                  <span className="shrink-0 tabular-nums">Earned / weight</span>
                </div>
                <ul
                  className="m-0 list-none space-y-3 p-0"
                  aria-label="Per topic: earned contribution out of exam weight"
                >
                  {moreRowsByImpact.map((row) => {
                    const maxPts = row.weightRounded;
                    const earned = row.earnedRounded;
                    const rawPct = scores[row.categoryName];
                    const yourPct =
                      rawPct === undefined || !Number.isFinite(rawPct)
                        ? null
                        : Math.round(rawPct);
                    const fillPct =
                      maxPts > 0
                        ? Math.min(100, Math.round((earned / maxPts) * 100))
                        : 0;
                    const barLabel =
                      yourPct === null
                        ? `${row.categoryName}: no section score; 0% out of ${maxPts}% (exam weight)`
                        : `${row.categoryName}: ${earned}% out of ${maxPts}% toward final score`;
                    const scoreCompact =
                      yourPct === null
                        ? `— / ${maxPts}%`
                        : `${earned}% / ${maxPts}%`;
                    return (
                      <li
                        key={row.categoryName}
                        className="space-y-2 border-b border-violet-100/70 pb-3 last:border-b-0 last:pb-0"
                      >
                        <div className="flex min-w-0 items-baseline justify-between gap-3">
                          <span className="min-w-0 truncate text-sm font-semibold leading-snug text-slate-900">
                            {row.categoryName}
                          </span>
                          <span className="shrink-0 tabular-nums text-sm font-semibold tracking-tight text-slate-900">
                            {scoreCompact}
                          </span>
                        </div>
                        <div
                          className="h-2 w-full overflow-hidden rounded-full bg-violet-100/90 ring-1 ring-violet-200/40"
                          role="img"
                          aria-label={barLabel}
                        >
                          <div
                            className="h-full min-w-0 rounded-full bg-gradient-to-r from-violet-600 to-teal-500 motion-safe:transition-[width] motion-safe:duration-500 motion-safe:ease-out"
                            style={{ width: `${fillPct}%` }}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
