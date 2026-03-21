"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ArrowLeft, Search, ShoppingCart, User } from "lucide-react";
import { useMemo, useState } from "react";
import { useCart } from "../../../context/CartContext";
import { getCategoryBySlug } from "../../../data/categoryData";

function formatPrice(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

function CategoryHeader() {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b0b]/95 text-[#f3ede3] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-12">
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm text-[#ddd4c7] transition hover:text-white">
            Home
          </Link>
          <a href="#colecao" className="text-sm text-[#ddd4c7] transition hover:text-white">
            Coleção
          </a>
          <Link href="/checkout" className="text-sm text-[#ddd4c7] transition hover:text-white">
            Checkout
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#f3ede3] transition hover:bg-white/5 md:hidden"
          aria-label="Abrir menu"
        >
          <span className="text-lg">{menuOpen ? "×" : "☰"}</span>
        </button>

        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 font-serif text-base tracking-[0.25em] text-[#f3ede3] sm:text-lg md:text-xl"
        >
          D’OUTRO LADO
        </Link>

        <div className="ml-auto flex items-center gap-3">
          <button
            type="button"
            aria-label="Buscar"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#f3ede3] transition hover:bg-white/5"
          >
            <Search size={18} />
          </button>

          <button
            type="button"
            aria-label="Conta"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#f3ede3] transition hover:bg-white/5"
          >
            <User size={18} />
          </button>

          <Link
            href="/checkout"
            aria-label="Carrinho"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#f3ede3] transition hover:bg-white/5"
          >
            <ShoppingCart size={18} />
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#d9c6a3] px-1 text-[10px] font-bold text-black">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#0b0b0b] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm text-[#ddd4c7] transition hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <a
              href="#colecao"
              className="text-sm text-[#ddd4c7] transition hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Coleção
            </a>
            <Link
              href="/checkout"
              className="text-sm text-[#ddd4c7] transition hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Checkout
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function CategoryFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0b0b] text-[#f3ede3]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm md:flex-row md:px-10 lg:px-12">
        <p className="font-serif tracking-[0.2em]">D’OUTRO LADO</p>

        <div className="flex flex-wrap items-center gap-5 text-[#ddd4c7]">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <a href="#colecao" className="transition hover:text-white">
            Coleção
          </a>
          <Link href="/checkout" className="transition hover:text-white">
            Checkout
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default function CategoryPage() {
  const params = useParams<{ slug: string }>();
  const { addToCart } = useCart();

  const category = useMemo(() => {
    return getCategoryBySlug(params.slug);
  }, [params.slug]);

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#111111] text-[#f3ede3]">
      <CategoryHeader />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src={category.heroImage}
            alt={category.title}
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/75 to-black/60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-28">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-[#ddd4c7] transition hover:bg-white/5"
          >
            <ArrowLeft size={16} />
            Voltar para home
          </Link>

          <div className="mt-10 max-w-3xl">
            <p className="font-serif text-4xl tracking-[0.12em] md:text-6xl">
              {category.title}
            </p>

            <p className="mt-5 text-lg text-[#efe5d4] md:text-xl">
              {category.subtitle}
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#ddd4c7] md:text-base">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      <section id="colecao" className="px-6 py-14 md:px-10 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-serif text-2xl tracking-[0.12em] text-[#efe5d4] md:text-3xl">
                COLEÇÃO
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#ddd4c7] md:text-base">
                Uma seleção pensada para comunicar sofisticação, origem e valor
                estético com leitura internacional.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {category.products.map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden rounded-[28px] border border-white/8 bg-[#151515] shadow-[0_12px_40px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.32)]"
              >
                <div className="relative h-[320px] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                </div>

                <div className="p-5">
                  <p className="font-serif text-2xl text-[#f3ede3]">
                    {product.name}
                  </p>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#ddd4c7]">
                    {product.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-lg font-medium text-[#d9c6a3]">
                      {formatPrice(product.price)}
                    </span>

                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#ddd4c7]">
                      Premium
                    </span>
                  </div>

                  <button
                    onClick={() =>
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        category: category.slug,
                      })
                    }
                    className="mt-6 w-full rounded-full bg-[#d9c6a3] px-5 py-3 font-medium text-black transition hover:opacity-90"
                  >
                    Adicionar ao carrinho
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CategoryFooter />
    </main>
  );
}