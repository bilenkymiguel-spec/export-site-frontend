export type CurrencyCode = "BRL" | "USD" | "EUR" | "CHF";

export function detectCurrency(countryCode?: string): CurrencyCode {
  switch ((countryCode || "").toUpperCase()) {
    case "US":
      return "USD";
    case "DE":
    case "FR":
    case "IT":
    case "ES":
    case "PT":
    case "NL":
    case "BE":
    case "AT":
    case "IE":
    case "FI":
    case "LU":
      return "EUR";
    case "CH":
      return "CHF";
    default:
      return "BRL";
  }
}

export function detectCountryLabel(countryCode?: string) {
  switch ((countryCode || "").toUpperCase()) {
    case "US":
      return "United States";
    case "DE":
      return "Germany";
    case "FR":
      return "France";
    case "CH":
      return "Switzerland";
    case "BR":
      return "Brazil";
    default:
      return "International";
  }
}

export function convertFromBRL(value: number, currency: CurrencyCode) {
  const rates: Record<CurrencyCode, number> = {
    BRL: 1,
    USD: 0.2,
    EUR: 0.18,
    CHF: 0.17,
  };

  return value * rates[currency];
}

export function formatCurrency(value: number, currency: CurrencyCode) {
  const localeMap: Record<CurrencyCode, string> = {
    BRL: "pt-BR",
    USD: "en-US",
    EUR: "de-DE",
    CHF: "de-CH",
  };

  return new Intl.NumberFormat(localeMap[currency], {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(value);
}