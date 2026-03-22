"use client";

import Navbar from "../../components/Navbar";

export default function LoginPage() {
  return (
    <main className="site-shell">
      <Navbar />

      <section className="inner-hero inner-hero--compact">
        <div className="container">
          <p className="section-eyebrow">Acesso</p>
          <h1 className="inner-page-title">Login</h1>
          <p className="inner-page-description">
            Acesse sua área com uma apresentação visual alinhada ao padrão da
            marca.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container form-shell">
          <div className="form-card">
            <div className="form-card-header">
              <p className="section-eyebrow">Entrar</p>
              <h2 className="section-heading">Bem-vindo de volta</h2>
            </div>

            <form className="premium-form">
              <label className="form-field">
                <span>E-mail</span>
                <input type="email" placeholder="seuemail@exemplo.com" />
              </label>

              <label className="form-field">
                <span>Senha</span>
                <input type="password" placeholder="Digite sua senha" />
              </label>

              <button type="submit" className="primary-cta form-submit">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}