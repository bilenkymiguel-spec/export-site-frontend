import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function SobrePage() {
  return (
    <main className="site-shell">
      <Navbar />

      <section className="inner-hero">
        <div className="container">
          <p className="section-eyebrow">Sobre</p>
          <h1 className="inner-page-title">D’OUTRO LADO</h1>
          <p className="inner-page-description">
            Uma vitrine digital dedicada a apresentar produtos brasileiros
            exclusivos a pessoas interessadas ao redor do mundo, com curadoria,
            sofisticação e leitura internacional.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <article className="info-card">
              <p className="section-eyebrow">Essência</p>
              <h2 className="section-heading">Curadoria brasileira refinada</h2>
              <p className="section-copy">
                A proposta da D’Outro Lado é conectar a produção brasileira com
                um público que valoriza design, autenticidade, acabamento e
                identidade estética.
              </p>
            </article>

            <article className="info-card">
              <p className="section-eyebrow">Direção</p>
              <h2 className="section-heading">Seleção com leitura premium</h2>
              <p className="section-copy">
                Cada categoria é organizada para transmitir sofisticação,
                clareza visual e consistência, evitando excesso de informação e
                mantendo o foco no produto.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="highlight-box">
            <p className="section-eyebrow">Posicionamento</p>
            <h2 className="section-heading">
              Produtos com identidade, presença e potencial internacional
            </h2>
            <p className="section-copy narrow">
              Moda neutra, couro, crochê, acessórios, cerâmica, decoração e
              enxoval apresentados com uma direção estética elegante e
              consistente.
            </p>

            <div className="highlight-actions">
              <Link href="/contato" className="secondary-cta">
                Entrar em contato
              </Link>
              <Link href="/checkout" className="primary-cta">
                Demonstrar interesse
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}