export function template(strings: TemplateStringsArray, ...values: unknown[]) {
  return {
    strings: strings.raw,
    values,
  };
}
