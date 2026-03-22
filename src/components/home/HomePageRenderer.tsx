import type { PageBlock } from "../../types/pageVersion";
import LuxurySection from "./LuxurySection";
import SectionSlider from "./SectionSlider";

type HomePageRendererProps = {
  blocks: PageBlock[];
};

export default function HomePageRenderer({
  blocks,
}: HomePageRendererProps) {
  if (!blocks || blocks.length === 0) {
    return null;
  }

  return (
    <>
      {blocks.map((block, index) => {
        if (block.type === "luxury") {
          return (
            <LuxurySection
              key={block.id ?? `luxury-${index}`}
              title={block.title}
              subtitle={block.subtitle}
              description={block.description}
              image={block.image}
              ctaLabel={block.ctaLabel}
              ctaHref={block.ctaHref}
            />
          );
        }

        if (block.type === "slider") {
          return (
            <SectionSlider
              key={block.id ?? `slider-${index}`}
              title={block.title}
              subtitle={block.subtitle}
              products={block.products ?? []}
            />
          );
        }

        return null;
      })}
    </>
  );
}