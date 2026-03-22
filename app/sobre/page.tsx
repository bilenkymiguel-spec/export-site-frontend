import Navbar from "../../components/Navbar";

export default function SobrePage() {
  return (
    <main className="site-shell">
      <Navbar />

      <section className="internal-hero">
        <div className="container">
          <p className="section-eyebrow">Sobre</p>
          <h1 className="internal-title">Uma curadoria brasileira com leitura internacional</h1>
          <p className="internal-description">
            A D’Outro Lado apresenta produtos brasileiros exclusivos para pessoas,
            boutiques e compradores interessados em design, autenticidade e sofisticação.
          </p>
        </div>
      </section>

      <section className="internal-section">
        <div className="container">
          <div className="content-grid">
            <div>
              <p className="section-eyebrow">Posicionamento</p>
              <h2 className="section-heading">
                Uma vitrine refinada da produção brasileira
              </h2>
            </div>

            <div className="content-stack">
              <p className="section-copy">
                Nosso foco está em selecionar produtos com identidade visual forte,
                acabamento consistente e potencial de leitura premium em mercados
                internacionais.
              </p>

              <p className="section-copy">
                A proposta não é volume. É direção estética, exclusividade e
                apresentação cuidadosa, unindo Brasil, design e sofisticação.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="internal-section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">Critérios</p>
            <h2 className="section-heading">O que orienta cada escolha</h2>
          </div>

          <div className="info-card-grid">
            <article className="info-card">
              <h3>Estética</h3>
              <p>
                Produtos com presença visual elegante, silenciosa e contemporânea.
              </p>
            </article>

            <article className="info-card">
              <h3>Acabamento</h3>
              <p>
                Seleção com foco em materialidade, percepção de qualidade e consistência.
              </p>
            </article>

            <article className="info-card">
              <h3>Mercado</h3>
              <p>
                Leitura internacional para clientes que valorizam curadoria e design.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}