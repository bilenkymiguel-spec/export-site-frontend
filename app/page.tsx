import Link from "next/link";

type Product = {
  id: number;
  name: string;
  price: number;
  image?: string;
  category?: string;
};

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ||
  "http://localhost:3001";

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/products`, {
      cache: "no-store",
    });

    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-[#050505] text-[#f5efe6]">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <button
            aria-label="Menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-lg"
          >
            ☰
          </button>

          <div className="text-center">
            <p className="text-[11px] uppercase tracking-[0.45em] text-[#c9ab6d]">
              Curadoria brasileira
            </p>
            <h1 className="text-2xl font-light tracking-[0.28em] md:text-3xl">
              D’OUTRO LADO
            </h1>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <Link
              href="/auth"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10"
            >
              👤
            </Link>
            <Link
              href="/cart"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10"
            >
              🛒
            </Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,171,109,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]" />
        <div className="mx-auto grid min-h-[78vh] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:px-10 lg:grid-cols-2 lg:py-24">
          <div className="relative z-10">
            <p className="mb-4 text-[11px] uppercase tracking-[0.45em] text-[#c9ab6d]">
              Boutique internacional
            </p>

            <h2 className="max-w-3xl text-5xl font-light leading-[0.95] md:text-7xl">
              Produtos brasileiros com presença premium.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#d8d0c3]">
              Um catálogo com estética editorial, linguagem sofisticada e foco
              em exportação para mercados de alto valor.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/produtos"
                className="inline-flex items-center justify-center rounded-full border border-[#c9ab6d] px-8 py-3 text-sm uppercase tracking-[0.22em] text-[#f5efe6] transition hover:bg-[#c9ab6d] hover:text-black"
              >
                Explorar coleção
              </Link>

              <Link
                href="/checkout"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-3 text-sm uppercase tracking-[0.22em] text-[#f5efe6] transition hover:bg-white/5"
              >
                Fazer pedido
              </Link>
            </div>
          </div>

          <div className="relative z-10">
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#111111] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=80"
                alt="Editorial premium"
                className="h-[520px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-24">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-[#c9ab6d]">
              Seleção em destaque
            </p>
            <h3 className="text-3xl font-light md:text-5xl">
              Curadoria visual do momento
            </h3>
          </div>

          <Link
            href="/produtos"
            className="hidden rounded-full border border-white/10 px-6 py-3 text-sm uppercase tracking-[0.2em] md:inline-flex"
          >
            Ver catálogo
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-[#c9ab6d]/50"
            >
              <div className="flex h-[320px] items-center justify-center bg-[#171717]">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                ) : (
                  <div className="text-center">
                    <p className="text-[11px] uppercase tracking-[0.35em] text-[#c9ab6d]">
                      D’OUTRO LADO
                    </p>
                    <p className="mt-3 text-sm text-[#a79d8f]">
                      Espaço reservado para imagem
                    </p>
                  </div>
                )}
              </div>

              <div className="p-6">
                <p className="mb-2 text-[11px] uppercase tracking-[0.28em] text-[#c9ab6d]">
                  {product.category || "Produto"}
                </p>

                <h4 className="text-2xl font-light leading-snug">
                  {product.name}
                </h4>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-lg text-[#efe5d7]">
                    € {product.price}
                  </span>

                  <Link
                    href="/produtos"
                    className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.18em] transition hover:border-[#c9ab6d]"
                  >
                    Ver item
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}