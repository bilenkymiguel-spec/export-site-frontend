export type CurrencyCode =
  | "BRL"
  | "USD"
  | "EUR"
  | "ISK"
  | "CHF"
  | "NOK"
  | "RUB"
  | "INR"
  | "CNY"
  | "ZAR"
  | "SAR"
  | "EGP"
  | "AED"
  | "ETB"
  | "IDR"
  | "IRR";

export function convertPrice(
  priceInBRL: number,
  selectedCurrency: CurrencyCode,
  rates: Record<string, number>
) {
  const rate = rates[selectedCurrency] ?? 1;
  return priceInBRL * rate;
}

export function formatCurrency(value: number, currency: CurrencyCode) {
  const localeMap: Record<CurrencyCode, string> = {
    BRL: "pt-BR",
    USD: "en-US",
    EUR: "de-DE",
    ISK: "is-IS",
    CHF: "de-CH",
    NOK: "no-NO",
    RUB: "ru-RU",
    INR: "en-IN",
    CNY: "zh-CN",
    ZAR: "en-ZA",
    SAR: "ar-SA",
    EGP: "ar-EG",
    AED: "ar-AE",
    ETB: "am-ET",
    IDR: "id-ID",
    IRR: "fa-IR",
  };

  return new Intl.NumberFormat(localeMap[currency] || "en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export const currencyOptions: { code: CurrencyCode; label: string }[] = [
  { code: "BRL", label: "BRL - Real brasileiro" },
  { code: "USD", label: "USD - US Dollar" },
  { code: "EUR", label: "EUR - Euro" },

  { code: "ISK", label: "ISK - Icelandic Króna" },
  { code: "CHF", label: "CHF - Swiss Franc" },
  { code: "NOK", label: "NOK - Norwegian Krone" },

  { code: "RUB", label: "RUB - Russian Ruble" },
  { code: "INR", label: "INR - Indian Rupee" },
  { code: "CNY", label: "CNY - Chinese Yuan" },
  { code: "ZAR", label: "ZAR - South African Rand" },
  { code: "SAR", label: "SAR - Saudi Riyal" },
  { code: "EGP", label: "EGP - Egyptian Pound" },
  { code: "AED", label: "AED - UAE Dirham" },
  { code: "ETB", label: "ETB - Ethiopian Birr" },
  { code: "IDR", label: "IDR - Indonesian Rupiah" },
  { code: "IRR", label: "IRR - Iranian Rial" },
];