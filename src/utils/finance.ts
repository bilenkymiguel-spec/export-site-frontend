export type CurrencyCode =
  | "BRL"
  | "USD"
  | "EUR"
  | "CHF"
  | "GBP"
  | "NOK"
  | "SEK"
  | "DKK";

export const currencySymbols: Record<CurrencyCode, string> = {
  BRL: "R$",
  USD: "$",
  EUR: "€",
  CHF: "CHF",
  GBP: "£",
  NOK: "kr",
  SEK: "kr",
  DKK: "kr",
};

export function formatMoney(
  value: number,
  currency: CurrencyCode = "BRL",
  locale = "pt-BR"
): string {
  try {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      maximumFractionDigits: 2,
    }).format(value);
  } catch {
    const symbol = currencySymbols[currency] ?? currency;
    return `${symbol} ${value.toFixed(2)}`;
  }
}

export function sumValues(values: number[]): number {
  return values.reduce((acc, current) => acc + current, 0);
}

export function safeNumber(value: unknown, fallback = 0): number {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

export function calculateOrderTotal<T extends { price: number; quantity: number }>(
  items: T[]
): number {
  return items.reduce((acc, item) => {
    return acc + safeNumber(item.price) * safeNumber(item.quantity, 1);
  }, 0);
}

export function calculateAverageTicket(
  totalRevenue: number,
  totalOrders: number
): number {
  if (!totalOrders) return 0;
  return totalRevenue / totalOrders;
}