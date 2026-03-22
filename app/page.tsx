import Link from "next/link";

type Product = {
  id: number;
  name: string;
  price: number;
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
    <main className="min-h-screen bg-black text-white px-6 py-10">
      
      {/* HEADER */}
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-2xl tracking-widest">D’OUTRO LADO</h1>

        <div className="flex gap-6 text-sm">
          <Link href="/produtos">Produtos</Link>
          <Link href="/checkout">Carrinho</Link>
        </div>
      </header>

      {/* HERO */}
      <section className="mb-16">
        <h2 className="text-4xl font-light mb-4">
          Curadoria brasileira premium
        </h2>
        <p className="text-white/70 max-w-xl">
          Produtos selecionados com estética sofisticada e potencial
          internacional.
        </p>
      </section>

      {/* PRODUTOS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-white/10 p-6 rounded-xl hover:border-white/30 transition"
          >
            <h3 className="text-lg mb-2">{product.name}</h3>
            <p className="text-white/60">€ {product.price}</p>
          </div>
        ))}
      </section>

    </main>
  );
}