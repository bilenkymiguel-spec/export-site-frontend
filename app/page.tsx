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
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ||
  "http://localhost:3001";

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
    ["moda", "roupa", "óculos", "oculos", "acessórios", "acessorios"].includes(
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
        description="Peças com linguagem contemporânea, acabamentos refinados e força estética para mercados de alto valor."
        image="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=80"
        href="/produtos"
        cta="Explorar moda"
      />

      <CategoryShowcase
        eyebrow="Cerâmica, casa e decoração"
        title="Objetos autorais que elevam o espaço."
        description="Peças com identidade brasileira refinada, pensadas para interiores sofisticados."
        image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80"
        href="/produtos"
        cta="Explorar casa"
        reverse
      />

      <FeaturedProducts
        title="Seleção em destaque"
        subtitle="Curadoria D’OUTRO LADO"
        products={featuredProducts}
      />

      <section className="border-y border-white/10 bg-[#0b0b0b]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-16 md:grid-cols-2 md:px-10">
          
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8">
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#c9ab6d]">
              Moda
            </p>

            <h3 className="mb-4 text-2xl font-light">
              Linhas com presença e elegância.
            </h3>

            <div className="space-y-3">
              {fashionProducts.slice(0, 3).map((product) => (
                <Link
                  key={product.id}
                  href="/produtos"
                  className="flex justify-between border border-white/10 px-4 py-3 rounded-xl hover:border-[#c9ab6d]"
                >
                  <span>{product.name}</span>
                  <span>→</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8">
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#c9ab6d]">
              Casa
            </p>

            <h3 className="mb-4 text-2xl font-light">
              Peças que transformam ambientes.
            </h3>

            <div className="space-y-3">
              {homeProducts.slice(0, 3).map((product) => (
                <Link
                  key={product.id}
                  href="/produtos"
                  className="flex justify-between border border-white/10 px-4 py-3 rounded-xl hover:border-[#c9ab6d]"
                >
                  <span>{product.name}</span>
                  <span>→</span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      <BrandManifesto />

      <section className="bg-[#050505]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-16 md:flex-row md:justify-between md:px-10">
          
          <h2 className="text-3xl font-light max-w-xl">
            Uma vitrine internacional para o Brasil.
          </h2>

          <div className="flex gap-4">
            <Link
              href="/produtos"
              className="border border-[#c9ab6d] px-6 py-3 rounded-full hover:bg-[#c9ab6d] hover:text-black"
            >
              Ver catálogo
            </Link>

            <Link
              href="/checkout"
              className="border border-white/20 px-6 py-3 rounded-full hover:bg-white/10"
            >
              Fazer pedido
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}