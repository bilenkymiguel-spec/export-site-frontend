"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, User, ShoppingBag } from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-black text-white min-h-screen">

      {/* HEADER */}
      <header className="header">
        <button onClick={() => setMenuOpen(true)} className="icon-btn">
          <Menu size={20} />
        </button>

        <div className="logo">
          D’OUTRO LADO
        </div>

        <div className="header-icons">
          <Link href="/login" className="icon-btn">
            <User size={18} />
            <span>LOGIN</span>
          </Link>

          <Link href="/bag" className="icon-btn">
            <ShoppingBag size={18} />
            <span>BAG</span>
          </Link>
        </div>
      </header>

      {/* MENU LATERAL */}
      <div className={`menu-overlay ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(false)} />

      <aside className={`side-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          <X size={20} />
        </button>

        <nav className="menu-links">
          <Link href="/sobre">Sobre</Link>
          <Link href="/produtos">Produtos</Link>
          <Link href="/contato">Contato</Link>
        </nav>
      </aside>

      {/* HERO */}
      <section className="hero">
        <span className="hero-sub">CURADORIA BRASILEIRA</span>
        <h1>D’OUTRO LADO</h1>
        <p>
          Conectando produtos brasileiros exclusivos a pessoas interessadas ao redor do mundo.
        </p>
      </section>

      {/* CATEGORIAS */}
      <section className="categories">

        <Link href="/produtos/moda-casual-couro-e-acessorios" className="category-card">
          <div className="overlay" />
          <img src="/images/moda.jpg" alt="Moda" />
          <div className="content">
            <span>SELEÇÃO</span>
            <h2>MODA CASUAL, COURO E ACESSÓRIOS</h2>
            <p>Peças com acabamento refinado e leitura internacional.</p>
          </div>
        </Link>

        <Link href="/produtos/ceramica-decoracao-e-casa" className="category-card">
          <div className="overlay" />
          <img src="/images/casa.jpg" alt="Casa" />
          <div className="content">
            <span>SELEÇÃO</span>
            <h2>CERÂMICA, DECORAÇÃO, CASA</h2>
            <p>Composições autorais elegantes e atemporais.</p>
          </div>
        </Link>

      </section>

    </main>
  );
}