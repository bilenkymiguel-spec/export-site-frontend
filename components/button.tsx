"use client";

import type { Product } from "../types/product";

type AddToCartButtonProps = {
  product: Product;
  onAdd?: () => void;
};

export default function AddToCartButton({
  product,
  onAdd,
}: AddToCartButtonProps) {
  return (
    <button onClick={onAdd}>
      Adicionar ao carrinho
    </button>
  );
}