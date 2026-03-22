"use client";

import Link from "next/link";
import { Menu, User, ShoppingBag, SlidersHorizontal } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-[#f5f1ea]">
      {/* Faixa superior */}
      <div className="h-[30px] border-b border-white/10 flex items-center justify-center text-[11px] tracking-[0.28em] uppercase text-[#d8c7a3]">
        Curadoria Brasileira
      </div>

      {/* Header principal */}
      <header className="relative h-[86px] border-b border-white/10">
        <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-4 md:px-6">
          {/* Esquerda */}
          <div className="z-10 flex items-center">
            <button
              aria-label="Abrir menu"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 text-white/90 transition hover:border-white/25 hover:bg-white/5"
            >
              <Menu size={18} strokeWidth={1.75} />
            </button>
          </div>

          {/* Marca central absoluta */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-20 text-center">
            <Link
              href="/"
              className="pointer-events-auto inline-block text-[clamp(1.55rem,2.2vw,2.2rem)] font-light uppercase tracking-[0.28em] text-[#f3eee6]"
              style={{ fontFamily: '"Cormorant Garamond", "Times New Roman", serif' }}
            >
              D&apos;OUTRO LADO
            </Link>
          </div>

          {/* Direita */}
          <div className="z-10 flex items-center gap-3">
            <button
              aria-label="Login"
              className="flex h-12 items-center gap-2 rounded-full border border-white/12 px-4 text-[13px] uppercase tracking-[0.12em] text-white/90 transition hover:border-white/25 hover:bg-white/5"
            >
              <User size={16} strokeWidth={1.75} />
              <span className="hidden sm:inline">Login</span>
            </button>

            <button
              aria-label="Sacola"
              className="flex h-12 items-center gap-2 rounded-full border border-white/12 px-4 text-[13px] uppercase tracking-[0.12em] text-white/90 transition hover:border-white/25 hover:bg-white/5"
            >
              <ShoppingBag size={16} strokeWidth={1.75} />
              <span className="hidden sm:inline">Bag</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,130,60,0.14),transparent_38%),linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.7))]" />
        <div className="relative mx-auto flex min-h-[265px] max-w-[1600px] flex-col items-center justify-center px-6 py-14 text-center md:min-h-[300px]">
          <p className="mb-5 text-[12px] uppercase tracking-[0.34em] text-[#d0b07a]">
            Curadoria Brasileira
          </p>

          <h1
            className="mb-5 text-[clamp(2.8rem,7vw,5.2rem)] font-light uppercase leading-none tracking-[0.08em] text-[#f3eee6]"
            style={{ fontFamily: '"Cormorant Garamond", "Times New Roman", serif' }}
          >
            D&apos;OUTRO LADO
          </h1>

          <p className="max-w-[900px] text-[18px] leading-relaxed text-white/92">
            Conectando produtos brasileiros exclusivos a pessoas interessadas ao redor do mundo.
          </p>
        </div>
      </section>

      {/* Blocos */}
      <section className="mx-auto grid max-w-[1600px] grid-cols-1 gap-7 px-4 py-8 md:grid-cols-2 md:px-6">
        {/* Moda */}
        <Link href="/catalogo/moda" className="group relative block overflow-hidden border border-white/10 bg-[#0d0d0d]">
          <div
            className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-[1.03]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0,0,0,0.72), rgba(0,0,0,0.18)), url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=80')",
            }}
          />
          <div className="relative flex min-h-[260px] flex-col justify-end p-7 md:min-h-[300px]">
            <p className="mb-3 text-[12px] uppercase tracking-[0.28em] text-[#e4d3b0]">
              Seleção
            </p>

            <h2 className="mb-4 max-w-[650px] text-[clamp(1.8rem,2.6vw,2.5rem)] font-light uppercase leading-tight text-[#f4efe8]">
              Moda Neutra, Couro e Acessórios
            </h2>

            <p className="max-w-[760px] text-[16px] leading-8 text-white/82">
              Bolsas de crochê, bolsas de couro, coturnos femininos, sapatos sociais, óculos de sol,
              carteiras e nécessaires em uma seleção moderna, elegante e sem marcas aparentes.
            </p>
          </div>
        </Link>

        {/* Casa */}
        <Link href="/catalogo/casa" className="group relative block overflow-hidden border border-white/10 bg-[#0d0d0d]">
          <div
            className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-[1.03]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0,0,0,0.62), rgba(0,0,0,0.20)), url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80')",
            }}
          />
          <div className="relative flex min-h-[260px] flex-col justify-end p-7 md:min-h-[300px]">
            <p className="mb-3 text-[12px] uppercase tracking-[0.28em] text-[#e4d3b0]">
              Seleção
            </p>

            <h2 className="mb-4 max-w-[650px] text-[clamp(1.8rem,2.6vw,2.5rem)] font-light uppercase leading-tight text-[#f4efe8]">
              Cerâmica, Decoração e Casa
            </h2>

            <p className="max-w-[760px] text-[16px] leading-8 text-white/82">
              Peças de decoração em cerâmica, pratos, xícaras, travessas e enxoval apresentados com
              estética minimalista, refinada e acolhedora.
            </p>
          </div>
        </Link>
      </section>

      {/* Botão flutuante lateral */}
      <button
        aria-label="Filtros"
        className="fixed right-4 top-[46%] z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-black/70 text-white/90 backdrop-blur-sm transition hover:border-white/25 hover:bg-white/10"
      >
        <SlidersHorizontal size={18} strokeWidth={1.75} />
      </button>
    </main>
  );
}