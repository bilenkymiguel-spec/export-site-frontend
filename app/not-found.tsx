import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#111111] px-6 text-[#f3ede3]">
      <div className="max-w-2xl text-center">
        <p className="font-serif text-4xl tracking-[0.18em] md:text-6xl">
          D’OUTRO LADO
        </p>

        <p className="mt-8 font-serif text-2xl tracking-[0.08em] md:text-3xl">
          Página não encontrada
        </p>

        <p className="mt-4 text-sm leading-7 text-[#ddd4c7] md:text-base">
          A rota que você tentou acessar não está disponível no momento.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[#d9c6a3] px-6 py-3 font-medium text-black transition hover:opacity-90"
        >
          Voltar para a home
        </Link>
      </div>
    </main>
  );
}