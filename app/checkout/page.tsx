"use client";

import { useCart } from "../../context/CartContext";
import { useState } from "react";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export default function CheckoutPage() {
  const { cart } = useCart();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/create-checkout-session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cart,
        }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Erro ao iniciar pagamento");
      }
    } catch (err) {
      console.error(err);
      alert("Erro no checkout");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Checkout</h1>

      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - R$ {item.price} x {item.quantity}
          </li>
        ))}
      </ul>

      <button onClick={handleCheckout} disabled={loading}>
        {loading ? "Processando..." : "Finalizar compra"}
      </button>
    </div>
  );
}