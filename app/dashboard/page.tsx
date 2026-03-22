"use client";

import { useEffect, useMemo, useState } from "react";
import { getOrders, type Order } from "../../services/api";

const statusOptions = [
  { value: "all", label: "Todos" },
  { value: "pending", label: "Pendente" },
  { value: "in_negotiation", label: "Em negociação" },
  { value: "approved", label: "Aprovado" },
  { value: "rejected", label: "Rejeitado" },
  { value: "exported", label: "Exportado" },
];

export default function DashboardPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getOrders()
      .then((data) => {
        setOrders(data);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setError("Não foi possível carregar os pedidos.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filteredOrders = useMemo(() => {
    if (selectedStatus === "all") {
      return orders;
    }

    return orders.filter((order) => order.status === selectedStatus);
  }, [orders, selectedStatus]);

  return (
    <main style={{ padding: "40px" }}>
      <h1>Dashboard</h1>

      <div style={{ margin: "20px 0" }}>
        <label htmlFor="status-filter">Filtrar por status: </label>
        <select
          id="status-filter"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          {statusOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {loading && <p>Carregando pedidos...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && filteredOrders.length === 0 && (
        <p>Nenhum pedido encontrado.</p>
      )}

      {!loading && !error && filteredOrders.length > 0 && (
        <div style={{ display: "grid", gap: "16px" }}>
          {filteredOrders.map((order) => (
            <article
              key={order.id}
              style={{
                border: "1px solid #333",
                borderRadius: "12px",
                padding: "16px",
              }}
            >
              <h2>Pedido #{order.id}</h2>
              <p>Status: {order.status}</p>
              <p>Cliente: {order.buyer.name || order.buyer.email}</p>
              <p>País: {order.buyer.country}</p>
              <p>Itens: {order.items.length}</p>
              <p>Criado em: {new Date(order.createdAt).toLocaleString("pt-BR")}</p>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}