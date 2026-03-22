import Navbar from "../../components/Navbar";

export default function ContatoPage() {
  return (
    <main className="site-shell">
      <Navbar />

      <section className="internal-hero">
        <div className="container">
          <p className="section-eyebrow">Contato</p>
          <h1 className="internal-title">Fale com a D’Outro Lado</h1>
          <p className="internal-description">
            Entre em contato para apresentar interesse, oportunidades comerciais
            ou dúvidas sobre a curadoria.
          </p>
        </div>
      </section>

      <section className="internal-section">
        <div className="container">
          <div className="content-grid">
            <div>
              <p className="section-eyebrow">Atendimento</p>
              <h2 className="section-heading">Canal direto para conversas comerciais</h2>
            </div>

            <div className="content-stack">
              <div className="contact-card">
                <span className="contact-label">WhatsApp</span>
                <a href="https://wa.me/5516991977845" target="_blank" rel="noreferrer">
                  +55 16 99197-7845
                </a>
              </div>

              <div className="contact-card">
                <span className="contact-label">E-mail</span>
                <a href="mailto:bilenlymiguel@gmail.com">bilenkymiguel@gmail.com</a>
              </div>

              <div className="contact-card">
                <span className="contact-label">Perfil</span>
                <p>
                  Disponível para compradores, boutiques e parceiros interessados
                  em produtos brasileiros exclusivos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}