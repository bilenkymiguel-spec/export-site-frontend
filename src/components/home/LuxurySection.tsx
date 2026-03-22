type LuxurySectionProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function LuxurySection({
  title = "Curadoria brasileira refinada",
  subtitle = "Design, matéria-prima e identidade",
  description = "Selecionamos produtos com estética sofisticada, acabamento premium e potencial internacional para mercados de alto valor.",
  image,
  ctaLabel = "Explorar coleção",
  ctaHref = "/produtos",
}: LuxurySectionProps) {
  return (
    <section>
      <div>
        <p>{subtitle}</p>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={ctaHref}>{ctaLabel}</a>
        {image ? <img src={image} alt={title} /> : null}
      </div>
    </section>
  );
}