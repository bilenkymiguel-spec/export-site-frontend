"use client";

import Link from "next/link";

const adminCards = [
  {
    title: "Dashboard",
    description: "Acompanhe pedidos, volumes e status comerciais.",
    href: "/dashboard",
  },
  {
    title: "Gestão de páginas",
    description: "Organize páginas editáveis, versões originais e estrutura interna.",
    href: "/admin/pages",
  },
  {
    title: "Pré-visualizações",
    description: "Visualize versões internas por slug antes de publicar.",
    href: "/preview/home",
  },
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">
            Admin
          </p>
          <h1 className="mt-3 text-3xl font-light tracking-[0.08em]">
            Painel Administrativo
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-300">
            Central de gestão do projeto D’Outro Lado para acompanhamento,
            operação e organização de conteúdo interno.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {adminCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 transition hover:border-neutral-600 hover:bg-neutral-900"
            >
              <h2 className="text-lg font-medium">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-400">
                {card.description}
              </p>
              <span className="mt-6 inline-block text-xs uppercase tracking-[0.2em] text-neutral-500">
                Abrir
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}