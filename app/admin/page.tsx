// frontend/app/admin/page.tsx

"use client";

import { useEffect, useMemo, useState } from "react";
import { apiGet, API_BASE_URL } from "../../services/api";

type ProductRecord = {
  id: number;
  sku: string;
  name: string;
  description: string;
  category: string;
  price: number;
  currency: string;
  stock: number;
  exportScore: number;
  status: string;
  images: string[];
  createdAt: string;
  updatedAt?: string;
};

type GovernanceDecision = {
  id: number;
  title: string;
  description: string;
  requestedBy: number;
  reviewers: number[];
  status: "pending" | "approved" | "rejected" | "under_review";
  notes?: string;
  createdAt: string;
  decidedAt?: string;
};

type GovernanceSummary = {
  total: number;
  approved: number;
  pending: number;
  rejected: number;
};

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

export default function AdminPage() {
  const [products, setProducts] = useState<ProductRecord[]>([]);
  const [governance, setGovernance] = useState<GovernanceDecision[]>([]);
  const [summary, setSummary] = useState<GovernanceSummary | null>(null);
  const [pages, setPages] = useState<ManagedPage[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadDashboard() {
      try {
        setLoading(true);
        setError("");

        const [productsData, governanceData, summaryData, pagesData] =
          await Promise.all([
            apiGet<ProductRecord[]>("/products"),
            apiGet<GovernanceDecision[]>("/governance"),
            apiGet<GovernanceSummary>("/governance/summary"),
            apiGet<ManagedPage[]>("/pages"),
          ]);

        setProducts(productsData);
        setGovernance(governanceData);
        setSummary(summaryData);
        setPages(pagesData);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Erro ao carregar painel.";
        setError(message);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  const activeProducts = useMemo(
    () => products.filter((product) => product.status === "active").length,
    [products]
  );

  const totalStock = useMemo(
    () => products.reduce((acc, product) => acc + product.stock, 0),
    [products]
  );

  const averageExportScore = useMemo(() => {
    if (!products.length) return 0;

    const total = products.reduce(
      (acc, product) => acc + (product.exportScore || 0),
      0
    );

    return Math.round(total / products.length);
  }, [products]);

  if (loading) {
    return (
      <main style={styles.page}>
        <div style={styles.container}>
          <h1 style={styles.title}>Painel administrativo</h1>
          <p style={styles.muted}>Carregando dados do backend...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main style={styles.page}>
        <div style={styles.container}>
          <h1 style={styles.title}>Painel administrativo</h1>
          <p style={{ ...styles.muted, color: "#ffb3b3" }}>
            Erro ao carregar: {error}
          </p>
          <p style={styles.muted}>Verifique se o backend está rodando em:</p>
          <code style={styles.code}>{API_BASE_URL}</code>
        </div>
      </main>
    );
  }

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        <header style={styles.header}>
          <div>
            <p style={styles.eyebrow}>D’OUTRO LADO</p>
            <h1 style={styles.title}>Painel administrativo</h1>
            <p style={styles.muted}>
              Visão operacional de produtos, governança e páginas gerenciadas.
            </p>
          </div>
        </header>

        <section style={styles.grid}>
          <article style={styles.card}>
            <p style={styles.cardLabel}>Produtos totais</p>
            <h2 style={styles.metric}>{products.length}</h2>
          </article>

          <article style={styles.card}>
            <p style={styles.cardLabel}>Produtos ativos</p>
            <h2 style={styles.metric}>{activeProducts}</h2>
          </article>

          <article style={styles.card}>
            <p style={styles.cardLabel}>Estoque total</p>
            <h2 style={styles.metric}>{totalStock}</h2>
          </article>

          <article style={styles.card}>
            <p style={styles.cardLabel}>Export score médio</p>
            <h2 style={styles.metric}>{averageExportScore}</h2>
          </article>
        </section>

        <section style={styles.grid}>
          <article style={styles.card}>
            <p style={styles.cardLabel}>Governança total</p>
            <h2 style={styles.metric}>{summary?.total ?? 0}</h2>
          </article>

          <article style={styles.card}>
            <p style={styles.cardLabel}>Aprovadas</p>
            <h2 style={styles.metric}>{summary?.approved ?? 0}</h2>
          </article>

          <article style={styles.card}>
            <p style={styles.cardLabel}>Pendentes</p>
            <h2 style={styles.metric}>{summary?.pending ?? 0}</h2>
          </article>

          <article style={styles.card}>
            <p style={styles.cardLabel}>Rejeitadas</p>
            <h2 style={styles.metric}>{summary?.rejected ?? 0}</h2>
          </article>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Produtos</h2>
          </div>

          <div style={styles.tableWrap}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>ID</th>
                  <th style={styles.th}>Nome</th>
                  <th style={styles.th}>SKU</th>
                  <th style={styles.th}>Categoria</th>
                  <th style={styles.th}>Preço</th>
                  <th style={styles.th}>Estoque</th>
                  <th style={styles.th}>Score</th>
                  <th style={styles.th}>Status</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td style={styles.td}>{product.id}</td>
                    <td style={styles.td}>{product.name}</td>
                    <td style={styles.td}>{product.sku}</td>
                    <td style={styles.td}>{product.category}</td>
                    <td style={styles.td}>
                      {product.currency} {product.price}
                    </td>
                    <td style={styles.td}>{product.stock}</td>
                    <td style={styles.td}>{product.exportScore}</td>
                    <td style={styles.td}>{product.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Governança</h2>
          </div>

          <div style={styles.list}>
            {governance.map((item) => (
              <article key={item.id} style={styles.listCard}>
                <div style={styles.listTop}>
                  <h3 style={styles.listTitle}>{item.title}</h3>
                  <span style={styles.badge}>{item.status}</span>
                </div>

                <p style={styles.muted}>{item.description}</p>

                <div style={styles.metaRow}>
                  <span>Solicitante: #{item.requestedBy}</span>
                  <span>Revisores: {item.reviewers.join(", ")}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Páginas gerenciadas</h2>
          </div>

          <div style={styles.tableWrap}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>ID</th>
                  <th style={styles.th}>Título</th>
                  <th style={styles.th}>Slug</th>
                  <th style={styles.th}>Status</th>
                  <th style={styles.th}>Versões</th>
                  <th style={styles.th}>Atualizada</th>
                </tr>
              </thead>
              <tbody>
                {pages.map((page) => (
                  <tr key={page.id}>
                    <td style={styles.td}>{page.id}</td>
                    <td style={styles.td}>{page.title}</td>
                    <td style={styles.td}>{page.slug}</td>
                    <td style={styles.td}>{page.status}</td>
                    <td style={styles.td}>{page.versions.length}</td>
                    <td style={styles.td}>
                      {page.updatedAt || page.createdAt}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#0b0b0b",
    color: "#f5f1e8",
    padding: "32px 20px",
  },
  container: {
    maxWidth: 1280,
    margin: "0 auto",
  },
  header: {
    marginBottom: 32,
  },
  eyebrow: {
    margin: 0,
    color: "#c6b08a",
    fontSize: 12,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
  },
  title: {
    margin: "8px 0 10px",
    fontSize: 36,
    lineHeight: 1.1,
  },
  muted: {
    margin: 0,
    color: "rgba(245, 241, 232, 0.72)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 16,
    marginBottom: 16,
  },
  card: {
    background: "#111111",
    border: "1px solid rgba(245,241,232,0.1)",
    borderRadius: 18,
    padding: 20,
  },
  cardLabel: {
    margin: 0,
    fontSize: 13,
    color: "rgba(245, 241, 232, 0.65)",
  },
  metric: {
    margin: "10px 0 0",
    fontSize: 30,
  },
  section: {
    marginTop: 28,
    background: "#111111",
    border: "1px solid rgba(245,241,232,0.1)",
    borderRadius: 20,
    padding: 20,
  },
  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  sectionTitle: {
    margin: 0,
    fontSize: 22,
  },
  tableWrap: {
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    textAlign: "left",
    padding: "12px 10px",
    borderBottom: "1px solid rgba(245,241,232,0.12)",
    color: "rgba(245, 241, 232, 0.72)",
    fontWeight: 600,
    fontSize: 13,
  },
  td: {
    padding: "14px 10px",
    borderBottom: "1px solid rgba(245,241,232,0.08)",
    fontSize: 14,
  },
  list: {
    display: "grid",
    gap: 14,
  },
  listCard: {
    border: "1px solid rgba(245,241,232,0.08)",
    borderRadius: 16,
    padding: 16,
    background: "#0d0d0d",
  },
  listTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    marginBottom: 8,
  },
  listTitle: {
    margin: 0,
    fontSize: 18,
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(198,176,138,0.12)",
    border: "1px solid rgba(198,176,138,0.25)",
    color: "#e2cfad",
    fontSize: 12,
    textTransform: "uppercase",
  },
  metaRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 16,
    marginTop: 12,
    color: "rgba(245, 241, 232, 0.72)",
    fontSize: 13,
  },
  code: {
    display: "inline-block",
    marginTop: 8,
    padding: "8px 10px",
    background: "#111111",
    borderRadius: 10,
    border: "1px solid rgba(245,241,232,0.1)",
  },
};