export function toKebabCase(str: string): string {
  if (!str) return "";
  const parts =
    str.match(
      /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
    ) ?? [];
  return parts.map((x) => x.toLowerCase()).join("-");
}
