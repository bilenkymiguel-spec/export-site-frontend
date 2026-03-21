"use client";

import { useState } from "react";
import { apiPost } from "../../services/api";

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    try {
      const response = await apiPost<{ url: string }>("/checkout", {
        items: [
          {
            id: 101,
            quantity: 1,
          },
        ],
        currency: "EUR",
      });

      window.location.href = response.url;
    } catch (error) {
      console.error("Erro no checkout", error);
    }

    setLoading(false);
  };

  return (
    <main style={{ padding: "40px" }}>
      <h1>Checkout</h1>

      <button onClick={handleCheckout} disabled={loading}>
        {loading ? "Redirecionando..." : "Pagar com Stripe"}
      </button>
    </main>
  );
}