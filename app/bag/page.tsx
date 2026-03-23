import Link from "next/link";
import Navbar from "../../components/Navbar";

const bagItems = [
  {
    title: "Bolsa de couro",
    category: "Moda, estilo e acessórios",
    note: "Item de demonstração para a estrutura visual da bag.",
  },
  {
    title: "Travessa de cerâmica",
    category: "Casa, cerâmica e decoração",
    note: "Peça de exemplo para manter a página pronta e elegante.",
  },
];

export default function BagPage() {
  return (
    <main className="site-shell">
      <Navbar />

      <section className="inner-hero inner-hero--compact">
        <div className="container">
          <p className="section-eyebrow">Bag</p>
          <h1 className="inner-page-title">Sua seleção</h1>
          <p className="inner-page-description">
            Itens reunidos para consulta e continuidade do interesse.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="bag-layout">
            <div className="bag-list">
              {bagItems.map((item) => (
                <article key={item.title} className="bag-item">
                  <div>
                    <p className="bag-item-category">{item.category}</p>
                    <h2>{item.title}</h2>
                    <p>{item.note}</p>
                  </div>

                  <button type="button" className="secondary-cta bag-remove">
                    Remover
                  </button>
                </article>
              ))}
            </div>

            <aside className="bag-summary">
              <p className="section-eyebrow">Resumo</p>
              <h2 className="section-heading">Pronto para avançar</h2>
              <p className="section-copy">
                Revise sua seleção e siga para a etapa de demonstração de
                interesse.
              </p>

              <div className="bag-summary-actions">
                <Link href="/checkout" className="primary-cta">
                  Ir para pedido
                </Link>

                <Link href="/" className="secondary-cta">
                  Continuar navegando
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}