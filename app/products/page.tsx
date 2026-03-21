"use client";

import { useEffect, useState } from "react";
import AddToCartButton from "../../components/AddtoCartButton";
import type { Product } from "../../types/product";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch("http://localhost:3001/products", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Erro ao carregar produtos");
        }

        const data: Product[] = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Resposta inválida do backend");
        }

        setProducts(data);
      } catch (error) {
        console.error(error);
        setErrorMessage("Erro ao carregar produtos");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) {
    return (
      <div style={{ padding: 20 }}>
        <p>Carregando produtos...</p>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div style={{ padding: 20 }}>
        <h1>Produtos</h1>
        <p>{errorMessage}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Produtos</h1>

      {products.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
            marginTop: 20,
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: 8,
                padding: 16,
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: 220,
                  objectFit: "cover",
                  borderRadius: 8,
                }}
              />

              <h3 style={{ marginTop: 12 }}>{product.name}</h3>
              <p>{product.description}</p>
              <p>
                <strong>R$ {product.price.toFixed(2)}</strong>
              </p>

              <AddToCartButton product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}