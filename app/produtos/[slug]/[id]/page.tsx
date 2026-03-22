"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "../../../../context/CartContext";

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

export default function ProdutoPage({
  params,
}: {
  params: { id: string; slug: string };
}) {
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`${API_BASE_URL}/products`)
      .then((res) => res.json())
      .then((data: Product[]) => {
        const found = data.find((p) => p.id === Number(params.id));
        setProduct(found || null);
      })
      .catch(() => setProduct(null));
  }, [params.id]);

  if (!product) {
    return (
      <main className="page-shell">
        <div className="container section">
          <Link href="/produtos" className="outline-btn">
            Voltar
          </Link>

          <div style={{ marginTop: "32px" }}>
            <p>Produto não encontrado.</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <section className="section">
        <div className="container">
          <Link href="/produtos" className="outline-btn">
            Voltar
          </Link>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
              marginTop: "40px",
            }}
          >
            <div className="hero-visual">
              {product.image ? (
                <img src={product.image} alt={product.name} />
              ) : (
                <div className="product-media-placeholder">
                  <p className="mini-brand">D’OUTRO LADO</p>
                  <p className="mini-copy">Imagem do produto</p>
                </div>
              )}
            </div>

            <div>
              <p className="product-category">
                {product.category || "Produto"}
              </p>

              <h1 className="hero-title" style={{ fontSize: "52px" }}>
                {product.name}
              </h1>

              <p className="product-price" style={{ marginTop: "20px" }}>
                € {product.price}
              </p>

              <p
                className="hero-text"
                style={{ marginTop: "20px", maxWidth: "500px" }}
              >
                Produto selecionado para exportação com padrão internacional,
                pensado para mercados premium.
              </p>

              <div style={{ marginTop: "30px" }}>
                <button
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                      category: product.category,
                    })
                  }
                  className="gold-btn"
                >
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}