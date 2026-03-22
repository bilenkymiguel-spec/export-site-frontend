import Link from "next/link";
import Navbar from "../../../components/Navbar";

const products = [
  {
    title: "Peças de decoração em cerâmica",
    description:
      "Objetos com presença escultórica e leitura sofisticada para composições elegantes.",
  },
  {
    title: "Pratos",
    description:
      "Cerâmicas com acabamento visual refinado e forte apelo estético.",
  },
  {
    title: "Xícaras",
    description:
      "Peças delicadas e contemporâneas pensadas para um ambiente acolhedor e premium.",
  },
  {
    title: "Travessas",
    description:
      "Itens de apresentação com equilíbrio entre funcionalidade e direção visual.",
  },
  {
    title: "Enxoval",
    description:
      "Seleção de itens com linguagem minimalista, conforto visual e acabamento elegante.",
  },
  {
    title: "Casa e decoração",
    description:
      "Produtos voltados a interiores sofisticados, com estética limpa e atemporal.",
  },
];

export default function CasaPage() {
  return (
    <main className="site-shell">
      <Navbar />

      <section className="inner-hero">
        <div className="container">
          <p className="section-eyebrow">Categoria</p>
          <h1 className="inner-page-title">Casa, cerâmica e decoração</h1>
          <p className="inner-page-description">
            Uma curadoria de peças para casa com estética minimalista, refinada
            e acolhedora, valorizando cerâmica, decoração e enxoval.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="catalog-grid">
            {products.map((product) => (
              <article key={product.title} className="catalog-card">
                <p className="catalog-card-kicker">Seleção</p>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="highlight-box">
            <p className="section-eyebrow">Interesse</p>
            <h2 className="section-heading">
              Solicite informações sobre esta curadoria
            </h2>
            <p className="section-copy narrow">
              Entre em contato para conhecer melhor a seleção e seguir para o
              atendimento.
            </p>

            <div className="highlight-actions">
              <Link href="/contato" className="secondary-cta">
                Falar conosco
              </Link>
              <Link href="/checkout" className="primary-cta">
                Fazer pedido
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}