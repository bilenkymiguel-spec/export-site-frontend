"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const user = {
      id: Date.now(),
      email,
      name,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Login realizado");
  }

  return (
    <main className="site-shell">
      <Navbar />

      <section className="auth-section">
        <div className="auth-box">
          <h1>Login</h1>

          <form onSubmit={handleLogin} className="auth-form">
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit" className="primary-cta">
              Entrar
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}