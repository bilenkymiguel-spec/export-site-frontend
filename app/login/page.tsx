"use client";

import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="site-shell">
      <Navbar />

      <section className="page-section">
        <div className="page-container narrow">
          <div className="page-header center">
            <p className="section-eyebrow">Acesso</p>
            <h1 className="page-title luxury">Login</h1>
            <p className="page-text centered">
              Acesse sua conta para acompanhar pedidos, interesses e informações
              da sua seleção.
            </p>
          </div>

          <div className="auth-card">
            <form className="auth-form">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="seuemail@exemplo.com"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Senha
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                  className="form-input"
                />
              </div>

              <div className="auth-row">
                <label className="checkbox-line">
                  <input type="checkbox" />
                  <span>Manter conectado</span>
                </label>

                <Link href="/contato" className="text-link">
                  Esqueceu a senha?
                </Link>
              </div>

              <button type="submit" className="primary-cta full">
                Entrar
              </button>
            </form>

            <div className="auth-divider" />

            <div className="auth-footer">
              <p className="page-text centered small">
                Ainda não possui acesso?
              </p>

              <Link href="/contato" className="secondary-cta full">
                Solicitar atendimento
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}