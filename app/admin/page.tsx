"use client";

import { useEffect, useMemo, useState } from "react";
import { getOrders, updateOrderStatus } from "../../services/api";
import {
  buildWhatsAppLink,
  buildStatusMessage,
} from "../../src/utils/whatsapp";

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
    company?: string;
    name?: string;
    email: string;
    country: string;
    phone?: string;
    contactMethod?: string;
  };
  notes?: string;
  items: OrderItem[];
};

const statusOptions = [
  { value: "all", label: "Todos" },
  { value: "pending", label: "Pendente" },
  { value: "in_negotiation", label: "Em negociação" },
  { value: "approved", label: "Aprovado" },
  { value: "rejected", label: "Rejeitado" },
  { value: "exported", label: "Exportado" },
];

export default function AdminPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<number | null>(null);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [countryFilter, setCountryFilter] = useState("");

  useEffect(() => {
    async function loadOrders() {
      try {
        const data = await getOrders();
        setOrders(data);
      } catch (error) {
        console.error("Erro ao buscar pedidos:", error);
      } finally {
        setLoading(false);
      }
    }

    loadOrders();
  }, []);

  async function handleStatusChange(orderId: number, newStatus: string) {
    try {
      setSavingId(orderId);

      await updateOrderStatus(orderId, newStatus);

      setOrders((prev) =>
        prev.map((order) =>
          order.id === orderId
            ? {
                ...order,
                status: newStatus,
                updatedAt: new Date().toISOString(),
              }
            : order
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
      alert("Erro ao atualizar status");
    } finally {
      setSavingId(null);
    }
  }

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const term = search.toLowerCase();

      const matchesSearch =
        order.buyer.email.toLowerCase().includes(term) ||
        (order.buyer.company || "").toLowerCase().includes(term) ||
        (order.buyer.name || "").toLowerCase().includes(term);

      const matchesStatus =
        statusFilter === "all" || order.status === statusFilter;

      const matchesCountry =
        !countryFilter ||
        order.buyer.country.toLowerCase().includes(countryFilter.toLowerCase());

      return matchesSearch && matchesStatus && matchesCountry;
    });
  }, [orders, search, statusFilter, countryFilter]);

  if (loading) {
    return <div style={{ padding: "20px" }}>Carregando...</div>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>Painel Admin</h1>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        <input
          placeholder="Buscar por email, empresa ou contato"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "10px", minWidth: "260px" }}
        />

        <input
          placeholder="Filtrar por país"
          value={countryFilter}
          onChange={(e) => setCountryFilter(e.target.value)}
          style={{ padding: "10px", minWidth: "220px" }}
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{ padding: "10px", minWidth: "220px" }}
        >
          {statusOptions.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      {filteredOrders.length === 0 ? (
        <p>Nenhum pedido encontrado</p>
      ) : (
        filteredOrders
          .slice()
          .reverse()
          .map((order) => {
            const statusMessage = buildStatusMessage(order);

            const buyerWhatsappLink = order.buyer.phone
              ? buildWhatsAppLink(order.buyer.phone, statusMessage)
              : null;

            return (
              <div
                key={order.id}
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "16px",
                  marginBottom: "20px",
                }}
              >
                <h2>Pedido #{order.id}</h2>

                <p><strong>Empresa:</strong> {order.buyer.company || "-"}</p>
                <p><strong>Contato:</strong> {order.buyer.name || "-"}</p>
                <p><strong>Email:</strong> {order.buyer.email}</p>
                <p><strong>País:</strong> {order.buyer.country}</p>
                <p><strong>Telefone / WhatsApp:</strong> {order.buyer.phone || "-"}</p>
                <p><strong>Canal preferido:</strong> {order.buyer.contactMethod || "-"}</p>

                {order.notes && (
                  <p><strong>Observações:</strong> {order.notes}</p>
                )}

                <p>
                  <strong>Criado em:</strong>{" "}
                  {new Date(order.createdAt).toLocaleString("pt-BR")}
                </p>

                {order.updatedAt && (
                  <p>
                    <strong>Atualizado em:</strong>{" "}
                    {new Date(order.updatedAt).toLocaleString("pt-BR")}
                  </p>
                )}

                <div style={{ marginTop: "12px" }}>
                  <strong>Status:</strong>
                  <br />
                  <select
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(order.id, e.target.value)
                    }
                    disabled={savingId === order.id}
                    style={{
                      marginTop: "8px",
                      padding: "8px",
                      minWidth: "220px",
                    }}
                  >
                    {statusOptions
                      .filter((s) => s.value !== "all")
                      .map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                  </select>
                </div>

                <div style={{ marginTop: "16px" }}>
                  <strong>Itens:</strong>

                  {order.items.map((item) => (
                    <div
                      key={`${order.id}-${item.id}`}
                      style={{
                        border: "1px solid #eee",
                        borderRadius: "8px",
                        padding: "10px",
                        marginTop: "10px",
                      }}
                    >
                      <p><strong>Produto:</strong> {item.name}</p>
                      <p><strong>Categoria:</strong> {item.category}</p>
                      <p><strong>Preço:</strong> R$ {item.price}</p>
                      <p><strong>Quantidade:</strong> {item.quantity}</p>
                      <p><strong>Score:</strong> {item.exportScore ?? 0}</p>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                    marginTop: "16px",
                  }}
                >
                  {buyerWhatsappLink && (
                    <a
                      href={buyerWhatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "inline-block",
                        padding: "10px 14px",
                        borderRadius: "8px",
                        textDecoration: "none",
                        background: "#111",
                        color: "#fff",
                        fontWeight: "bold",
                      }}
                    >
                      Falar com cliente no WhatsApp
                    </a>
                  )}

                  <button
                    onClick={() => navigator.clipboard.writeText(statusMessage)}
                    style={{
                      padding: "10px 14px",
                      borderRadius: "8px",
                      border: "1px solid #ccc",
                      background: "#fff",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Copiar mensagem
                  </button>
                </div>
              </div>
            );
          })
      )}
    </div>
  );
}