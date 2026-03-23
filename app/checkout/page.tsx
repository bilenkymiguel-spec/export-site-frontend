"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function CheckoutPage() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [details, setDetails] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    alert("Pedido enviado com sucesso");
  }

  return (
    <main className="site-shell">
      <Navbar />

      <section className="checkout-section">
        <div className="checkout-container">
          <div className="checkout-header">
            <p className="checkout-label">Solicitação</p>
            <h1>Solicitar cotação</h1>
          </div>

          <form onSubmit={handleSubmit} className="checkout-form">
            <input
              type="text"
              placeholder="Nome ou empresa"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="País"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />

            <textarea
              placeholder="Detalhes do pedido"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              rows={5}
              required
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