import Link from "next/link";

type Product = {
  id: number;
  name: string;
  price: number;
  image?: string;
  category?: string;
};

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ||
  "https://backend-export-production.up.railway.app";

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/products`, {
      cache: "no-store",
    });

    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="page-shell">
      {/* HEADER */}
      <header className="site-header">
        <div className="container site-header-inner">
          <button className="icon-btn">☰</button>

          <div className="brand-block">
            <p className="brand-eyebrow">Curadoria brasileira</p>
            <h1 className="brand-title">D’OUTRO LADO</h1>
          </div>

          <div className="header-actions">
            <Link href="/auth" className="icon-btn">👤</Link>
            <Link href="/cart" className="icon-btn">🛒</Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Boutique internacional</p>

            <h2 className="hero-title">
              Produtos brasileiros com presença premium.
            </h2>

            <p className="hero-text">
              Curadoria refinada com foco em exportação para mercados de alto padrão.
            </p>

            <div className="hero-actions">
              <Link href="/produtos" className="gold-btn">
                Explorar coleção
              </Link>

              <Link href="/checkout" className="ghost-btn">
                Fazer pedido
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
              alt="Editorial"
            />
          </div>
        </div>
      </section>

      {/* PRODUTOS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Seleção</p>
              <h3 className="section-title">Curadoria atual</h3>
            </div>

            <Link href="/produtos" className="outline-btn">
              Ver catálogo
            </Link>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <article key={product.id} className="product-card">
                <div className="product-media">
                  {product.image ? (
                    <img src={product.image} alt={product.name} />
                  ) : (
                    <div className="product-media-placeholder">
                      <p className="mini-brand">D’OUTRO LADO</p>
                      <p className="mini-copy">Imagem do produto</p>
                    </div>
                  )}
                </div>

                <div className="product-body">
                  <p className="product-category">
                    {product.category || "Produto"}
                  </p>

                  <h4 className="product-name">{product.name}</h4>

                  <div className="product-row">
                    <span className="product-price">€ {product.price}</span>

                    <Link href="/produtos" className="outline-btn">
                      Ver item
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}