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

export default async function ProdutosPage() {
  const products = await getProducts();

  return (
    <main className="page-shell">
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Catálogo</p>
              <h1 className="section-title">Produtos disponíveis</h1>
            </div>

            <Link href="/" className="outline-btn">
              Voltar
            </Link>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/produtos/${product.id}`}
                className="product-card"
              >
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

                  <h2 className="product-name">{product.name}</h2>

                  <div className="product-row">
                    <span className="product-price">€ {product.price}</span>
                    <span className="outline-btn">Ver</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}