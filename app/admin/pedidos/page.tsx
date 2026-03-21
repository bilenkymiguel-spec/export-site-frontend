"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type OrderItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  category?: string;
};

type Order = {
  id: number;
  orderNumber: string;
  customer: {
    name: string;
    email: string;
    phone: string;
    country: string;
    notes: string;
  };
  items: OrderItem[];
  subtotal: number;
  status: string;
  paymentStatus: string;
  createdAt: string;
};

function formatPrice(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(date));
}

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchOrders() {
    try {
      const response = await fetch("http://localhost:3001/orders");
      const data = await response.json();
      setOrders(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error(error);
      setOrders([]);
    } finally {
      setLoading(false);
    }
  }

  async function updateOrderStatus(
    orderId: number,
    status: string,
    paymentStatus: string
  ) {
    try {
      const response = await fetch(
        `http://localhost:3001/orders/${orderId}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status, paymentStatus }),
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao atualizar pedido");
      }

      await fetchOrders();
    } catch (error) {
      console.error(error);
      alert("Erro ao atualizar status do pedido.");
    }
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <main className="min-h-screen bg-[#111111] px-6 py-12 text-[#f3ede3] md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-serif text-3xl tracking-[0.08em]">
              Pedidos
            </p>
            <p className="mt-2 text-sm text-[#ddd4c7]">
              Painel de gestão de pedidos da D’OUTRO LADO
            </p>
          </div>

          <Link
            href="/"
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-[#ddd4c7] transition hover:bg-white/5"
          >
            Voltar para a home
          </Link>
        </div>

        {loading ? (
          <p className="text-[#ddd4c7]">Carregando pedidos...</p>
        ) : orders.length === 0 ? (
          <div className="rounded-3xl border border-white/8 bg-[#151515] p-6">
            <p className="text-[#ddd4c7]">
              Nenhum pedido encontrado.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <section
                key={order.id}
                className="rounded-3xl border border-white/8 bg-[#151515] p-6"
              >
                {/* HEADER */}
                <div className="flex flex-col gap-4 border-b border-white/10 pb-5 md:flex-row md:justify-between">
                  <div>
                    <p className="font-serif text-2xl">
                      {order.orderNumber}
                    </p>

                    <p className="mt-2 text-sm text-[#ddd4c7]">
                      {formatDate(order.createdAt)}
                    </p>

                    <p className="mt-1 text-sm text-[#ddd4c7]">
                      Cliente: {order.customer.name}
                    </p>

                    {order.customer.email && (
                      <p className="text-sm text-[#ddd4c7]">
                        {order.customer.email}
                      </p>
                    )}
                  </div>

                  {/* STATUS */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        updateOrderStatus(
                          order.id,
                          e.target.value,
                          order.paymentStatus
                        )
                      }
                      className="rounded-xl bg-[#111111] border border-white/10 px-4 py-2"
                    >
                      <option value="pendente">pendente</option>
                      <option value="em_andamento">em andamento</option>
                      <option value="enviado">enviado</option>
                      <option value="concluido">concluído</option>
                      <option value="cancelado">cancelado</option>
                    </select>

                    <select
                      value={order.paymentStatus}
                      onChange={(e) =>
                        updateOrderStatus(
                          order.id,
                          order.status,
                          e.target.value
                        )
                      }
                      className="rounded-xl bg-[#111111] border border-white/10 px-4 py-2"
                    >
                      <option value="aguardando">aguardando</option>
                      <option value="pago">pago</option>
                      <option value="falhou">falhou</option>
                    </select>
                  </div>
                </div>

                {/* ITENS */}
                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-2xl border border-white/10 bg-[#111111] p-4"
                    >
                      <div className="flex gap-4">
                        <img
                          src={
                            item.image ||
                            "https://via.placeholder.com/300"
                          }
                          className="h-20 w-20 rounded-xl object-cover"
                        />

                        <div>
                          <p>{item.name}</p>
                          <p className="text-sm text-[#aaa]">
                            {item.quantity}x
                          </p>
                          <p className="text-[#d9c6a3]">
                            {formatPrice(
                              item.price * item.quantity
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* TOTAL */}
                <div className="mt-6 border-t border-white/10 pt-4 text-right">
                  <p className="text-sm text-[#aaa]">Total</p>
                  <p className="text-lg font-bold text-[#d9c6a3]">
                    {formatPrice(order.subtotal)}
                  </p>
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}