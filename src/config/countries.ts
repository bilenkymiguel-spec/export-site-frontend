export type CountryConfig = {
  code: string;
  name: string;
  currency: string;
  locale: string;
  exchangeRate: number;
  taxRate: number;
  shippingCost: number;
  markup: number;
};

export const countryConfig: Record<string, CountryConfig> = {
  brazil: {
    code: "BR",
    name: "Brasil",
    currency: "BRL",
    locale: "pt-BR",
    exchangeRate: 1,
    taxRate: 0,
    shippingCost: 0,
    markup: 1
  },
  switzerland: {
    code: "CH",
    name: "Suíça",
    currency: "CHF",
    locale: "de-CH",
    exchangeRate: 0.18,
    taxRate: 0.08,
    shippingCost: 40,
    markup: 3.5
  },
  germany: {
    code: "DE",
    name: "Alemanha",
    currency: "EUR",
    locale: "de-DE",
    exchangeRate: 0.19,
    taxRate: 0.19,
    shippingCost: 35,
    markup: 3.0
  },
  portugal: {
    code: "PT",
    name: "Portugal",
    currency: "EUR",
    locale: "pt-PT",
    exchangeRate: 0.19,
    taxRate: 0.23,
    shippingCost: 30,
    markup: 2.8
  },
  usa: {
    code: "US",
    name: "Estados Unidos",
    currency: "USD",
    locale: "en-US",
    exchangeRate: 0.20,
    taxRate: 0.07,
    shippingCost: 45,
    markup: 3.2
  }
};