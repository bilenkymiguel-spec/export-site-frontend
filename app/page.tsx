import Link from "next/link";
import Navbar from "../components/Navbar";
import { getAllCategories } from "../data/categoryData";

export default function HomePage() {
  const categories = getAllCategories();

  return (
    <main className="site-shell">
      <Navbar />

      <section className="hero-section">
        <div className="hero-copy">
          <p className="section-eyebrow">EXPORTAÇÃO CURADA</p>

          <h1 className="hero-title">
            Produtos brasileiros
            <br />
            com presença
            <br />
            premium.
          </h1>

          <p className="hero-text">
            Curadoria refinada com foco em exportação para mercados de alto
            padrão.
          </p>

          <div className="hero-actions">
            <Link href={`/produtos/${categories[0].slug}`} className="primary-cta">
              EXPLORAR COLEÇÃO
            </Link>

            <Link href="/checkout" className="secondary-cta">
              FAZER PEDIDO
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop"
            alt="Editorial de moda com estética premium"
          />
        </div>
      </section>

      <section className="catalog-section">
        <div className="section-heading">
          <p className="section-eyebrow">CATÁLOGOS</p>
          <h2 className="section-title">Curadoria em duas frentes</h2>
        </div>

        <div className="catalog-grid">
          {categories.map((category) => (
            <article key={category.slug} className="catalog-card">
              <div className="catalog-card-image">
                <img src={category.heroImage} alt={category.title} />
              </div>

              <div className="catalog-card-content">
                <p className="catalog-card-eyebrow">{category.eyebrow}</p>
                <h3>{category.title}</h3>
                <p>{category.description}</p>

                <div className="catalog-card-footer">
                  <span>{category.products.length} produtos</span>

                  <Link href={`/produtos/${category.slug}`} className="catalog-link">
                    Ver catálogo
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