"use client";

import { useCart } from "../context/CartContext";

export default function CartView() {
  const { cart } = useCart();

  return (
    <div style={{ marginTop: 30 }}>
      <h2>Carrinho</h2>

      {cart.length === 0 && <p>Vazio</p>}

      {cart.map((item) => (
        <div key={item.id}>
          {item.name} - {item.quantity}x
        </div>
      ))}
    </div>
  );
}