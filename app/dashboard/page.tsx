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

function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

function formatDate(value?: string) {
  if (!value) return "-";
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(date);
}

export default function DashboardPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadOrders() {
      try {
        setLoading(true);
        setError("");

        const data = await getOrders();

        if (active) {
          setOrders(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        console.error(err);
        if (active) {
          setError("Não foi possível carregar os pedidos.");
          setOrders([]);
        }
      } finally {
        if (active) setLoading(false);
      }
    }

    loadOrders();

    return () => {
      active = false;
    };
  }, []);

  const filteredOrders = useMemo(() => {
    if (selectedStatus === "all") return orders;
    return orders.filter((order) => order.status === selectedStatus);
  }, [orders, selectedStatus]);

  const summary = useMemo(() => {
    const totalOrders = filteredOrders.length;

    const totalItems = filteredOrders.reduce((acc, order) => {
      return (
        acc +
        order.items.reduce((sum, item) => sum + (item.quantity || 0), 0)
      );
    }, 0);

    const totalValue = filteredOrders.reduce((acc, order) => {
      return (
        acc +
        order.items.reduce(
          (sum, item) => sum + (item.price || 0) * (item.quantity || 0),
          0
        )
      );
    }, 0);

    return { totalOrders, totalItems, totalValue };
  }, [filteredOrders]);

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">
              Painel
            </p>
            <h1 className="mt-2 text-3xl font-light tracking-[0.08em]">
              Dashboard de Pedidos
            </h1>
          </div>

          <div className="w-full max-w-xs">
            <label
              htmlFor="status-filter"
              className="mb-2 block text-sm text-neutral-300"
            >
              Filtrar por status
            </label>
            <select
              id="status-filter"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm text-white outline-none"
            >
              {statusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </header>

        <section className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5">
            <p className="text-sm text-neutral-400">Pedidos</p>
            <p className="mt-2 text-3xl font-semibold">{summary.totalOrders}</p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5">
            <p className="text-sm text-neutral-400">Itens</p>
            <p className="mt-2 text-3xl font-semibold">{summary.totalItems}</p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5">
            <p className="text-sm text-neutral-400">Valor estimado</p>
            <p className="mt-2 text-3xl font-semibold">
              {formatCurrency(summary.totalValue)}
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4 md:p-6">
          {loading ? (
            <div className="py-12 text-center text-neutral-400">
              Carregando pedidos...
            </div>
          ) : error ? (
            <div className="py-12 text-center text-red-400">{error}</div>
          ) : filteredOrders.length === 0 ? (
            <div className="py-12 text-center text-neutral-400">
              Nenhum pedido encontrado.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-neutral-800 text-xs uppercase tracking-[0.2em] text-neutral-500">
                    <th className="px-3 py-4">Pedido</th>
                    <th className="px-3 py-4">Comprador</th>
                    <th className="px-3 py-4">País</th>
                    <th className="px-3 py-4">Status</th>
                    <th className="px-3 py-4">Itens</th>
                    <th className="px-3 py-4">Valor</th>
                    <th className="px-3 py-4">Criado em</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order) => {
                    const orderItems = order.items.reduce(
                      (acc, item) => acc + (item.quantity || 0),
                      0
                    );

                    const orderValue = order.items.reduce(
                      (acc, item) =>
                        acc + (item.price || 0) * (item.quantity || 0),
                      0
                    );

                    return (
                      <tr
                        key={order.id}
                        className="border-b border-neutral-900 text-sm text-neutral-200"
                      >
                        <td className="px-3 py-4 font-medium">#{order.id}</td>
                        <td className="px-3 py-4">
                          {order.buyer.company ||
                            order.buyer.name ||
                            order.buyer.email}
                        </td>
                        <td className="px-3 py-4">{order.buyer.country}</td>
                        <td className="px-3 py-4">
                          <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs uppercase tracking-[0.18em] text-neutral-300">
                            {order.status}
                          </span>
                        </td>
                        <td className="px-3 py-4">{orderItems}</td>
                        <td className="px-3 py-4">
                          {formatCurrency(orderValue)}
                        </td>
                        <td className="px-3 py-4">
                          {formatDate(order.createdAt)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}