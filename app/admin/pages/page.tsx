"use client";

import { useEffect, useState } from "react";
import { apiGet } from "../../../services/api";

type ManagedPageVersion = {
  id: number;
  title: string;
  slug: string;
  content: string;
  createdBy: number;
  createdAt: string;
  changeSummary?: string;
};

type ManagedPage = {
  id: number;
  title: string;
  slug: string;
  status: "draft" | "published" | "archived";
  currentVersionId?: number;
  versions: ManagedPageVersion[];
  createdAt: string;
  updatedAt?: string;
};

export default function AdminPagesPage() {
  const [pages, setPages] = useState<ManagedPage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiGet<ManagedPage[]>("/pages")
      .then((data) => {
        setPages(data);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setError("Não foi possível carregar as páginas.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main style={{ padding: "40px" }}>
      <h1>Administração de Páginas</h1>

      {loading && <p>Carregando páginas...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && pages.length === 0 && (
        <p>Nenhuma página encontrada.</p>
      )}

      {!loading && !error && pages.length > 0 && (
        <div style={{ display: "grid", gap: "16px", marginTop: "24px" }}>
          {pages.map((page) => (
            <article
              key={page.id}
              style={{
                border: "1px solid #333",
                borderRadius: "12px",
                padding: "16px",
              }}
            >
              <h2>{page.title}</h2>
              <p>Slug: {page.slug}</p>
              <p>Status: {page.status}</p>
              <p>Versões: {page.versions.length}</p>
              <p>
                Criada em:{" "}
                {new Date(page.createdAt).toLocaleString("pt-BR")}
              </p>
              {page.updatedAt && (
                <p>
                  Atualizada em:{" "}
                  {new Date(page.updatedAt).toLocaleString("pt-BR")}
                </p>
              )}
            </article>
          ))}
        </div>
      )}
    </main>
  );
}