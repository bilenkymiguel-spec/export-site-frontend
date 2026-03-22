"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="nav-svg">
      <path
        d="M4 7H20M4 12H20M4 17H20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="nav-svg">
      <path
        d="M6 6L18 18M18 6L6 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="nav-svg">
      <path
        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M4 21C4.9 17.4 7.9 15.5 12 15.5C16.1 15.5 19.1 17.4 20 21"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="nav-svg">
      <path
        d="M6.5 8.5H17.5L16.6 20H7.4L6.5 8.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9 9V7.5C9 5.567 10.567 4 12.5 4C14.433 4 16 5.567 16 7.5V9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="site-header">
        <div className="site-header-top">Curadoria brasileira</div>

        <div className="site-header-bar">
          <div className="site-header-left">
            <button
              type="button"
              className="header-circle-button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="site-drawer-menu"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <MenuIcon />
            </button>
          </div>

          <Link href="/" className="brand-logo" onClick={closeMenu}>
            D’OUTRO LADO
          </Link>

          <div className="header-actions">
            <Link
              href="/login"
              className="header-action-pill"
              aria-label="Acessar login"
              onClick={closeMenu}
            >
              <UserIcon />
              <span>Login</span>
            </Link>

            <Link
              href="/bag"
              className="header-action-pill"
              aria-label="Abrir bag"
              onClick={closeMenu}
            >
              <BagIcon />
              <span>Bag</span>
            </Link>
          </div>
        </div>
      </header>

      <div
        className={`menu-backdrop ${menuOpen ? "active" : ""}`}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      />

      <aside
        id="site-drawer-menu"
        className={`side-drawer ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="side-drawer-header">
          <span className="side-drawer-brand">D’Outro Lado</span>

          <button
            type="button"
            className="side-drawer-close"
            aria-label="Fechar menu"
            onClick={closeMenu}
          >
            <CloseIcon />
          </button>
        </div>

        <nav className="side-drawer-links" aria-label="Navegação principal">
          <Link href="/" onClick={closeMenu}>
            Início
          </Link>

          <Link href="/sobre" onClick={closeMenu}>
            Sobre
          </Link>

          <Link
            href="/produtos/moda-estilo-e-acessorios"
            onClick={closeMenu}
          >
            Moda, estilo e acessórios
          </Link>

          <Link
            href="/produtos/casa-ceramica-e-decoracao"
            onClick={closeMenu}
          >
            Casa, cerâmica e decoração
          </Link>

          <Link href="/checkout" onClick={closeMenu}>
            Fazer pedido
          </Link>

          <Link href="/contato" onClick={closeMenu}>
            Contato
          </Link>
        </nav>

        <div className="side-drawer-footer">Curadoria brasileira para o mundo</div>
      </aside>
    </>
  );
}