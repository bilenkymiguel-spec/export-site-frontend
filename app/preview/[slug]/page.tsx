type PreviewPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatSlug(slug: string) {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default async function PreviewPage({ params }: PreviewPageProps) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">
          Preview
        </p>

        <h1 className="mt-3 text-3xl font-light tracking-[0.08em]">
          {formatSlug(slug)}
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-300">
          Página dinâmica de pré-visualização para o slug:
          <span className="ml-2 rounded-full border border-neutral-700 px-3 py-1 text-xs uppercase tracking-[0.18em] text-neutral-200">
            {slug}
          </span>
        </p>

        <div className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
          <h2 className="text-lg font-medium">Informações</h2>
          <p className="mt-3 text-sm text-neutral-400">
            Estrutura válida para rota dinâmica no App Router.
          </p>
        </div>
      </div>
    </main>
  );
}