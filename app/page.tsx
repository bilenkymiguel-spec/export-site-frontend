import Link from "next/link";
import HeroEditorial from "../src/components/home/HeroEditorial";
import CategoryShowcase from "../src/components/home/CategoryShowcase";
import FeaturedProducts from "../src/components/home/FeaturedProducts";
import BrandManifesto from "../src/components/home/BrandManifesto";

type Product = {
  id: number;
  name: string;
  slug?: string;
  price: number;
  currency?: string;
  image?: string;
  category?: string;
  description?: string;
};

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "http://localhost:3001";

async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return [];
    }

    return response.json();
  } catch {
    return [];
  }
}

export default async function HomePage() {
  const products = await getProducts();

  const fashionProducts = products.filter((product) =>
    ["moda", "roupa", "óculos", "acessórios", "acessorios"].includes(
      (product.category || "").toLowerCase(),
    ),
  );

  const homeProducts = products.filter((product) =>
    ["casa", "cerâmica", "ceramica", "decoração", "decoracao"].includes(
      (product.category || "").toLowerCase(),
    ),
  );

  const featuredProducts = products.slice(0, 6);

  return (
    <main className="min-h-screen bg-[#050505] text-[#f5efe6]">
      <HeroEditorial />

      <CategoryShowcase
        eyebrow="Casual, estilo e acessórios"
        title="Moda brasileira com presença internacional."
        description="Peças com linguagem contemporânea, acabamentos refinados e força estética para mercados de alto valor. Um repertório visual limpo, sofisticado e exportável."
        image="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80"
        href="/produtos"
        cta="Explorar moda"
        reverse={false}
      />

      <CategoryShowcase
        eyebrow="Cerâmica, casa e decoração"
        title="Objetos autorais que elevam a experiência do espaço."
        description="Curadoria de peças para mesa, decoração e interiores com identidade brasileira refinada, composição serena e apelo internacional."
        image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80"
        href="/produtos"
        cta="Explorar casa"
        reverse
      />

      <FeaturedProducts
        title="Seleção em destaque"
        subtitle="Uma amostra da curadoria D’OUTRO LADO"
        products={featuredProducts}
      />

      <section className="border-y border-white/10 bg-[#0b0b0b]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-16 md:grid-cols-2 md:px-10 lg:px-12">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition duration-300 hover:border-[#c9ab6d]/60 hover:bg-white/[0.05]">
            <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-[#c9ab6d]">
              Moda
            </p>
            <h3 className="mb-4 text-2xl font-light md:text-3xl">
              Linhas com presença, textura e elegância comercial.
            </h3>
            <p className="mb-6 max-w-xl text-sm leading-7 text-[#d8d0c3]">
              Acessórios e vestuário pensados para compor uma vitrine internacional
              com estética consistente, leitura premium e forte potencial de
              posicionamento.
            </p>

            <div className="space-y-3">
              {fashionProducts.length > 0 ? (
                fashionProducts.slice(0, 3).map((product) => (
                  <Link
                    key={product.id}
                    href={product.slug ? `/produtos/${product.slug}` : "/produtos"}
                    className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-4 transition hover:border-[#c9ab6d]/70 hover:bg-white/[0.03]"
                  >
                    <div>
                      <p className="text-sm text-[#f5efe6]">{product.name}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#9f9584]">
                        {product.category || "Moda"}
                      </p>
                    </div>
                    <span className="text-sm text-[#c9ab6d]">Ver</span>
                  </Link>
                ))
              ) : (
                <p className="text-sm text-[#b7ae9f]">
                  Adicione mais produtos de moda para enriquecer esta seção.
                </p>
              )}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition duration-300 hover:border-[#c9ab6d]/60 hover:bg-white/[0.05]">
            <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-[#c9ab6d]">
              Casa
            </p>
            <h3 className="mb-4 text-2xl font-light md:text-3xl">
              Peças que transformam ambientes em narrativa visual.
            </h3>
            <p className="mb-6 max-w-xl text-sm leading-7 text-[#d8d0c3]">
              Objetos com valor tátil, equilíbrio formal e apelo editorial,
              pensados para compor interiores sofisticados com assinatura
              brasileira contemporânea.
            </p>

            <div className="space-y-3">
              {homeProducts.length > 0 ? (
                homeProducts.slice(0, 3).map((product) => (
                  <Link
                    key={product.id}
                    href={product.slug ? `/produtos/${product.slug}` : "/produtos"}
                    className="flex items-center justify-between rounded-2xl border border-white/10 px-4 py-4 transition hover:border-[#c9ab6d]/70 hover:bg-white/[0.03]"
                  >
                    <div>
                      <p className="text-sm text-[#f5efe6]">{product.name}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#9f9584]">
                        {product.category || "Casa"}
                      </p>
                    </div>
                    <span className="text-sm text-[#c9ab6d]">Ver</span>
                  </Link>
                ))
              ) : (
                <p className="text-sm text-[#b7ae9f]">
                  Adicione mais produtos de casa e decoração para esta área.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <BrandManifesto />

      <section className="bg-[#050505]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-center md:px-10 lg:px-12">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-[#c9ab6d]">
              Contato comercial
            </p>
            <h2 className="max-w-2xl text-3xl font-light leading-tight md:text-5xl">
              Desenvolvido para apresentar o Brasil com linguagem internacional.
            </h2>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/produtos"
              className="inline-flex items-center justify-center rounded-full border border-[#c9ab6d] px-7 py-3 text-sm uppercase tracking-[0.2em] text-[#f5efe6] transition hover:bg-[#c9ab6d] hover:text-[#111111]"
            >
              Ver catálogo
            </Link>

            <Link
              href="/checkout"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3 text-sm uppercase tracking-[0.2em] text-[#f5efe6] transition hover:border-white/40 hover:bg-white/5"
            >
              Iniciar pedido
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}