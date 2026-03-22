import Link from "next/link";
import type { ProductBlockItem } from "../../types/pageVersion";

type SectionSliderProps = {
  title: string;
  subtitle?: string;
  products: ProductBlockItem[];
};

export default function SectionSlider({
  title,
  subtitle,
  products,
}: SectionSliderProps) {
  return (
    <section className="w-full bg-[#f7f3ee] text-[#111111]">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">
        <div className="mb-8">
          {subtitle ? (
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#8a7a5c]">
              {subtitle}
            </p>
          ) : null}

          <h2 className="text-2xl font-light md:text-4xl">{title}</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-2xl border border-[#e7dfd4] bg-white"
            >
              <div className="h-72 w-full bg-[#f0ebe4]">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm uppercase tracking-[0.2em] text-[#9b9286]">
                    Sem imagem
                  </div>
                )}
              </div>

              <div className="p-5">
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#8a7a5c]">
                  {product.category ?? "Produto"}
                </p>

                <h3 className="mb-3 text-lg font-medium">{product.name}</h3>

                <p className="mb-4 text-sm text-[#4d4d4d]">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(product.price)}
                </p>

                <Link
                  href={product.slug ? `/produtos/${product.slug}` : "/produtos"}
                  className="inline-flex border border-[#111111] px-4 py-2 text-xs uppercase tracking-[0.2em] transition hover:bg-[#111111] hover:text-white"
                >
                  Ver produto
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}