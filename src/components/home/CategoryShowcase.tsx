import Link from "next/link";

export default function HeroEditorial() {
  return (
    <section className="relative overflow-hidden bg-[#050505]">
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-[#7a5a2b]/20 blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[420px] w-[420px] rounded-full bg-[#d9c7a1]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,5,5,0.35),rgba(5,5,5,0.9))]" />
      </div>

      <div className="relative mx-auto grid min-h-[92vh] max-w-7xl grid-cols-1 gap-10 px-6 pb-16 pt-28 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:pt-32">
        <div className="flex flex-col justify-center">
          <p className="mb-5 text-[11px] uppercase tracking-[0.42em] text-[#c9ab6d]">
            Curadoria brasileira premium
          </p>

          <h1 className="max-w-4xl text-5xl font-light leading-[0.95] text-[#f7f1e8] md:text-7xl lg:text-[88px]">
            Exportação com alma editorial e presença internacional.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#d8d0c3] md:text-lg">
            D’OUTRO LADO apresenta uma seleção de produtos brasileiros com
            linguagem visual sofisticada, identidade refinada e potencial real
            para mercados de alto poder aquisitivo.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/produtos"
              className="inline-flex items-center justify-center rounded-full border border-[#c9ab6d] px-8 py-3 text-sm uppercase tracking-[0.22em] text-[#f5efe6] transition duration-300 hover:bg-[#c9ab6d] hover:text-[#111111]"
            >
              Explorar coleção
            </Link>

            <Link
              href="/checkout"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-3 text-sm uppercase tracking-[0.22em] text-[#f5efe6] transition duration-300 hover:border-white/40 hover:bg-white/5"
            >
              Fazer pedido
            </Link>
          </div>

          <div className="mt-14 grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
              <p className="text-3xl font-light text-[#f7f1e8]">01</p>
              <p className="mt-2 text-sm leading-6 text-[#cfc6b8]">
                Curadoria estética voltada à exportação premium.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
              <p className="text-3xl font-light text-[#f7f1e8]">02</p>
              <p className="mt-2 text-sm leading-6 text-[#cfc6b8]">
                Produtos com identidade visual forte e leitura internacional.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
              <p className="text-3xl font-light text-[#f7f1e8]">03</p>
              <p className="mt-2 text-sm leading-6 text-[#cfc6b8]">
                Apresentação limpa, artística e comercialmente elegante.
              </p>
            </div>
          </div>
        </div>

        <div className="relative flex items-end justify-center">
          <div className="relative w-full max-w-[560px]">
            <div className="absolute -left-6 top-10 h-24 w-24 rounded-full border border-[#c9ab6d]/30" />
            <div className="absolute -right-6 bottom-14 h-20 w-20 rounded-full border border-white/10" />

            <div className="overflow-hidden rounded-[34px] border border-white/10 bg-[#101010] shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=80"
                alt="Editorial premium"
                className="h-[640px] w-full object-cover transition duration-700 hover:scale-[1.03]"
              />
            </div>

            <div className="absolute bottom-6 left-6 max-w-xs rounded-[28px] border border-white/10 bg-black/40 p-5 backdrop-blur-md">
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#c9ab6d]">
                Posicionamento
              </p>
              <p className="mt-3 text-sm leading-7 text-[#ece5d9]">
                Uma boutique digital com curadoria brasileira refinada, pensada
                para compradores internacionais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}