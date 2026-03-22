"use client";

import Navbar from "../../components/Navbar";
import Link from "next/link";

const bagItems = [
  {
    id: 1,
    name: "Bolsa de couro estruturada",
    category: "Moda neutra, couro e acessórios",
    quantity: 1,
    note: "Interesse para pedido internacional",
  },
  {
    id: 2,
    name: "Conjunto de cerâmica decorativa",
    category: "Cerâmica, decoração e casa",
    quantity: 1,
    note: "Seleção para ambiente residencial",
  },
];

export default function CheckoutPage() {
  const hasItems = bagItems.length > 0;

  return (
    <main className="site-shell">
      <Navbar />

      <section className="page-section">
        <div className="page-container">
          <div className="page-header">
            <p className="section-eyebrow">Bag</p>
            <h1 className="page-title luxury">Sua seleção</h1>
            <p className="page-text">
              Revise os itens de interesse antes de avançar para o contato ou
              solicitação de pedido.
            </p>
          </div>

          {hasItems ? (
            <div className="bag-layout">
              <div className="bag-list">
                {bagItems.map((item) => (
                  <article key={item.id} className="bag-card">
                    <div className="bag-card-copy">
                      <p className="bag-category">{item.category}</p>
                      <h2>{item.name}</h2>
                      <p className="bag-note">{item.note}</p>
                    </div>

                    <div className="bag-meta">
                      <span className="bag-qty">Qtd. {item.quantity}</span>
                    </div>
                  </article>
                ))}
              </div>

              <aside className="bag-summary">
                <p className="section-eyebrow">Resumo</p>

                <div className="summary-row">
                  <span>Itens selecionados</span>
                  <strong>{bagItems.length}</strong>
                </div>

                <div className="summary-row">
                  <span>Status</span>
                  <strong>Pronto para contato</strong>
                </div>

                <p className="summary-text">
                  Esta seleção funciona como base para iniciar atendimento,
                  validar disponibilidade e estruturar o pedido.
                </p>

                <div className="summary-actions">
                  <Link href="/contato" className="primary-cta full">
                    Prosseguir
                  </Link>

                  <Link href="/" className="secondary-cta full">
                    Continuar explorando
                  </Link>
                </div>
              </aside>
            </div>
          ) : (
            <div className="empty-state">
              <p className="section-eyebrow">Bag</p>
              <h2 className="page-title luxury small-title">Nenhum item selecionado</h2>
              <p className="page-text centered">
                Sua bag está vazia no momento. Explore as categorias para montar
                sua seleção.
              </p>

              <Link href="/" className="primary-cta">
                Explorar categorias
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}