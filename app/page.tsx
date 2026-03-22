import Navbar from "../components/Navbar";
import Link from "next/link";

const featuredCollections = [
  {
    title: "Moda, couro e acessórios",
    description:
      "Seleção brasileira com apelo internacional, acabamento refinado e linguagem contemporânea.",
    href: "/produtos/moda",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Casa, cerâmica e decoração",
    description:
      "Peças autorais com presença editorial, materiais nobres e estética sofisticada.",
    href: "/produtos/casa",
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function HomePage() {
  return (
    <main className="site-shell">
      <Navbar />

      <section className="hero-home">
        <div className="hero-home-overlay" />
        <div className="hero-home-content">
          <p className="hero-kicker">Curadoria brasileira para mercados premium</p>
          <h1>D’OUTRO LADO</h1>
          <p className="hero-description">
            Uma plataforma de apresentação comercial para marcas, peças e
            coleções brasileiras com vocação internacional.
          </p>

          <div className="hero-actions">
            <Link href="/checkout" className="primary-cta">
              Solicitar cotação
            </Link>

            <Link href="/sobre" className="secondary-cta">
              Conhecer a marca
            </Link>
          </div>
        </div>
      </section>

      <section className="home-intro">
        <div className="container">
          <div className="home-intro-grid">
            <div>
              <p className="section-eyebrow">Posicionamento</p>
              <h2 className="section-heading">
                Curadoria premium com identidade brasileira refinada
              </h2>
            </div>

            <p className="section-copy">
              O projeto D’Outro Lado apresenta produtos brasileiros com estética
              internacional, foco editorial e leitura comercial adequada para
              compradores, parceiros e mercados de maior exigência.
            </p>
          </div>
        </div>
      </section>

      <section className="collections-section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">Coleções</p>
            <h2 className="section-heading">Duas frentes centrais de curadoria</h2>
          </div>

          <div className="collections-grid">
            {featuredCollections.map((collection) => (
              <article key={collection.title} className="collection-card">
                <div
                  className="collection-image"
                  style={{ backgroundImage: `url(${collection.image})` }}
                />
                <div className="collection-content">
                  <h3>{collection.title}</h3>
                  <p>{collection.description}</p>
                  <Link href={collection.href} className="text-link">
                    Explorar categoria
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-highlight">
        <div className="container">
          <div className="highlight-box">
            <p className="section-eyebrow">Atendimento</p>
            <h2 className="section-heading">Solicitações comerciais e exportação</h2>
            <p className="section-copy narrow">
              Centralize pedidos, interesse de compra e contato comercial em uma
              experiência mais limpa, elegante e pronta para expansão.
            </p>

            <Link href="/contato" className="primary-cta">
              Entrar em contato
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}