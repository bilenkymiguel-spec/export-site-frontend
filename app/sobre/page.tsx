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
                A D’Outro Lado reúne uma seleção visualmente consistente de
                produtos brasileiros com forte identidade estética, acabamento
                cuidadoso e potencial de leitura internacional.
              </p>
            </article>

            <article className="info-card">
              <p className="section-eyebrow">Direção</p>
              <h2 className="section-heading">Sofisticação com clareza</h2>
              <p className="section-copy">
                O projeto foi pensado para transmitir elegância, exclusividade e
                organização, evitando excesso de informação e valorizando a
                apresentação dos produtos.
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
              Produtos brasileiros com presença e leitura premium
            </h2>
            <p className="section-copy narrow">
              Moda neutra, couro, acessórios, cerâmica, decoração e enxoval
              apresentados com uma direção visual elegante e padronizada.
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