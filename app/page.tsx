import Navbar from "../components/Navbar";
import Link from "next/link";

const fashionSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1200&q=80",
    alt: "Bolsa de couro premium sem marca",
    position: "center center",
  },
  {
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80",
    alt: "Bolsa de couro minimalista",
    position: "center 58%",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
    alt: "Acessórios neutros e elegantes",
    position: "center center",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=1200&q=80",
    alt: "Calçado elegante sem marca",
    position: "center 62%",
  },
];

const homeSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1200&q=80",
    alt: "Cerâmica decorativa minimalista",
    position: "center center",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=80",
    alt: "Mesa com cerâmica e enxoval",
    position: "center 55%",
  },
  {
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    alt: "Ambiente minimalista com decoração",
    position: "center center",
  },
  {
    image:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
    alt: "Interior com objetos de design",
    position: "center center",
  },
];

const curationPoints = [
  {
    title: "Exclusividade",
    description:
      "Seleção orientada por identidade, singularidade e diferenciação real.",
  },
  {
    title: "Acabamento",
    description:
      "Foco em matéria-prima, execução e qualidade visual consistente.",
  },
  {
    title: "Leitura internacional",
    description:
      "Produtos com estética adequada a públicos interessados em design e sofisticação.",
  },
];

function SliderTrack({
  slides,
  blockClass,
}: {
  slides: { image: string; alt: string; position?: string }[];
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
              aria-label={slide.alt}
              role="img"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: slide.position || "center center",
              }}
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

                <h2>Moda neutra, couro e acessórios</h2>

                <p>
                  Bolsas de crochê, bolsas de couro, coturnos femininos,
                  sapatos sociais, óculos de sol, carteiras e nécessaires em uma
                  seleção moderna, elegante e sem marcas aparentes.
                </p>
              </div>

              <SliderTrack slides={fashionSlides} blockClass="slider-fashion" />
            </section>

            <section className="showcase-panel">
              <div className="showcase-copy">
                <p className="showcase-eyebrow">Seleção</p>

                <h2>Cerâmica, decoração e casa</h2>

                <p>
                  Peças de decoração em cerâmica, pratos, xícaras, travessas e
                  enxoval apresentados com estética minimalista, refinada e
                  acolhedora.
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
                Produtos brasileiros exclusivos com leitura premium
              </h2>
            </div>

            <p className="section-copy">
              A D’Outro Lado apresenta uma seleção refinada de produtos
              brasileiros com forte identidade estética, conectando criação
              nacional a um público global interessado em design, autenticidade
              e sofisticação.
            </p>
          </div>
        </div>
      </section>

      <section className="curation-section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">Curadoria</p>

            <h2 className="section-heading">
              Critérios que orientam cada seleção
            </h2>
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

      <section className="home-highlight">
        <div className="container">
          <div className="highlight-box">
            <p className="section-eyebrow">Essência</p>

            <h2 className="section-heading">
              Uma vitrine sofisticada da produção brasileira
            </h2>

            <p className="section-copy narrow">
              Moda, couro, crochê, acessórios, cerâmica, decoração e enxoval
              apresentados com direção visual consistente e curadoria elegante.
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