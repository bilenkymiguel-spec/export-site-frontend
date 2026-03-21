"use client";

import { useEffect, useState } from "react";
import { apiGet } from "../services/api";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  images: string[];
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    apiGet<Product[]>("/products")
      .then(setProducts)
      .catch(() => console.log("Erro ao buscar produtos"));
  }, []);

  return (
    <main style={{ padding: "40px" }}>
      <h1>D’OUTRO LADO</h1>

      <div style={{ display: "grid", gap: "20px" }}>
        {products.map((p) => (
          <div key={p.id}>
            <h2>{p.name}</h2>
            <p>€ {p.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}