"use client";

import Link from "next/link";
import {
  Menu,
  Search,
  User,
  ShoppingBag,
  House,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

export default function Home() {
  return (
    <main className="home-page">
      <header className="site-header">
        <div className="brand-top">D’OUTRO LADO</div>

        <div className="header-bar">
          <div className="header-left">
            <button
              type="button"
              className="circle-action"
              aria-label="Abrir menu"
            >
              <Menu size={22} strokeWidth={1.8} />
            </button>

            <Link
              href="/sobre"
              className="circle-action"
              aria-label="Ir para sobre"
            >
              <ShieldCheck size={19} strokeWidth={1.8} />
            </Link>

            <Link
              href="/"
              className="circle-action"
              aria-label="Ir para página inicial"
            >
              <House size={19} strokeWidth={1.8} />
            </Link>
          </div>

          <div className="header-right">
            <button
              type="button"
              className="circle-action"
              aria-label="Buscar"
            >
              <Search size={20} strokeWidth={1.8} />
            </button>

            <Link href="/login" className="pill-action" aria-label="Login">
              <User size={18} strokeWidth={1.8} />
              <span>LOGIN</span>
            </Link>

            <Link href="/bag" className="pill-action" aria-label="Bag">
              <ShoppingBag size={18} strokeWidth={1.8} />
              <span>BAG</span>
            </Link>
          </div>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-inner">
          <p className="hero-kicker">CURADORIA BRASILEIRA</p>

          <h1 className="hero-title">D’OUTRO LADO</h1>

          <p className="hero-subtitle">
            Conectando produtos brasileiros exclusivos a pessoas interessadas ao
            redor do mundo.
          </p>
        </div>

        <button
          type="button"
          className="floating-filter"
          aria-label="Abrir filtros"
        >
          <SlidersHorizontal size={20} strokeWidth={1.8} />
        </button>
      </section>

      <section className="home-categories">
        <Link
          href="/produtos/moda-estilo-e-acessorios"
          className="category-card category-fashion"
        >
          <div className="category-overlay" />
          <div className="category-content">
            <span className="category-label">SELEÇÃO</span>

            <h2 className="category-title">
              MODA CASUAL, COURO E ACESSÓRIOS
            </h2>

            <p className="category-text">
              Peças com acabamento refinado, identidade brasileira e leitura
              internacional sofisticada.
            </p>

            <span className="category-link">EXPLORAR CATEGORIA</span>
          </div>
        </Link>

        <Link
          href="/produtos/casa-e-decoracao"
          className="category-card category-home"
        >
          <div className="category-overlay" />
          <div className="category-content">
            <span className="category-label">SELEÇÃO</span>

            <h2 className="category-title">CERÂMICA, DECORAÇÃO, CASA</h2>

            <p className="category-text">
              Objetos e composições autorais para um repertório visual elegante,
              acolhedor e atemporal.
            </p>

            <span className="category-link">EXPLORAR CATEGORIA</span>
          </div>
        </Link>
      </section>
    </main>
  );
}