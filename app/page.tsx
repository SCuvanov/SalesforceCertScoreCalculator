import { CertCalculator } from "@/components/cert-calculator";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <CertCalculator />
      </main>
      <SiteFooter />
    </>
  );
}
