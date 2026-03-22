import Link from "next/link";

type Product = {
  id: number;
  name: string;
  slug?: string;
  price: number;
  currency?: string;
  image?: string;
  category?: string;
};

type FeaturedProductsProps = {
  title: string;
  subtitle: string;
  products: Product[];
};

function formatPrice(price: number, currency = "BRL") {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency,
  }).format(price);
}

export default function FeaturedProducts({
  title,
  subtitle,
  products,
}: FeaturedProductsProps) {
  return (
    <section className="bg-[#f3ede3] text-[#111111]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12 lg:py-24">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.36em] text-[#8b6a3b]">
              {subtitle}
            </p>
            <h2 className="text-3xl font-light leading-tight md:text-5xl">
              {title}
            </h2>
          </div>

          <Link
            href="/produtos"
            className="inline-flex items-center rounded-full border border-[#111111]/15 px-6 py-3 text-sm uppercase tracking-[0.2em] text-[#111111] transition hover:border-[#111111] hover:bg-black hover:text-white"
          >
            Ver todos
          </Link>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.id}
                href={product.slug ? `/produtos/${product.slug}` : "/produtos"}
                className="group overflow-hidden rounded-[28px] border border-black/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.10)]"
              >
                <div className="relative h-[330px] overflow-hidden bg-[#ebe2d5]">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.3em] text-[#8c8477]">
                      D’OUTRO LADO
                    </div>
                  )}

                  <div className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[#f4ede2] backdrop-blur-sm">
                    {product.category || "Produto"}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-light leading-snug">
                    {product.name}
                  </h3>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-[#5f584d]">
                      {formatPrice(product.price, product.currency || "BRL")}
                    </span>
                    <span className="text-sm uppercase tracking-[0.18em] text-[#8b6a3b]">
                      Ver item
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-[28px] border border-black/10 bg-white p-10">
            <p className="text-base text-[#4f4a42]">
              Ainda não há produtos disponíveis para exibição nesta seção.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}