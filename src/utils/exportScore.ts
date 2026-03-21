import { Product } from "../types/product";

type Buyer = {
  country: string;
};

export function exportScore(product: Product, buyer: Buyer) {
  let score = 0;

  const country = buyer.country.toLowerCase();

  if (
    country.includes("suica") ||
    country.includes("switzerland") ||
    country.includes("alemanha") ||
    country.includes("germany") ||
    country.includes("franca") ||
    country.includes("france")
  ) {
    if (product.price > 300) score += 3;
    if (product.category === "oculos") score += 4;
    if (product.category === "calcados") score += 2;
  } else if (
    country.includes("argentina") ||
    country.includes("chile") ||
    country.includes("colombia")
  ) {
    if (product.price < 300) score += 3;
    if (product.category === "calcados") score += 3;
  } else {
    if (product.price > 200) score += 2;
  }

  return score;
}