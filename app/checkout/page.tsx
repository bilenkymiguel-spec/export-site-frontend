"use client";

import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="site-shell">
      <Navbar />

      <section className="page-section">
        <div className="page-container page-container-narrow">
          <header className="page-header page-header-center">
            <p className="section-eyebrow">Acesso</p>
            <h1 className="page-title luxury-title">Login</h1>
            <p className="page-text page-text-center">
              Acesse sua conta para acompanhar pedidos, interesses e informações
              da sua seleção.
            </p>
          </header>

          <div className="panel-card auth-panel">
            <form className="auth-form">
              <div className="form-field">
                <label htmlFor="email" className="form-label">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input"
                  placeholder="seuemail@exemplo.com"
                />
              </div>

              <div className="form-field">
                <label htmlFor="password" className="form-label">
                  Senha
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-input"
                  placeholder="Digite sua senha"
                />
              </div>

              <div className="auth-meta-row">
                <label className="checkbox-line">
                  <input type="checkbox" />
                  <span>Manter conectado</span>
                </label>

                <Link href="/contato" className="text-link">
                  Esqueceu a senha?
                </Link>
              </div>

              <button type="submit" className="primary-cta full-width">
                Entrar
              </button>
            </form>

            <div className="divider-line" />

            <div className="auth-footer">
              <p className="page-text page-text-center auth-footer-text">
                Ainda não possui acesso?
              </p>

              <Link href="/contato" className="secondary-cta full-width">
                Solicitar atendimento
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}