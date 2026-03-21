import type { PageBlock } from "../../types/pageVersion";
import LuxurySection from "./LuxurySection";
import SectionSlider from "./SectionSlider";

type HomePageRendererProps = {
  blocks: PageBlock[];
};

export default function HomePageRenderer({ blocks }: HomePageRendererProps) {
  const heroBlock = blocks.find((block) => block.type === "hero");
  const textBlocks = blocks.filter((block) => block.type === "text");
  const gridBlocks = blocks.filter((block) => block.type === "grid");
  const ctaBlock = blocks.find((block) => block.type === "cta");

  const fashionItems =
    gridBlocks.find((block) =>
      (block.title || "").toLowerCase().includes("moda")
    )?.items || [
      "Sapatos sociais",
      "Loafers",
      "Coturnos urbanos",
      "Bolsas de couro",
      "Crochê premium",
      "Acessórios",
    ];

  const homeItems =
    gridBlocks.find((block) =>
      (block.title || "").toLowerCase().includes("casa")
    )?.items || ["Cerâmica", "Mesa posta", "Enxoval"];

  return (
    <>
      <section className="border-b border-white/10 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.38em] text-white/35">
            D’Outro Lado
          </p>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] text-[#f4efe6] md:text-7xl">
                {heroBlock?.title || "Uma marca brasileira premium com padrão internacional"}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
                {heroBlock?.subtitle ||
                  "Curadoria brasileira refinada para exportação, com linguagem visual sofisticada e operação preparada para escala global."}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#moda"
                  className="rounded-full bg-[#f4efe6] px-6 py-3 font-medium text-black transition hover:opacity-90"
                >
                  Explorar Moda
                </a>
                <a
                  href="#casa"
                  className="rounded-full border border-white/15 px-6 py-3 font-medium text-[#f4efe6] transition hover:bg-white/10"
                >
                  Explorar Casa
                </a>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-white/35">
                Posicionamento
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-[#f4efe6]">
                Boutique internacional com curadoria brasileira refinada
              </h2>
              <p className="mt-5 text-base leading-8 text-white/60">
                O projeto combina estética premium, controle financeiro, governança e edição segura de páginas para operar com consistência em mercados de alto poder aquisitivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl space-y-8">
          {textBlocks.map((block) => (
            <div
              key={block.id}
              className="rounded-[28px] border border-white/10 bg-white/[0.035] p-8"
            >
              <p className="text-sm uppercase tracking-[0.26em] text-white/35">
                Editorial
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-[#f4efe6]">
                {block.title}
              </h2>
              <p className="mt-4 max-w-4xl text-base leading-8 text-white/60">
                {block.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="moda" className="px-6 py-10 md:px-10">
        <div className="mx-auto max-w-7xl space-y-6">
          <LuxurySection
            eyebrow="Moda & Couro"
            title="Design autoral, couro premium e presença internacional"
            description="Uma frente comercial voltada a sapatos, bolsas, acessórios e peças com identidade brasileira sofisticada, pensadas para mercados que valorizam acabamento, estilo e diferenciação."
            items={fashionItems.slice(0, 6)}
          />
          <SectionSlider title="Seleção de Moda & Couro" items={fashionItems} />
        </div>
      </section>

      <section id="casa" className="px-6 py-10 md:px-10">
        <div className="mx-auto max-w-7xl space-y-6">
          <LuxurySection
            eyebrow="Casa & Lifestyle"
            title="Cerâmica, mesa posta e enxoval com linguagem elegante"
            description="Uma seleção voltada à casa contemporânea, com peças que unem estética, funcionalidade e identidade brasileira refinada para consumidores de maior valor agregado."
            items={homeItems.slice(0, 4)}
          />
          <SectionSlider title="Seleção de Casa & Lifestyle" items={homeItems} />
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[34px] border border-white/10 bg-white/[0.04] p-8 md:p-12">
            <p className="text-sm uppercase tracking-[0.32em] text-white/35">
              Governança e controle
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-[#f4efe6] md:text-4xl">
              Estrutura feita para crescer com controle, consistência e segurança
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {[
                "Margem mínima obrigatória",
                "Logs e auditoria",
                "Edição com staging",
                "Publicação controlada",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[22px] border border-white/10 bg-black/25 p-5"
                >
                  <p className="text-base font-medium text-[#f4efe6]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 pt-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[34px] border border-white/10 bg-[#f4efe6] px-8 py-12 text-black md:px-12">
            <p className="text-sm uppercase tracking-[0.32em] text-black/50">
              Expansão global
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold md:text-4xl">
              {ctaBlock?.title || "Pronto para operar como uma plataforma premium internacional"}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-black/70">
              {ctaBlock?.content ||
                "O D’Outro Lado foi estruturado para unir e-commerce, governança, curadoria premium e operação escalável em uma única plataforma."}
            </p>

            <div className="mt-8">
              <a
                href={ctaBlock?.buttonHref || "/checkout"}
                className="inline-flex rounded-full bg-black px-6 py-3 font-medium text-[#f4efe6] transition hover:opacity-90"
              >
                {ctaBlock?.buttonLabel || "Iniciar contato comercial"}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}