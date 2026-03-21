"use client";

import { useEffect, useMemo, useState } from "react";
import { getOrders } from "../../services/api";

type OrderItem = {
  id: number;
  name: string;
  price: number;
  category: string;
  quantity: number;
  exportScore?: number;
};

type Order = {
  id: number;
  createdAt: string;
  updatedAt?: string;
  status: string;
  buyer: {
    email: string;
    country: string;
  };
  items: OrderItem[];
};

type CountryStats = {
  country: string;
  orders: number;
  items: number;
};

type ProductStats = {
  id: number;
  name: string;
  category: string;
  totalQuantity: number;
  totalScore: number;
  totalOrders: number;
};

export default function DashboardPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadOrders() {
      try {
        const data = await getOrders();
        setOrders(data);
      } catch (error) {
        console.error("Erro ao buscar pedidos do dashboard:", error);
      } finally {
        setLoading(false);
      }
    }

    loadOrders();
  }, []);

  const metrics = useMemo(() => {
    const totalOrders = orders.length;

    const totalItems = orders.reduce((acc, order) => {
      return (
        acc +
        order.items.reduce((itemAcc, item) => itemAcc + item.quantity, 0)
      );
    }, 0);

    const totalRevenuePotential = orders.reduce((acc, order) => {
      return (
        acc +
        order.items.reduce(
          (itemAcc, item) => itemAcc + item.price * item.quantity,
          0
        )
      );
    }, 0);

    const totalExportScore = orders.reduce((acc, order) => {
      return (
        acc +
        order.items.reduce(
          (itemAcc, item) => itemAcc + (item.exportScore ?? 0) * item.quantity,
          0
        )
      );
    }, 0);

    return {
      totalOrders,
      totalItems,
      totalRevenuePotential,
      totalExportScore,
    };
  }, [orders]);

  const countryRanking = useMemo<CountryStats[]>(() => {
    const map = new Map<string, CountryStats>();

    for (const order of orders) {
      const country = order.buyer.country?.trim() || "Não informado";
      const itemCount = order.items.reduce((acc, item) => acc + item.quantity, 0);

      if (!map.has(country)) {
        map.set(country, {
          country,
          orders: 0,
          items: 0,
        });
      }

      const current = map.get(country)!;
      current.orders += 1;
      current.items += itemCount;
    }

    return Array.from(map.values()).sort((a, b) => {
      if (b.orders !== a.orders) return b.orders - a.orders;
      return b.items - a.items;
    });
  }, [orders]);

  const productRanking = useMemo<ProductStats[]>(() => {
    const map = new Map<number, ProductStats>();

    for (const order of orders) {
      for (const item of order.items) {
        if (!map.has(item.id)) {
          map.set(item.id, {
            id: item.id,
            name: item.name,
            category: item.category,
            totalQuantity: 0,
            totalScore: 0,
            totalOrders: 0,
          });
        }

        const current = map.get(item.id)!;
        current.totalQuantity += item.quantity;
        current.totalScore += (item.exportScore ?? 0) * item.quantity;
        current.totalOrders += 1;
      }
    }

    return Array.from(map.values()).sort((a, b) => {
      if (b.totalScore !== a.totalScore) return b.totalScore - a.totalScore;
      return b.totalQuantity - a.totalQuantity;
    });
  }, [orders]);

  const statusBreakdown = useMemo(() => {
    const map = new Map<string, number>();

    for (const order of orders) {
      map.set(order.status, (map.get(order.status) ?? 0) + 1);
    }

    return Array.from(map.entries())
      .map(([status, count]) => ({ status, count }))
      .sort((a, b) => b.count - a.count);
  }, [orders]);

  function formatStatus(status: string) {
    const labels: Record<string, string> = {
      pending: "Pendente",
      in_negotiation: "Em negociação",
      approved: "Aprovado",
      rejected: "Rejeitado",
      exported: "Exportado",
    };

    return labels[status] ?? status;
  }

  if (loading) {
    return <div style={{ padding: "20px" }}>Carregando dashboard...</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard Comercial</h1>
      <p>Visão consolidada das solicitações de cotação internacional.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "16px",
          }}
        >
          <h3>Total de pedidos</h3>
          <p style={{ fontSize: "28px", fontWeight: "bold" }}>
            {metrics.totalOrders}
          </p>
        </div>

        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "16px",
          }}
        >
          <h3>Total de itens</h3>
          <p style={{ fontSize: "28px", fontWeight: "bold" }}>
            {metrics.totalItems}
          </p>
        </div>

        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "16px",
          }}
        >
          <h3>Potencial bruto</h3>
          <p style={{ fontSize: "28px", fontWeight: "bold" }}>
            R$ {metrics.totalRevenuePotential.toFixed(2)}
          </p>
        </div>

        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "16px",
          }}
        >
          <h3>Export Score total</h3>
          <p style={{ fontSize: "28px", fontWeight: "bold" }}>
            {metrics.totalExportScore}
          </p>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "20px",
          marginTop: "24px",
        }}
      >
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "16px",
          }}
        >
          <h2>Países com mais demanda</h2>

          {countryRanking.length === 0 ? (
            <p>Nenhum dado disponível.</p>
          ) : (
            countryRanking.map((country, index) => (
              <div
                key={country.country}
                style={{
                  borderBottom: "1px solid #eee",
                  padding: "10px 0",
                }}
              >
                <p>
                  <strong>
                    {index + 1}. {country.country}
                  </strong>
                </p>
                <p>Pedidos: {country.orders}</p>
                <p>Itens: {country.items}</p>
              </div>
            ))
          )}
        </div>

        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "16px",
          }}
        >
          <h2>Status dos pedidos</h2>

          {statusBreakdown.length === 0 ? (
            <p>Nenhum dado disponível.</p>
          ) : (
            statusBreakdown.map((item) => (
              <div
                key={item.status}
                style={{
                  borderBottom: "1px solid #eee",
                  padding: "10px 0",
                }}
              >
                <p>
                  <strong>{formatStatus(item.status)}</strong>
                </p>
                <p>Pedidos: {item.count}</p>
              </div>
            ))
          )}
        </div>
      </div>

      <div
        style={{
          marginTop: "24px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "16px",
        }}
      >
        <h2>Produtos com maior potencial comercial</h2>

        {productRanking.length === 0 ? (
          <p>Nenhum produto encontrado.</p>
        ) : (
          productRanking.map((product, index) => (
            <div
              key={product.id}
              style={{
                borderBottom: "1px solid #eee",
                padding: "12px 0",
              }}
            >
              <p>
                <strong>
                  {index + 1}. {product.name}
                </strong>
              </p>
              <p>Categoria: {product.category}</p>
              <p>Quantidade total: {product.totalQuantity}</p>
              <p>Pedidos em que apareceu: {product.totalOrders}</p>
              <p>Export Score acumulado: {product.totalScore}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}