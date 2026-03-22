export default function AdminPagesPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">
          Admin
        </p>

        <h1 className="mt-3 text-3xl font-light tracking-[0.08em]">
          Gestão de Páginas
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-300">
          Esta área pode ser usada para organizar páginas editáveis, rascunhos,
          versões originais e futuras pré-visualizações internas do projeto.
        </p>

        <div className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
          <h2 className="text-lg font-medium">Status</h2>
          <p className="mt-3 text-sm text-neutral-400">
            Página recriada corretamente para o App Router do Next.js.
          </p>
        </div>
      </div>
    </main>
  );
}