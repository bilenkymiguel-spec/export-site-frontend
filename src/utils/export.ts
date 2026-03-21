export type ExportCountry =
  | "USA"
  | "EU"
  | "CH"
  | "NO"
  | "AE"
  | "CN"
  | "IN"
  | "ZA";

export const exportConfig: Record<
  ExportCountry,
  {
    label: string;
    taxRate: number; // % taxa exportação
    shippingRate: number; // % frete estimado
  }
> = {
  USA: {
    label: "Estados Unidos",
    taxRate: 5,
    shippingRate: 8,
  },
  EU: {
    label: "União Europeia",
    taxRate: 6,
    shippingRate: 9,
  },
  CH: {
    label: "Suíça",
    taxRate: 7,
    shippingRate: 10,
  },
  NO: {
    label: "Noruega",
    taxRate: 7,
    shippingRate: 11,
  },
  AE: {
    label: "Emirados Árabes Unidos",
    taxRate: 4,
    shippingRate: 12,
  },
  CN: {
    label: "China",
    taxRate: 6,
    shippingRate: 13,
  },
  IN: {
    label: "Índia",
    taxRate: 5,
    shippingRate: 14,
  },
  ZA: {
    label: "África do Sul",
    taxRate: 6,
    shippingRate: 12,
  },
};

export function calculateExportCosts(
  baseValue: number,
  country: ExportCountry
) {
  const config = exportConfig[country];

  const tax = (baseValue * config.taxRate) / 100;
  const shipping = (baseValue * config.shippingRate) / 100;

  const total = baseValue + tax + shipping;

  return {
    tax,
    shipping,
    total,
  };
}