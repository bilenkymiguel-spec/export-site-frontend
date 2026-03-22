import Link from "next/link";

type CategoryShowcaseProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  href: string;
  cta: string;
  reverse?: boolean;
};

export default function CategoryShowcase({
  eyebrow,
  title,
  description,
  image,
  href,
  cta,
  reverse = false,
}: CategoryShowcaseProps) {
  return (
    <section className="bg-[#050505]">
      <div
        className={`mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:px-10 lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* IMAGEM */}
        <div className="relative">
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#111111]">
            <img
              src={image}
              alt={title}
              className="h-[420px] w-full object-cover transition duration-700 hover:scale-[1.04]"
            />
          </div>
        </div>

        {/* TEXTO */}
        <div>
          <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-[#c9ab6d]">
            {eyebrow}
          </p>

          <h2 className="text-3xl font-light text-[#f5efe6] md:text-5xl">
            {title}
          </h2>

          <p className="mt-6 text-sm leading-8 text-[#d8d0c3] md:text-base">
            {description}
          </p>

          <div className="mt-8">
            <Link
              href={href}
              className="inline-flex items-center rounded-full border border-white/15 px-7 py-3 text-sm uppercase tracking-[0.2em] text-[#f5efe6] hover:border-[#c9ab6d]"
            >
              {cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}