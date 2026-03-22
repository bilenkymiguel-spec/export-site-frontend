import Navbar from "../../../components/Navbar";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllCategories, getCategoryBySlug } from "../../../data/categoryData";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAllCategories().map((category) => ({
    slug: category.slug,
  }));
}

export default function CategoriaPage({ params }: PageProps) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  return (
    <main className="site-shell">
      <Navbar />

      <section className="category-hero">
        <div
          className="category-hero-image"
          style={{ backgroundImage: `url(${category.heroImage})` }}
        />
        <div className="category-hero-overlay" />

        <div className="container category-hero-content">
          <p className="section-eyebrow">{category.eyebrow}</p>
          <h1 className="internal-title">{category.shortTitle}</h1>
          <p className="internal-description">{category.description}</p>
        </div>
      </section>

      <section className="internal-section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">Curadoria</p>
            <h2 className="section-heading">Linhas selecionadas</h2>
          </div>

          <div className="product-grid">
            {category.items.map((item) => (
              <article key={item.name} className="product-card">
                <div className="product-card-top" />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className="internal-actions">
            <Link href="/checkout" className="primary-cta">
              Demonstrar interesse
            </Link>

            <Link href="/contato" className="secondary-cta">
              Entrar em contato
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}