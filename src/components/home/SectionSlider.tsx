"use client";

import { useMemo, useState } from "react";

type SectionSliderProps = {
  title: string;
  items: string[];
};

export default function SectionSlider({ title, items }: SectionSliderProps) {
  const [index, setIndex] = useState(0);

  const visibleItems = useMemo(() => {
    if (items.length <= 3) return items;
    return items.slice(index, index + 3);
  }, [index, items]);

  function handlePrev() {
    if (items.length <= 3) return;
    setIndex((prev) => (prev === 0 ? Math.max(items.length - 3, 0) : prev - 1));
  }

  function handleNext() {
    if (items.length <= 3) return;
    setIndex((prev) => (prev >= items.length - 3 ? 0 : prev + 1));
  }

  return (
    <section className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 md:p-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h3 className="text-2xl font-semibold text-[#f4efe6]">{title}</h3>

        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-[#f4efe6] transition hover:bg-white/10"
          >
            Anterior
          </button>
          <button
            onClick={handleNext}
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-[#f4efe6] transition hover:bg-white/10"
          >
            Próximo
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {visibleItems.map((item) => (
          <article
            key={item}
            className="rounded-[22px] border border-white/10 bg-black/30 p-5 transition hover:border-white/20 hover:bg-white/[0.05]"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-white/35">
              Curadoria
            </p>
            <h4 className="mt-3 text-lg font-medium text-[#f4efe6]">{item}</h4>
            <p className="mt-3 text-sm leading-6 text-white/55">
              Seleção com padrão internacional, linguagem sofisticada e foco em mercados de alto valor.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}