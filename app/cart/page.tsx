"use client";

import Link from "next/link";
import { useCart } from "../../context/CartContext";

function formatPrice(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export default function CartPage() {
  const { cart, addToCart, decreaseQuantity, removeFromCart, clearCart } =
    useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-12 text-[#f5efe6]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.38em] text-[#c9ab6d]">
              Carrinho
            </p>
            <h1 className="text-4xl font-light md:text-5xl">
              Seus itens selecionados
            </h1>
          </div>

          <Link
            href="/produtos"
            className="inline-flex items-center rounded-full border border-white/10 px-6 py-3 text-sm uppercase tracking-[0.2em] transition hover:border-[#c9ab6d]"
          >
            Continuar comprando
          </Link>
        </div>

        {cart.length === 0 ? (
          <section className="rounded-[28px] border border-white/10 bg-white/[0.03] p-10">
            <p className="text-lg text-[#d8d0c3]">Seu carrinho está vazio.</p>

            <div className="mt-6">
              <Link
                href="/produtos"
                className="inline-flex items-center rounded-full border border-[#c9ab6d] px-6 py-3 text-sm uppercase tracking-[0.2em] transition hover:bg-[#c9ab6d] hover:text-black"
              >
                Ver catálogo
              </Link>
            </div>
          </section>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
            <section className="space-y-5">
              {cart.map((item) => (
                <article
                  key={item.id}
                  className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]"
                >
                  <div className="grid gap-0 md:grid-cols-[220px_1fr]">
                    <div className="flex h-[220px] items-center justify-center bg-[#121212]">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="text-center">
                          <p className="text-[11px] uppercase tracking-[0.35em] text-[#c9ab6d]">
                            D’OUTRO LADO
                          </p>
                          <p className="mt-3 text-sm text-[#9b9286]">
                            Espaço reservado para imagem
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col justify-between p-6">
                      <div>
                        <p className="mb-2 text-[11px] uppercase tracking-[0.3em] text-[#c9ab6d]">
                          {item.category || "Produto"}
                        </p>

                        <h2 className="text-2xl font-light">{item.name}</h2>

                        <p className="mt-4 text-lg text-[#efe5d7]">
                          {formatPrice(item.price)}
                        </p>
                      </div>

                      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => decreaseQuantity(item.id)}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-lg transition hover:border-[#c9ab6d]"
                          >
                            −
                          </button>

                          <span className="min-w-[36px] text-center text-base">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              addToCart({
                                id: item.id,
                                name: item.name,
                                price: item.price,
                                image: item.image,
                                category: item.category,
                              })
                            }
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-lg transition hover:border-[#c9ab6d]"
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="inline-flex items-center rounded-full border border-white/10 px-5 py-2 text-xs uppercase tracking-[0.2em] text-[#d8d0c3] transition hover:border-red-400 hover:text-red-300"
                        >
                          Remover
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </section>

            <aside className="h-fit rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
              <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-[#c9ab6d]">
                Resumo
              </p>

              <h3 className="text-2xl font-light">Pedido</h3>

              <div className="mt-6 space-y-4 border-t border-white/10 pt-6">
                <div className="flex items-center justify-between text-sm text-[#d8d0c3]">
                  <span>Itens</span>
                  <span>
                    {cart.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm text-[#d8d0c3]">
                  <span>Total</span>
                  <span className="text-base text-[#f5efe6]">
                    {formatPrice(total)}
                  </span>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <Link
                  href="/checkout"
                  className="inline-flex items-center justify-center rounded-full border border-[#c9ab6d] px-6 py-3 text-sm uppercase tracking-[0.2em] transition hover:bg-[#c9ab6d] hover:text-black"
                >
                  Ir para checkout
                </Link>

                <button
                  type="button"
                  onClick={clearCart}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm uppercase tracking-[0.2em] transition hover:border-red-400 hover:text-red-300"
                >
                  Limpar carrinho
                </button>
              </div>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}