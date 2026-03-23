import Navbar from "../../components/Navbar";

export default function SobrePage() {
  return (
    <main className="site-shell">
      <Navbar />

      <section className="content-section">
        <div className="content-box">
          <h1>Sobre</h1>

          <p>
            D’Outro Lado é uma plataforma de curadoria de produtos brasileiros com
            foco em exportação para mercados internacionais de alto padrão.
          </p>

          <p>
            Selecionamos peças com identidade cultural, qualidade e potencial de
            posicionamento premium.
          </p>
        </div>
      </section>
    </main>
  );
}