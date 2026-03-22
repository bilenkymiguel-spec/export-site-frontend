export default function BrandManifesto() {
  return (
    <section className="bg-[#050505]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-24">
        <div>
          <p className="mb-4 text-[11px] uppercase tracking-[0.36em] text-[#c9ab6d]">
            Manifesto da marca
          </p>
          <h2 className="max-w-md text-3xl font-light leading-tight text-[#f5efe6] md:text-5xl">
            Brasil autoral, apresentado com clareza e sofisticação.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
            <p className="mb-3 text-sm uppercase tracking-[0.22em] text-[#c9ab6d]">
              Curadoria
            </p>
            <p className="text-sm leading-7 text-[#d8d0c3]">
              Selecionamos produtos com força visual, qualidade percebida e valor
              de posicionamento para uma apresentação internacional consistente.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
            <p className="mb-3 text-sm uppercase tracking-[0.22em] text-[#c9ab6d]">
              Estética
            </p>
            <p className="text-sm leading-7 text-[#d8d0c3]">
              A interface parte de uma lógica editorial: respiro, contraste, textura
              visual e elegância sem excesso.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
            <p className="mb-3 text-sm uppercase tracking-[0.22em] text-[#c9ab6d]">
              Narrativa
            </p>
            <p className="text-sm leading-7 text-[#d8d0c3]">
              Cada categoria funciona como uma extensão da marca, articulando moda,
              casa e cultura material em uma linguagem contemporânea.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
            <p className="mb-3 text-sm uppercase tracking-[0.22em] text-[#c9ab6d]">
              Mercado
            </p>
            <p className="text-sm leading-7 text-[#d8d0c3]">
              O objetivo não é parecer um marketplace comum, mas uma boutique digital
              preparada para negociação e exportação premium.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}