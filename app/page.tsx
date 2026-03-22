"use client";

import Link from "next/link";
import { Menu, Search, ShoppingBag, User } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-[#f5f1e8]">
      {/* faixa superior */}
      <div className="border-b border-white/10 bg-black">
        <div className="mx-auto flex h-9 max-w-[1440px] items-center justify-center px-4">
          <span className="text-[10px] uppercase tracking-[0.38em] text-[#d4c2a3] md:text-[11px]">
            Curadoria Brasileira
          </span>
        </div>
      </div>

      {/* header */}
      <header className="border-b border-white/10 bg-black">
        <div className="mx-auto grid h-24 max-w-[1440px] grid-cols-[64px_1fr_auto_1fr] items-center gap-3 px-4 md:h-28 md:px-8">
          {/* menu */}
          <div className="flex items-center justify-start">
            <button
              type="button"
              aria-label="Abrir menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[#f5f1e8] transition hover:border-white/30 hover:bg-white/5"
            >
              <Menu size={18} strokeWidth={1.5} />
            </button>
          </div>

          {/* espaço esquerdo para equilibrar */}
          <div />

          {/* marca centralizada */}
          <div className="flex items-center justify-center">
            <Link
              href="/"
              className="whitespace-nowrap text-center text-[20px] font-light uppercase tracking-[0.34em] text-[#f5f1e8] md:text-[28px]"
              style={{
                fontFamily: '"Cormorant Garamond", "Georgia", serif',
              }}
            >
              D&apos;OUTRO LADO
            </Link>
          </div>

          {/* ações direita */}
          <div className="flex items-center justify-end gap-3">
            <Link
              href="/login"
              className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-[12px] uppercase tracking-[0.16em] text-[#f5f1e8] transition hover:border-white/30 hover:bg-white/5"
            >
              <User size={15} strokeWidth={1.5} />
              <span className="hidden sm:inline">Login</span>
            </Link>

            <Link
              href="/bag"
              className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-[12px] uppercase tracking-[0.16em] text-[#f5f1e8] transition hover:border-white/30 hover:bg-white/5"
            >
              <ShoppingBag size={15} strokeWidth={1.5} />
              <span className="hidden sm:inline">Bag</span>
            </Link>
          </div>
        </div>
      </header>

      {/* hero */}
      <section className="relative overflow-hidden border-b border-white/10 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(165,132,84,0.14),transparent_42%)]" />

        <div className="relative mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[1080px] text-center">
            <p className="mb-6 text-[11px] uppercase tracking-[0.38em] text-[#d4c2a3] md:text-[12px]">
              Curadoria Brasileira
            </p>

            <h1
              className="mb-8 text-[54px] font-light uppercase leading-[0.95] tracking-[0.12em] text-[#f5f1e8] md:text-[92px]"
              style={{
                fontFamily: '"Cormorant Garamond", "Georgia", serif',
              }}
            >
              D&apos;OUTRO LADO
            </h1>

            <p className="mx-auto max-w-[920px] text-[18px] leading-relaxed text-[#e7dfd1] md:text-[20px]">
              Conectando produtos brasileiros exclusivos a pessoas interessadas
              ao redor do mundo.
            </p>
          </div>
        </div>
      </section>

      {/* seções principais */}
      <section className="mx-auto max-w-[1440px] px-5 py-10 md:px-8 md:py-14">
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          {/* moda */}
          <Link
            href="/catalogo/moda"
            className="group relative min-h-[430px] overflow-hidden border border-white/10 bg-[#0d0d0d]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-[1.03]"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(0,0,0,0.78), rgba(0,0,0,0.34)), url('https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.30),transparent_60%)]" />

            <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-10">
              <p className="mb-4 text-[11px] uppercase tracking-[0.34em] text-[#ecd9ba] md:text-[12px]">
                Seleção
              </p>

              <h2 className="mb-4 max-w-[760px] text-[32px] font-light uppercase leading-tight tracking-[0.03em] text-[#f5f1e8] md:text-[42px]">
                Moda Neutra, Couro e Acessórios
              </h2>

              <p className="max-w-[760px] text-[16px] leading-relaxed text-[#e3dbcdbf] md:text-[17px]">
                Bolsas de crochê, bolsas de couro, coturnos femininos, sapatos
                sociais, óculos de sol, carteiras de couro e nécessaires de
                couro em uma seleção moderna, elegante e sem marcas aparentes.
              </p>
            </div>
          </Link>

          {/* casa */}
          <Link
            href="/catalogo/casa"
            className="group relative min-h-[430px] overflow-hidden border border-white/10 bg-[#0d0d0d]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-[1.03]"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(0,0,0,0.76), rgba(0,0,0,0.28)), url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.26),transparent_60%)]" />

            <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-10">
              <p className="mb-4 text-[11px] uppercase tracking-[0.34em] text-[#ecd9ba] md:text-[12px]">
                Seleção
              </p>

              <h2 className="mb-4 max-w-[760px] text-[32px] font-light uppercase leading-tight tracking-[0.03em] text-[#f5f1e8] md:text-[42px]">
                Cerâmica, Decoração e Casa
              </h2>

              <p className="max-w-[760px] text-[16px] leading-relaxed text-[#e3dbcdbf] md:text-[17px]">
                Peças de decoração de cerâmica, pratos, xícaras, travessas e
                enxoval apresentados com estética minimalista, refinada e
                acolhedora.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* botão flutuante */}
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