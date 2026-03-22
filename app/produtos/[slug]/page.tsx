"use client";

import { notFound } from "next/navigation";
import { getCategoryBySlug } from "../../../data/categoryData";

type PageProps = {
  params: {
    slug: string;
  };
};

export default function CategoryPage({ params }: PageProps) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  return (
    <main style={{ padding: "40px" }}>
      <h1>{category.title}</h1>
      <p>{category.description}</p>

      <div style={{ marginTop: "24px" }}>
        <p>Slug: {category.slug}</p>
        <p>Imagem: {category.image}</p>
      </div>
    </main>
  );
}