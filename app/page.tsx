"use client";

import Link from "next/link";
import { Menu, Search, User, ShoppingBag } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-[#f5f1e8]">
      {/* TOP STRIP */}
      <div className="border-b border-white/10 bg-black">
        <div className="mx-auto flex h-10 max-w-[1600px] items-center justify-center px-4">
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#d6c3a1]">
            Curadoria Brasileira
          </span>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur">
        <div className="relative mx-auto flex h-28 max-w-[1600px] items-center justify-between px-5 md:px-8">
          {/* LEFT */}
          <div className="flex w-[120px] items-center justify-start">
            <button
              type="button"
              aria-label="Abrir menu"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-[#f5f1e8] transition hover:border-white/30 hover:bg-white/5"
            >
              <Menu size={18} strokeWidth={1.5} />
            </button>
          </div>

          {/* CENTERED BRAND */}
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <Link
              href="/"
              className="whitespace-nowrap text-center text-[28px] font-light uppercase tracking-[0.42em] text-[#f5f1e8] md:text-[34px]"
              style={{
                fontFamily:
                  '"Cormorant Garamond", "Times New Roman", serif',
              }}
            >
              D&apos;OUTRO LADO
            </Link>
          </div>

          {/* RIGHT */}
          <div className="flex w-[120px] items-center justify-end gap-3">
            <Link
              href="/login"
              className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-3 text-[13px] uppercase tracking-[0.18em] text-[#f5f1e8] transition hover:border-white/30 hover:bg-white/5"
            >
              <User size={16} strokeWidth={1.5} />
              <span className="hidden sm:inline">Login</span>
            </Link>

            <Link
              href="/bag"
              className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-3 text-[13px] uppercase tracking-[0.18em] text-[#f5f1e8] transition hover:border-white/30 hover:bg-white/5"
            >
              <ShoppingBag size={16} strokeWidth={1.5} />
              <span className="hidden sm:inline">Bag</span>
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(160,132,85,0.18),transparent_38%)]" />
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-[1100px] text-center">
            <p className="mb-6 text-[12px] uppercase tracking-[0.35em] text-[#d6c3a1]">
              Curadoria Brasileira
            </p>

            <h1
              className="mx-auto mb-8 text-center text-[56px] font-light uppercase leading-none tracking-[0.12em] text-[#f5f1e8] md:text-[88px]"
              style={{
                fontFamily:
                  '"Cormorant Garamond", "Times New Roman", serif',
              }}
            >
              D&apos;OUTRO LADO
            </h1>

            <p className="mx-auto max-w-[900px] text-base leading-relaxed text-[#e8e0d2] md:text-[18px]">
              Conectando produtos brasileiros exclusivos a pessoas
              interessadas ao redor do mundo.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-[1600px] px-5 py-10 md:px-8 md:py-14">
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          {/* MODA */}
          <Link
            href="/catalogo/moda"
            className="group relative min-h-[430px] overflow-hidden border border-white/10 bg-[#0d0d0d]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-[1.03]"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(0,0,0,0.72), rgba(0,0,0,0.30)), url('https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.40),transparent_55%)]" />

            <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-10">
              <p className="mb-4 text-[12px] uppercase tracking-[0.35em] text-[#f0dcc0]">
                Seleção
              </p>
              <h2 className="mb-4 max-w-[700px] text-3xl font-light uppercase leading-tight tracking-[0.03em] text-[#f5f1e8] md:text-4xl">
                Moda Neutra, Couro e Acessórios
              </h2>
              <p className="max-w-[720px] text-[17px] leading-relaxed text-[#e5dccd]">
                Bolsas de crochê, bolsas de couro, coturnos femininos,
                sapatos sociais, óculos de sol, carteiras e nécessaires
                em uma seleção moderna, elegante e sem marcas aparentes.
              </p>
            </div>
          </Link>

          {/* CASA */}
          <Link
            href="/catalogo/casa"
            className="group relative min-h-[430px] overflow-hidden border border-white/10 bg-[#0d0d0d]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-[1.03]"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(0,0,0,0.68), rgba(0,0,0,0.24)), url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.35),transparent_55%)]" />

            <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-10">
              <p className="mb-4 text-[12px] uppercase tracking-[0.35em] text-[#f0dcc0]">
                Seleção
              </p>
              <h2 className="mb-4 max-w-[700px] text-3xl font-light uppercase leading-tight tracking-[0.03em] text-[#f5f1e8] md:text-4xl">
                Cerâmica, Decoração e Casa
              </h2>
              <p className="max-w-[720px] text-[17px] leading-relaxed text-[#e5dccd]">
                Peças de decoração em cerâmica, pratos, xícaras, travessas
                e enxoval apresentados com estética minimalista, refinada e
                acolhedora.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* SEARCH BUTTON FLOATING */}
      <button
        type="button"
        aria-label="Buscar"
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/90 text-[#f5f1e8] backdrop-blur transition hover:border-white/30 hover:bg-white/5"
      >
        <Search size={18} strokeWidth={1.5} />
      </button>
    </main>
  );
}