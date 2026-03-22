"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function CheckoutPage() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const order = {
      id: Date.now(),
      buyer: {
        name,
        country,
      },
      notes,
      createdAt: new Date().toISOString(),
    };

    console.log(order);

    alert("Pedido enviado (simulação)");
  }

  return (
    <main className="site-shell">
      <Navbar />

      <section className="checkout-section">
        <div className="checkout-box">
          <h1>Solicitar cotação</h1>

          <form onSubmit={handleSubmit} className="checkout-form">
            <input
              placeholder="Nome ou empresa"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              placeholder="País"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />

            <textarea
              placeholder="Detalhes do pedido"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />

            <button type="submit" className="primary-cta">
              Enviar pedido
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}