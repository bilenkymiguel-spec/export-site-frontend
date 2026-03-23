"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
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

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="nav-svg">
      <circle
        cx="11"
        cy="11"
        r="6.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M16 16L20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
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

type SearchSuggestion = {
  label: string;
  href: string;
  group: string;
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const categories = getAllCategories();

  const fashionCategory = useMemo(
    () =>
      categories.find((category) =>
        /moda|acess[oó]rios|couro|estilo/i.test(category.title)
      ),
    [categories]
  );

  const homeCategory = useMemo(
    () =>
      categories.find((category) =>
        /cer[aâ]mica|decora[cç][aã]o|casa/i.test(category.title)
      ),
    [categories]
  );

  const fashionHref = fashionCategory
    ? `/produtos/${fashionCategory.slug}`
    : "/produtos";
  const homeHref = homeCategory ? `/produtos/${homeCategory.slug}` : "/produtos";

  const searchSuggestions: SearchSuggestion[] = [
    {
      label: "Bolsas de crochê",
      href: fashionHref,
      group: "Moda, couro e acessórios",
    },
    {
      label: "Bolsas de couro",
      href: fashionHref,
      group: "Moda, couro e acessórios",
    },
    {
      label: "Coturnos femininos",
      href: fashionHref,
      group: "Moda, couro e acessórios",
    },
    {
      label: "Sapatos sociais",
      href: fashionHref,
      group: "Moda, couro e acessórios",
    },
    {
      label: "Óculos de sol",
      href: fashionHref,
      group: "Moda, couro e acessórios",
    },
    {
      label: "Carteiras de couro",
      href: fashionHref,
      group: "Moda, couro e acessórios",
    },
    {
      label: "Necessaires de couro",
      href: fashionHref,
      group: "Moda, couro e acessórios",
    },
    {
      label: "Peças de decoração em cerâmica",
      href: homeHref,
      group: "Cerâmica, decoração e casa",
    },
    {
      label: "Pratos de cerâmica",
      href: homeHref,
      group: "Cerâmica, decoração e casa",
    },
    {
      label: "Xícaras de cerâmica",
      href: homeHref,
      group: "Cerâmica, decoração e casa",
    },
    {
      label: "Travessas de cerâmica",
      href: homeHref,
      group: "Cerâmica, decoração e casa",
    },
    {
      label: "Enxoval",
      href: homeHref,
      group: "Cerâmica, decoração e casa",
    },
  ];

  const filteredSuggestions = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      return searchSuggestions.slice(0, 8);
    }

    return searchSuggestions.filter(
      (item) =>
        item.label.toLowerCase().includes(normalized) ||
        item.group.toLowerCase().includes(normalized)
    );
  }, [query]);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow =
      isMenuOpen || isSearchOpen ? "hidden" : originalOverflow;

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isMenuOpen, isSearchOpen]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        setIsSearchOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function closeAll() {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }

  function openMenu() {
    setIsSearchOpen(false);
    setIsMenuOpen(true);
  }

  function toggleSearch() {
    setIsMenuOpen(false);
    setIsSearchOpen((prev) => !prev);
  }

  return (
    <>
      <header className="site-header">
        <div className="site-header-top">
          <Link href="/" className="brand-top" onClick={closeAll}>
            D’OUTRO LADO
          </Link>
        </div>

        <div className="site-header-bar">
          <button
            type="button"
            className="header-circle-button"
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
            onClick={openMenu}
          >
            <MenuIcon />
          </button>

          <div className="site-header-spacer" aria-hidden="true" />

          <div className="header-actions">
            <button
              type="button"
              className="header-circle-button"
              aria-label="Pesquisar produtos"
              aria-expanded={isSearchOpen}
              onClick={toggleSearch}
            >
              <SearchIcon />
            </button>

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
        className={`menu-backdrop ${
          isMenuOpen || isSearchOpen ? "active" : ""
        }`}
        onClick={closeAll}
      />

      <aside className={`side-drawer ${isMenuOpen ? "open" : ""}`}>
        <div className="side-drawer-header">
          <span className="side-drawer-title">Menu</span>

          <button
            type="button"
            className="drawer-close-button"
            aria-label="Fechar menu"
            onClick={() => setIsMenuOpen(false)}
          >
            ×
          </button>
        </div>

        <nav className="side-drawer-nav">
          <Link href="/" onClick={closeAll}>
            Início
          </Link>

          <Link href="/sobre" onClick={closeAll}>
            Sobre
          </Link>

          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/produtos/${category.slug}`}
              onClick={closeAll}
            >
              {category.title}
            </Link>
          ))}

          <Link href="/checkout" onClick={closeAll}>
            Fazer pedido
          </Link>

          <Link href="/contato" onClick={closeAll}>
            Contato
          </Link>
        </nav>
      </aside>

      <section className={`search-panel ${isSearchOpen ? "open" : ""}`}>
        <div className="search-panel-inner">
          <div className="search-panel-header">
            <p className="search-panel-kicker">Pesquisa</p>

            <button
              type="button"
              className="drawer-close-button"
              aria-label="Fechar pesquisa"
              onClick={() => setIsSearchOpen(false)}
            >
              ×
            </button>
          </div>

          <div className="search-field-wrap">
            <SearchIcon />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Pesquisar bolsas, couro, cerâmica, decoração..."
              className="search-input"
            />
          </div>

          <div className="search-suggestions">
            <p className="search-suggestions-title">
              {query.trim() ? "Resultados sugeridos" : "Pesquisas sugeridas"}
            </p>

            {filteredSuggestions.length > 0 ? (
              <div className="search-suggestions-list">
                {filteredSuggestions.map((item) => (
                  <Link
                    key={`${item.group}-${item.label}`}
                    href={item.href}
                    className="search-suggestion-card"
                    onClick={closeAll}
                  >
                    <span className="search-suggestion-label">{item.label}</span>
                    <span className="search-suggestion-group">{item.group}</span>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="search-empty-state">
                Nenhum item encontrado para essa pesquisa.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}