import Navbar from "../../components/Navbar";

export default function CheckoutPage() {
  return (
    <main className="site-shell">
      <Navbar />

      <section className="internal-hero">
        <div className="container">
          <p className="section-eyebrow">Pedido</p>
          <h1 className="internal-title">Demonstrar interesse</h1>
          <p className="internal-description">
            Envie sua solicitação inicial para que possamos entender o perfil do pedido
            e orientar os próximos passos.
          </p>
        </div>
      </section>

      <section className="internal-section">
        <div className="container">
          <div className="checkout-panel">
            <div className="checkout-copy">
              <p className="section-eyebrow">Solicitação</p>
              <h2 className="section-heading">Pedido inicial e contato comercial</h2>
              <p className="section-copy">
                Esta etapa funciona como uma manifestação de interesse. Após o envio,
                o contato pode seguir por atendimento direto para alinhamento de seleção,
                quantidades, disponibilidade e envio.
              </p>
            </div>

            <form className="premium-form">
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="nome">Nome</label>
                  <input id="nome" name="nome" type="text" placeholder="Seu nome" />
                </div>

                <div className="form-field">
                  <label htmlFor="email">E-mail</label>
                  <input id="email" name="email" type="email" placeholder="Seu e-mail" />
                </div>

                <div className="form-field">
                  <label htmlFor="empresa">Empresa ou boutique</label>
                  <input id="empresa" name="empresa" type="text" placeholder="Nome da empresa" />
                </div>

                <div className="form-field">
                  <label htmlFor="pais">País</label>
                  <input id="pais" name="pais" type="text" placeholder="País de interesse" />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="mensagem">Interesse</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  placeholder="Descreva os produtos ou categorias de interesse"
                  rows={6}
                />
              </div>

              <button type="submit" className="primary-cta">
                Enviar solicitação
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}