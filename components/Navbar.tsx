"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Search, User, ShoppingBag, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="site-header">
        <div className="site-header-top">Curadoria brasileira</div>

        <div className="site-header-bar">
          <button
            type="button"
            className="header-circle-button"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            aria-controls="main-side-drawer"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="nav-svg" />
          </button>

          <Link href="/" className="brand-logo" aria-label="Ir para a página inicial">
            D’OUTRO LADO
          </Link>

          <div className="header-actions">
            <button
              type="button"
              className="header-circle-button"
              aria-label="Buscar"
            >
              <Search className="nav-svg" />
            </button>

            <Link href="/login" className="header-action-pill" aria-label="Login">
              <User className="nav-svg" />
              <span>Login</span>
            </Link>

            <Link href="/bag" className="header-action-pill" aria-label="Bag">
              <ShoppingBag className="nav-svg" />
              <span>Bag</span>
            </Link>
          </div>
        </div>
      </header>

      <div
        className={`menu-backdrop ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />

      <aside
        id="main-side-drawer"
        className={`side-drawer ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="side-drawer-header">
          <span className="side-drawer-title">Navegação</span>

          <button
            type="button"
            className="drawer-close-button"
            aria-label="Fechar menu"
            onClick={() => setMenuOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        <nav className="side-drawer-nav">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Início
          </Link>
          <Link href="/sobre" onClick={() => setMenuOpen(false)}>
            Sobre
          </Link>
          <Link href="/produtos" onClick={() => setMenuOpen(false)}>
            Produtos
          </Link>
          <Link
            href="/produtos/moda-estilo-e-acessorios"
            onClick={() => setMenuOpen(false)}
          >
            Moda, couro e acessórios
          </Link>
          <Link
            href="/produtos/casa-e-decoracao"
            onClick={() => setMenuOpen(false)}
          >
            Cerâmica, decoração e casa
          </Link>
          <Link href="/contato" onClick={() => setMenuOpen(false)}>
            Contato
          </Link>
          <Link href="/login" onClick={() => setMenuOpen(false)}>
            Login
          </Link>
          <Link href="/bag" onClick={() => setMenuOpen(false)}>
            Bag
          </Link>
        </nav>
      </aside>
    </>
  );
}