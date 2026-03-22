import Navbar from "../../components/Navbar";

export default function ContatoPage() {
  return (
    <main className="site-shell">
      <Navbar />

      <section className="inner-hero">
        <div className="container">
          <p className="section-eyebrow">Contato</p>
          <h1 className="inner-page-title">Entre em contato</h1>
          <p className="inner-page-description">
            Estamos disponíveis para apresentar a curadoria, esclarecer dúvidas e
            orientar os próximos passos.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="contact-grid">
            <article className="info-card">
              <p className="section-eyebrow">Atendimento</p>
              <h2 className="section-heading">Canal principal</h2>
              <p className="section-copy">
                Telefone / WhatsApp
                <br />
                16 99197-7845
              </p>
            </article>

            <article className="info-card">
              <p className="section-eyebrow">Mensagem</p>
              <h2 className="section-heading">Apresentação do interesse</h2>
              <p className="section-copy">
                Informe a categoria desejada, tipo de produto e o seu interesse
                comercial para avançarmos de forma objetiva.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}