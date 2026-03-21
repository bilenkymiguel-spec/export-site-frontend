import { Product } from "../types/product";

export function scoreProduct(product: Product, quantity: number) {
  let score = 0;

  if (product.price > 300) score += 2;
  if (product.category === "oculos") score += 3;

  score += quantity;

  return score;
}