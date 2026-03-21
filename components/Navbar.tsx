"use client";

import Link from "next/link";
import { Menu, Search, ShoppingCart, User } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";

type SavedUser = {
  id: number;
  email: string;
  name: string;
  createdAt: string;
};

export default function Navbar() {
  const { cart } = useCart();
  const [user, setUser] = useState<SavedUser | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-10 lg:px-12">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 md:hidden"
            aria-label="Abrir menu"
          >
            <Menu size={18} />
          </button>

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0B1F3A] text-white shadow-sm">
              <span className="text-sm font-bold">EB</span>
            </div>

            <div className="leading-tight">
              <p className="text-lg font-extrabold tracking-tight text-[#0B1F3A]">
                ExportBrasil
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Global Trade Platform
              </p>
            </div>
          </Link>
        </div>

        <nav className="hidden items-center gap-7 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-slate-600 transition hover:text-[#0B1F3A]"
          >
            Início
          </Link>
          <a
            href="#produtos"
            className="text-sm font-medium text-slate-600 transition hover:text-[#0B1F3A]"
          >
            Produtos
          </a>
          <a
            href="#diferenciais"
            className="text-sm font-medium text-slate-600 transition hover:text-[#0B1F3A]"
          >
            Diferenciais
          </a>
          <Link
            href="/checkout"
            className="text-sm font-medium text-slate-600 transition hover:text-[#0B1F3A]"
          >
            Checkout
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 md:inline-flex"
            aria-label="Pesquisar"
          >
            <Search size={18} />
          </button>

          <Link
            href="/checkout"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50"
            aria-label="Carrinho"
          >
            <ShoppingCart size={18} />
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1F7A63] text-[10px] font-bold text-white shadow">
                {totalItems}
              </span>
            )}
          </Link>

          <div className="hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 md:flex">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600">
              <User size={16} />
            </div>

            <div className="max-w-xs leading-tight">
              <p className="text-xs text-slate-500">Conta</p>
              <p className="truncate text-sm font-semibold text-[#0B1F3A]">
                {user?.name || "Visitante"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}