import Navbar from "../components/Navbar";
import Link from "next/link";

const fashionSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80",
    alt: "Bolsa de couro premium em composição editorial",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=80",
    alt: "Acessórios premium em composição sofisticada",
  },
  {
    image:
      "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?auto=format&fit=crop&w=1200&q=80",
    alt: "Produto de couro em contexto premium",
  },
  {
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80",
    alt: "Bolsa de couro com estética refinada",
  },
];

const homeSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1200&q=80",
    alt: "Cerâmica e decoração em ambiente sofisticado",
  },
  {
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    alt: "Ambiente de casa com objetos decorativos elegantes",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=80",
    alt: "Mesa posta com decoração premium",
  },
  {
    image:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
    alt: "Interior minimalista com objetos de design",
  },
];

const curationPoints = [
  {
    title: "Exclusividade",
    description:
      "Seleção orientada por singularidade, identidade e diferenciação real no repertório visual e material.",
  },
  {
    title: "Acabamento",
    description:
      "Atenção a qualidade percebida, matéria-prima, execução e consistência estética em cada peça apresentada.",
  },
  {
    title: "Linguagem internacional",
    description:
      "Produtos com potencial de leitura premium para públicos interessados em design, autenticidade e sofisticação.",
  },
];

function SliderTrack({
  slides,
  blockClass,
}: {
  slides: { image: string; alt: string }[];
  blockClass: string;
}) {
  const duplicatedSlides = [...slides, ...slides];

  return (
    <div className={`hero-slider-block ${blockClass}`}>
      <div className="hero-slider-track">
        {duplicatedSlides.map((slide, index) => (
          <article className="hero-slider-card" key={`${blockClass}-${index}`}>
            <div
              className="hero-slider-image"
              style={{ backgroundImage: `url(${slide.image})` }}
              aria-label={slide.alt}
              role="img"
            />
          </article>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="site-shell">
      <Navbar />

      <section className="hero-home hero-home--catalog">
        <div className="hero-home-overlay" />

        <div className="hero-home-content hero-home-content--catalog">
          <p className="hero-kicker">Curadoria brasileira</p>

          <h1>D’OUTRO LADO</h1>

          <p className="hero-description">
            Conectando produtos brasileiros exclusivos a pessoas interessadas ao
            redor do mundo.
          </p>

          <div className="hero-showcase-grid">
            <section className="showcase-panel">
              <div className="showcase-copy">
                <p className="showcase-eyebrow">Seleção</p>
                <h2>Moda casual, couro e acessórios</h2>
                <p>
                  Peças com acabamento refinado, identidade brasileira e leitura
                  internacional sofisticada.
                </p>
              </div>

              <SliderTrack slides={fashionSlides} blockClass="slider-fashion" />
            </section>

            <section className="showcase-panel">
              <div className="showcase-copy">
                <p className="showcase-eyebrow">Seleção</p>
                <h2>Cerâmica, decoração, casa</h2>
                <p>
                  Objetos e composições autorais para um repertório visual
                  elegante, acolhedor e atemporal.
                </p>
              </div>

              <SliderTrack slides={homeSlides} blockClass="slider-home" />
            </section>
          </div>
        </div>
      </section>

      <section className="home-intro">
        <div className="container">
          <div className="home-intro-grid">
            <div>
              <p className="section-eyebrow">Posicionamento</p>
              <h2 className="section-heading">
                Produtos brasileiros exclusivos apresentados com linguagem
                premium
              </h2>
            </div>

            <p className="section-copy">
              A D’Outro Lado reúne produtos nacionais com forte apelo estético,
              acabamento refinado e presença editorial, aproximando peças
              exclusivas de compradores e interessados em diferentes mercados.
            </p>
          </div>
        </div>
      </section>

      <section className="curation-section">
        <div className="container">
          <div className="section-header curation-section-header">
            <p className="section-eyebrow">Curadoria</p>
            <h2 className="section-heading">
              Critérios que orientam cada seleção apresentada
            </h2>
            <p className="section-copy curation-copy">
              A plataforma não busca volume. A proposta é apresentar produtos
              com identidade, repertório visual consistente e valor percebido
              elevado para públicos que apreciam exclusividade.
            </p>
          </div>

          <div className="curation-grid">
            {curationPoints.map((point) => (
              <article key={point.title} className="curation-card">
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="presence-section">
        <div className="container">
          <div className="presence-grid">
            <div className="presence-copy-block">
              <p className="section-eyebrow">Alcance</p>
              <h2 className="section-heading">
                Conexão entre criação brasileira e interesse internacional
              </h2>
              <p className="section-copy">
                A D’Outro Lado foi pensada para apresentar produtos brasileiros
                exclusivos a um público global interessado em design,
                autenticidade, matéria e presença estética.
              </p>
            </div>

            <div className="presence-stats">
              <div className="presence-stat-card">
                <span>Moda</span>
                <strong>Couro, acessórios e peças casuais refinadas</strong>
              </div>

              <div className="presence-stat-card">
                <span>Casa</span>
                <strong>Cerâmica, decoração e objetos com valor autoral</strong>
              </div>

              <div className="presence-stat-card">
                <span>Contato</span>
                <strong>Uma porta de entrada elegante para conversas comerciais</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-highlight">
        <div className="container">
          <div className="highlight-box">
            <p className="section-eyebrow">Essência da marca</p>
            <h2 className="section-heading">
              Uma vitrine sofisticada para descobrir o melhor do design e da
              produção brasileira
            </h2>
            <p className="section-copy narrow">
              Moda, acessórios, couro, cerâmica e objetos para casa apresentados
              com direção visual consistente, curadoria elegante e apelo
              internacional.
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