"use client";

import Link from "next/link";
import { Menu, User, ShoppingBag, Search } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-[#f5f1e8]">
      {/* Faixa superior */}
      <div className="border-b border-white/10 bg-black">
        <div className="mx-auto flex h-10 max-w-[1600px] items-center justify-center px-4">
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#d6c3a1]">
            CURADORIA BRASILEIRA
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-white/10 bg-black">
        <div className="mx-auto grid h-28 max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center px-4 md:px-8">
          {/* Esquerda */}
          <div className="flex items-center justify-start">
            <button
              type="button"
              aria-label="Abrir menu"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-[#f5f1e8] transition hover:border-white/30 hover:bg-white/5"
            >
              <Menu size={18} strokeWidth={1.5} />
            </button>
          </div>

          {/* Centro */}
          <div className="flex items-center justify-center text-center">
            <Link
              href="/"
              className="whitespace-nowrap text-center text-[24px] font-light uppercase tracking-[0.32em] text-[#f5f1e8] md:text-[34px]"
              style={{
                fontFamily: '"Cormorant Garamond", "Georgia", serif',
              }}
            >
              D&apos;OUTRO LADO
            </Link>
          </div>

          {/* Direita */}
          <div className="flex items-center justify-end gap-3">
            <Link
              href="/login"
              className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-3 text-[13px] uppercase tracking-[0.14em] text-[#f5f1e8] transition hover:border-white/30 hover:bg-white/5"
            >
              <User size={16} strokeWidth={1.5} />
              <span className="hidden sm:inline">Login</span>
            </Link>

            <Link
              href="/bag"
              className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-3 text-[13px] uppercase tracking-[0.14em] text-[#f5f1e8] transition hover:border-white/30 hover:bg-white/5"
            >
              <ShoppingBag size={16} strokeWidth={1.5} />
              <span className="hidden sm:inline">Bag</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(160,132,85,0.16),transparent_38%)]" />
        <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[1100px] text-center">
            <p className="mb-6 text-[12px] uppercase tracking-[0.35em] text-[#d6c3a1]">
              CURADORIA BRASILEIRA
            </p>

            <h1
              className="mb-8 text-[52px] font-light uppercase leading-none tracking-[0.1em] text-[#f5f1e8] md:text-[90px]"
              style={{
                fontFamily: '"Cormorant Garamond", "Georgia", serif',
              }}
            >
              D&apos;OUTRO LADO
            </h1>

            <p className="mx-auto max-w-[900px] text-base leading-relaxed text-[#e8e0d2] md:text-[18px]">
              Conectando produtos brasileiros exclusivos a pessoas interessadas
              ao redor do mundo.
            </p>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="mx-auto max-w-[1600px] px-5 py-10 md:px-8 md:py-14">
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          {/* Moda */}
          <Link
            href="/catalogo/moda"
            className="group relative min-h-[430px] overflow-hidden border border-white/10 bg-[#0d0d0d]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-[1.03]"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(0,0,0,0.76), rgba(0,0,0,0.30)), url('https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=80')",
              }}
            />
            <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-10">
              <p className="mb-4 text-[12px] uppercase tracking-[0.35em] text-[#f0dcc0]">
                SELEÇÃO
              </p>
              <h2 className="mb-4 text-3xl font-light uppercase leading-tight tracking-[0.03em] text-[#f5f1e8] md:text-4xl">
                MODA NEUTRA, COURO E ACESSÓRIOS
              </h2>
              <p className="max-w-[720px] text-[17px] leading-relaxed text-[#e5dccd]">
                Bolsas de crochê, bolsas de couro, coturnos femininos, sapatos
                sociais, óculos de sol, carteiras e nécessaires em uma seleção
                moderna, elegante e sem marcas aparentes.
              </p>
            </div>
          </Link>

          {/* Casa */}
          <Link
            href="/catalogo/casa"
            className="group relative min-h-[430px] overflow-hidden border border-white/10 bg-[#0d0d0d]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-[1.03]"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(0,0,0,0.72), rgba(0,0,0,0.24)), url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80')",
              }}
            />
            <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-10">
              <p className="mb-4 text-[12px] uppercase tracking-[0.35em] text-[#f0dcc0]">
                SELEÇÃO
              </p>
              <h2 className="mb-4 text-3xl font-light uppercase leading-tight tracking-[0.03em] text-[#f5f1e8] md:text-4xl">
                CERÂMICA, DECORAÇÃO E CASA
              </h2>
              <p className="max-w-[720px] text-[17px] leading-relaxed text-[#e5dccd]">
                Peças de decoração em cerâmica, pratos, xícaras, travessas e
                enxoval apresentados com estética minimalista, refinada e
                acolhedora.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Botão flutuante */}
      <button
        type="button"
        aria-label="Buscar"
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/90 text-[#f5f1e8] transition hover:border-white/30 hover:bg-white/5"
      >
        <Search size={18} strokeWidth={1.5} />
      </button>
    </main>
  );
}