"use client";

import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useCart } from "../context/CartContext";

type SlideCardProps = {
  title: string;
  href: string;
  images: string[];
  autoplayMs: number;
};

function shuffleOnce<T>(items: T[]) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function SlideCard({ title, href, images, autoplayMs }: SlideCardProps) {
  const shuffledImages = useMemo(() => shuffleOnce(images), [images]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || shuffledImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % shuffledImages.length);
    }, autoplayMs);

    return () => clearInterval(interval);
  }, [autoplayMs, isPaused, shuffledImages.length]);

  const goPrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex(
      (prev) => (prev - 1 + shuffledImages.length) % shuffledImages.length
    );
  };

  const goNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % shuffledImages.length);
  };

  return (
    <Link
      href={href}
      className="group block"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <article className="overflow-hidden rounded-[28px] border border-white/8 bg-[#151515] shadow-[0_12px_40px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.38)]">
        <div className="relative h-[420px] overflow-hidden sm:h-[460px] lg:h-[420px]">
          {shuffledImages.map((image, index) => (
            <img
              key={`${title}-${index}`}
              src={image}
              alt={title}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                index === currentIndex
                  ? "scale-100 opacity-100"
                  : "pointer-events-none scale-[1.03] opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

          <div className="absolute inset-x-0 bottom-0 p-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="font-serif text-2xl tracking-[0.08em] text-[#f3ede3]">
                  {title}
                </p>
                <p className="mt-2 text-sm text-[#ddd4c7]">
                  Explorar categoria
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label={`Imagem anterior de ${title}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur transition hover:bg-black/50"
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  type="button"
                  onClick={goNext}
                  aria-label={`Próxima imagem de ${title}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur transition hover:bg-black/50"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

function Header() {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b0b]/95 text-[#f3ede3] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-12">
        <div className="hidden items-center gap-6 md:flex">
          <a href="#sobre" className="text-sm text-[#ddd4c7] transition hover:text-white">
            Sobre
          </a>
          <a href="#produtos" className="text-sm text-[#ddd4c7] transition hover:text-white">
            Produtos
          </a>
          <a href="#contato" className="text-sm text-[#ddd4c7] transition hover:text-white">
            Contato
          </a>
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
            <a
              href="#sobre"
              className="text-sm text-[#ddd4c7] transition hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#produtos"
              className="text-sm text-[#ddd4c7] transition hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Produtos
            </a>
            <a
              href="#contato"
              className="text-sm text-[#ddd4c7] transition hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer
      id="contato"
      className="border-t border-white/10 bg-[#0b0b0b] text-[#f3ede3]"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm md:flex-row md:px-10 lg:px-12">
        <p className="font-serif tracking-[0.2em]">D’OUTRO LADO</p>

        <div className="flex flex-wrap items-center gap-5 text-[#ddd4c7]">
          <a href="#sobre" className="transition hover:text-white">
            Sobre
          </a>
          <a href="#produtos" className="transition hover:text-white">
            Produtos
          </a>
          <a href="#contato" className="transition hover:text-white">
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const casualCards = [
    {
      title: "Bolsas",
      href: "/produtos/bolsas",
      autoplayMs: 3000,
      images: [
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1200&auto=format&fit=crop",
      ],
    },
    {
      title: "Calçados",
      href: "/produtos/calcados",
      autoplayMs: 3000,
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop",
      ],
    },
    {
      title: "Acessórios",
      href: "/produtos/acessorios",
      autoplayMs: 4000,
      images: [
        "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=1200&auto=format&fit=crop",
      ],
    },
  ];

  const homeCards = [
    {
      title: "Mesa & Cozinha",
      href: "/produtos/mesa-cozinha",
      autoplayMs: 4000,
      images: [
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517701550927-30cf4ba1f5b8?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1464306076886-da185f6a9d05?q=80&w=1200&auto=format&fit=crop",
      ],
    },
    {
      title: "Decoração",
      href: "/produtos/decoracao",
      autoplayMs: 3000,
      images: [
        "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
      ],
    },
    {
      title: "Casa & Enxoval",
      href: "/produtos/casa",
      autoplayMs: 4000,
      images: [
        "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200&auto=format&fit=crop",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#111111] text-[#f3ede3]">
      <Header />

      <section className="border-b border-white/8 bg-[#0f0f0f] px-6 py-24 md:px-10 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-serif text-4xl tracking-[0.3em] text-[#f3ede3] md:text-6xl">
            D’OUTRO LADO
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#ddd4c7] md:text-lg">
            Levando o melhor do Brasil até você
          </p>
        </div>
      </section>

      <section id="sobre" className="px-6 py-18 md:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="font-serif text-2xl tracking-[0.14em] text-[#efe5d4] md:text-3xl">
              CASUAL, ESTILO E ACESSÓRIOS
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {casualCards.map((card) => (
              <SlideCard
                key={card.title}
                title={card.title}
                href={card.href}
                images={card.images}
                autoplayMs={card.autoplayMs}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="produtos" className="px-6 py-8 md:px-10 lg:px-12 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="max-w-4xl font-serif text-2xl tracking-[0.12em] text-[#efe5d4] md:text-3xl">
              CERÂMICA BRASILEIRA, DECORAÇÕES, CASA E COZINHA
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {homeCards.map((card) => (
              <SlideCard
                key={card.title}
                title={card.title}
                href={card.href}
                images={card.images}
                autoplayMs={card.autoplayMs}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}