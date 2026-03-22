"use client";

import { useMemo, useState } from "react";
import type { GovernanceDecision } from "@/types/governance";
import type { AdminUser } from "@/types/admin";
import { canAccessGovernance } from "@/utils/permissions";

const mockUser: AdminUser = {
  id: 1,
  email: "admin@doutrolado.com",
  name: "Administrador",
  role: "super_admin",
  createdAt: new Date().toISOString(),
};

const mockDecisions: GovernanceDecision[] = [
  {
    id: 1,
    title: "Aprovar nova curadoria de acessórios",
    description: "Inclusão de novos produtos premium em couro na vitrine internacional.",
    status: "pending",
    createdAt: new Date().toISOString(),
    createdBy: {
      id: 1,
      name: "Administrador",
      email: "admin@doutrolado.com",
    },
  },
  {
    id: 2,
    title: "Revisão da política comercial internacional",
    description: "Atualização de critérios de aprovação para exportação.",
    status: "approved",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    createdBy: {
      id: 1,
      name: "Administrador",
      email: "admin@doutrolado.com",
    },
  },
];

const statusOptions = [
  { value: "all", label: "Todos" },
  { value: "pending", label: "Pendente" },
  { value: "approved", label: "Aprovado" },
  { value: "rejected", label: "Rejeitado" },
];

function formatDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(date);
}

export default function GovernancePage() {
  const [user] = useState<AdminUser | null>(mockUser);
  const [filter, setFilter] = useState("all");

  const allowed = canAccessGovernance(user);

  const decisions = useMemo(() => {
    if (filter === "all") return mockDecisions;
    return mockDecisions.filter((item) => item.status === filter);
  }, [filter]);

  if (!allowed) {
    return (
      <main className="min-h-screen bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl rounded-2xl border border-neutral-800 bg-neutral-950 p-8">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">
            Governança
          </p>
          <h1 className="mt-3 text-3xl font-light tracking-[0.08em]">
            Acesso negado
          </h1>
          <p className="mt-4 text-sm text-neutral-300">
            Você não tem permissão para acessar esta área.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">
              Governança
            </p>
            <h1 className="mt-3 text-3xl font-light tracking-[0.08em]">
              Decisões Administrativas
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-300">
              Controle interno de decisões estratégicas, revisões e aprovações.
            </p>
          </div>

          <div className="w-full max-w-xs">
            <label htmlFor="status" className="mb-2 block text-sm text-neutral-300">
              Filtrar por status
            </label>
            <select
              id="status"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm text-white outline-none"
            >
              {statusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-4">
          {decisions.map((decision) => (
            <article
              key={decision.id}
              className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="text-lg font-medium">{decision.title}</h2>
                  {decision.description ? (
                    <p className="mt-3 text-sm leading-6 text-neutral-400">
                      {decision.description}
                    </p>
                  ) : null}
                </div>

                <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs uppercase tracking-[0.18em] text-neutral-300">
                  {decision.status}
                </span>
              </div>

              <div className="mt-5 grid gap-2 text-sm text-neutral-500 md:grid-cols-3">
                <p>Criado por: {decision.createdBy.name}</p>
                <p>Criado em: {formatDate(decision.createdAt)}</p>
                <p>
                  Atualizado em: {decision.updatedAt ? formatDate(decision.updatedAt) : "-"}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}