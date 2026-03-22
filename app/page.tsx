"use client";

import { Menu, User, ShoppingBag } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HEADER */}
      <header className="w-full h-[64px] flex items-center justify-between px-6 border-b border-neutral-800 relative">

        {/* MENU ESQUERDO */}
        <div className="flex items-center gap-4 z-10">
          <button className="p-2 hover:opacity-70 transition">
            <Menu size={20} />
          </button>
        </div>

        {/* LOGO CENTRAL ABSOLUTA */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <h1 className="text-[18px] tracking-[0.35em] font-light"
              style={{ fontFamily: "serif" }}>
            D’OUTRO LADO
          </h1>
        </div>

        {/* ÍCONES DIREITA */}
        <div className="flex items-center gap-4 z-10">
          <button className="flex items-center gap-2 text-sm hover:opacity-70 transition">
            <User size={18} />
            LOGIN
          </button>

          <button className="flex items-center gap-2 text-sm hover:opacity-70 transition">
            <ShoppingBag size={18} />
            BAG
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="text-center py-20 px-6">
        <p className="text-[12px] tracking-[0.4em] text-neutral-400 mb-6">
          CURADORIA BRASILEIRA
        </p>

        <h2 className="text-[56px] font-light tracking-wide mb-6">
          D’OUTRO LADO
        </h2>

        <p className="text-neutral-300 max-w-2xl mx-auto text-sm">
          Conectando produtos brasileiros exclusivos a pessoas interessadas ao redor do mundo.
        </p>
      </section>

      {/* SEÇÕES */}
      <section className="grid md:grid-cols-2 gap-6 px-6 pb-16">

        {/* MODA */}
        <div className="relative h-[300px] overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1584917865442-de89df76afd3"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end">
            <p className="text-xs tracking-widest text-neutral-400 mb-2">
              SELEÇÃO
            </p>
            <h3 className="text-xl font-light mb-2">
              MODA NEUTRA, COURO E ACESSÓRIOS
            </h3>
            <p className="text-sm text-neutral-300">
              Bolsas de crochê, couro, coturnos, sapatos sociais, óculos e acessórios sofisticados.
            </p>
          </div>
        </div>

        {/* CASA */}
        <div className="relative h-[300px] overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1618220179428-22790b461013"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end">
            <p className="text-xs tracking-widest text-neutral-400 mb-2">
              SELEÇÃO
            </p>
            <h3 className="text-xl font-light mb-2">
              CERÂMICA, DECORAÇÃO E CASA
            </h3>
            <p className="text-sm text-neutral-300">
              Peças em cerâmica, pratos, xícaras e decoração com estética minimalista.
            </p>
          </div>
        </div>

      </section>

    </main>
  );
}