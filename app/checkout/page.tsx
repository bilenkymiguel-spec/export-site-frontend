"use client";

import Navbar from "../../components/Navbar";

export default function CheckoutPage() {
  return (
    <main className="site-shell">
      <Navbar />

      <section className="inner-hero">
        <div className="container">
          <p className="section-eyebrow">Pedido</p>
          <h1 className="inner-page-title">Demonstrar interesse</h1>
          <p className="inner-page-description">
            Envie suas informações para iniciar o atendimento com clareza e
            objetividade.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container form-shell">
          <div className="form-card form-card--wide">
            <div className="form-card-header">
              <p className="section-eyebrow">Solicitação</p>
              <h2 className="section-heading">Informações iniciais</h2>
            </div>

            <form className="premium-form premium-form-grid">
              <label className="form-field">
                <span>Nome</span>
                <input type="text" placeholder="Seu nome" />
              </label>

              <label className="form-field">
                <span>E-mail</span>
                <input type="email" placeholder="seuemail@exemplo.com" />
              </label>

              <label className="form-field">
                <span>Telefone</span>
                <input type="tel" placeholder="16 99197-7845" />
              </label>

              <label className="form-field">
                <span>País</span>
                <input type="text" placeholder="Seu país" />
              </label>

              <label className="form-field form-field-full">
                <span>Interesse</span>
                <textarea
                  rows={6}
                  placeholder="Descreva a categoria ou os produtos de interesse"
                />
              </label>

              <button type="submit" className="primary-cta form-submit">
                Enviar solicitação
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}