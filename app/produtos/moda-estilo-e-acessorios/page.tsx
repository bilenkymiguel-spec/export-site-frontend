import Link from "next/link";
import Navbar from "../../../components/Navbar";

const products = [
  {
    title: "Bolsas de crochê",
    description:
      "Peças com textura artesanal e leitura contemporânea, pensadas para uma apresentação sofisticada.",
  },
  {
    title: "Bolsas de couro",
    description:
      "Modelos com visual limpo, acabamento refinado e estética neutra para diferentes mercados.",
  },
  {
    title: "Coturnos femininos",
    description:
      "Calçados com presença visual, equilíbrio entre elegância e personalidade.",
  },
  {
    title: "Sapatos sociais",
    description:
      "Linhas clássicas e modernas com foco em apresentação premium e versatilidade.",
  },
  {
    title: "Óculos de sol",
    description:
      "Acessórios de linguagem minimalista, ideais para composições sofisticadas.",
  },
  {
    title: "Carteiras e nécessaires",
    description:
      "Peças funcionais em couro com forte apelo visual e acabamento elegante.",
  },
];

export default function ModaPage() {
  return (
    <main className="site-shell">
      <Navbar />

      <section className="inner-hero">
        <div className="container">
          <p className="section-eyebrow">Categoria</p>
          <h1 className="inner-page-title">Moda, estilo e acessórios</h1>
          <p className="inner-page-description">
            Uma seleção de moda neutra, couro e acessórios com linguagem visual
            refinada, elegante e sem marcas aparentes.
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
              Entre em contato para manifestar interesse e avançar para a etapa
              de atendimento.
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