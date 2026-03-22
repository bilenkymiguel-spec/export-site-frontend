"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllCategories } from "../data/categoryData";

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

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="nav-svg">
      <path
        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M4 21C4.9 17.9 7.9 16 12 16C16.1 16 19.1 17.9 20 21"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="nav-svg">
      <path
        d="M6 8H18L17 21H7L6 8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 9V7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7V9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const categories = getAllCategories();

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = isOpen ? "hidden" : original;

    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  return (
    <>
      <header className="site-header">
        <div className="site-header-top">CURADORIA BRASILEIRA</div>

        <div className="site-header-bar">
          <button
            type="button"
            className="header-circle-button"
            aria-label="Abrir menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(true)}
          >
            <MenuIcon />
          </button>

          <Link href="/" className="brand-logo">
            D’OUTRO LADO
          </Link>

          <div className="header-actions">
            <Link href="/login" className="header-action-pill">
              <UserIcon />
              <span>Login</span>
            </Link>

            <Link href="/checkout" className="header-action-pill">
              <BagIcon />
              <span>Bag</span>
            </Link>
          </div>
        </div>
      </header>

      <div
        className={`menu-backdrop ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(false)}
      />

      <aside className={`side-drawer ${isOpen ? "open" : ""}`}>
        <div className="side-drawer-header">
          <span className="side-drawer-title">Menu</span>

          <button
            type="button"
            className="drawer-close-button"
            aria-label="Fechar menu"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
        </div>

        <nav className="side-drawer-nav">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Início
          </Link>

          <Link href="/sobre" onClick={() => setIsOpen(false)}>
            Sobre
          </Link>

          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/produtos/${category.slug}`}
              onClick={() => setIsOpen(false)}
            >
              {category.title}
            </Link>
          ))}

          <Link href="/checkout" onClick={() => setIsOpen(false)}>
            Fazer pedido
          </Link>

          <Link href="/contato" onClick={() => setIsOpen(false)}>
            Contato
          </Link>
        </nav>
      </aside>
    </>
  );
}