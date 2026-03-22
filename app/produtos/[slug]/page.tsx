import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import { getAllCategories, getCategoryBySlug } from "../../../data/categoryData";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getAllCategories().map((category) => ({
    slug: category.slug,
  }));
}

export default async function ProductCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return (
    <main className="site-shell">
      <Navbar />

      <section className="category-hero">
        <div className="category-hero-copy">
          <p className="section-eyebrow">{category.eyebrow}</p>
          <h1 className="category-title">{category.title}</h1>
          <p className="category-description">{category.description}</p>

          <Link href="/checkout" className="primary-cta">
            FAZER PEDIDO
          </Link>
        </div>

        <div className="category-hero-image">
          <img src={category.heroImage} alt={category.title} />
        </div>
      </section>

      <section className="products-section">
        <div className="products-grid">
          {category.products.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-card-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-card-body">
                <div className="product-card-top">
                  <h2>{product.name}</h2>
                  <span className="product-price">
                    {product.currency} {product.price.toLocaleString("pt-BR")}
                  </span>
                </div>

                <p className="product-short-description">
                  {product.shortDescription}
                </p>

                <div className="product-meta">
                  {product.material && <span>Material: {product.material}</span>}
                  {product.origin && <span>Origem: {product.origin}</span>}
                  {typeof product.exportScore === "number" && (
                    <span>Export score: {product.exportScore}</span>
                  )}
                </div>

                <p className="product-description">{product.description}</p>

                <div className="product-card-actions">
                  <Link href="/checkout" className="primary-cta small">
                    Solicitar cotação
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}