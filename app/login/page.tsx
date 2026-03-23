"use client";

import { FormEvent, useMemo, useState } from "react";
import Navbar from "../../components/Navbar";
import { supabase } from "../../src/lib/supabase";

type AccessMode = "email" | "phone";
type ScreenMode = "access" | "forgot";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="auth-social-icon">
      <path
        d="M21.805 10.023H12.24v3.955h5.48c-.236 1.273-.96 2.353-2.048 3.079v2.56h3.312c1.94-1.787 3.061-4.417 3.061-7.547 0-.68-.06-1.34-.24-2.047Z"
        fill="currentColor"
      />
      <path
        d="M12.24 22c2.77 0 5.094-.908 6.792-2.383l-3.312-2.56c-.92.616-2.098.99-3.48.99-2.672 0-4.937-1.806-5.746-4.236H3.08v2.64A10.254 10.254 0 0 0 12.24 22Z"
        fill="currentColor"
      />
      <path
        d="M6.494 13.811A6.173 6.173 0 0 1 6.172 12c0-.63.11-1.24.322-1.811V7.549H3.08A10.254 10.254 0 0 0 2 12c0 1.64.392 3.19 1.08 4.451l3.414-2.64Z"
        fill="currentColor"
      />
      <path
        d="M12.24 5.953c1.51 0 2.862.52 3.928 1.54l2.943-2.943C17.33 2.88 15.01 2 12.24 2A10.254 10.254 0 0 0 3.08 7.549l3.414 2.64c.81-2.43 3.074-4.236 5.746-4.236Z"
        fill="currentColor"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="auth-social-icon">
      <path
        d="M16.365 12.245c.02 2.225 1.95 2.965 1.972 2.974-.016.052-.308 1.057-1.014 2.095-.61.896-1.244 1.788-2.24 1.807-.98.019-1.294-.58-2.414-.58-1.122 0-1.472.562-2.397.6-.962.036-1.695-.966-2.31-1.858-1.257-1.815-2.218-5.13-.928-7.37.64-1.112 1.784-1.816 3.025-1.835.944-.018 1.836.637 2.414.637.58 0 1.667-.788 2.81-.672.478.02 1.822.193 2.685 1.456-.07.044-1.604.935-1.603 2.746Zm-2.002-5.552c.51-.618.856-1.476.762-2.334-.736.03-1.628.49-2.156 1.108-.474.55-.89 1.428-.778 2.27.822.064 1.662-.418 2.172-1.044Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function LoginPage() {
  const [screenMode, setScreenMode] = useState<ScreenMode>("access");
  const [accessMode, setAccessMode] = useState<AccessMode>("email");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationTarget, setVerificationTarget] = useState("");

  const [isSending, setIsSending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");

  const activeValue = useMemo(() => {
    return accessMode === "email" ? email.trim() : phone.trim();
  }, [accessMode, email, phone]);

  async function handleGoogleLogin() {
    setError("");
    setFeedback("");

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/`,
      },
    });

    if (error) {
      setError(error.message);
    }
  }

  async function handleAppleLogin() {
    setError("");
    setFeedback("");

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "apple",
      options: {
        redirectTo: `${window.location.origin}/`,
      },
    });

    if (error) {
      setError(error.message);
    }
  }

  async function handleSendCode(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setFeedback("");
    setIsSending(true);

    try {
      if (!activeValue) {
        throw new Error(
          accessMode === "email"
            ? "Digite seu email pessoal."
            : "Digite seu número de telefone."
        );
      }

      if (accessMode === "email") {
        const { error } = await supabase.auth.signInWithOtp({
          email: activeValue,
          options: {
            shouldCreateUser: true,
            emailRedirectTo: `${window.location.origin}/`,
          },
        });

        if (error) {
          throw error;
        }

        setVerificationTarget(activeValue);
        setFeedback(
          screenMode === "forgot"
            ? "Enviamos um código de verificação para seu email."
            : "Enviamos um código de acesso para seu email."
        );
      } else {
        const { error } = await supabase.auth.signInWithOtp({
          phone: activeValue,
        });

        if (error) {
          throw error;
        }

        setVerificationTarget(activeValue);
        setFeedback(
          screenMode === "forgot"
            ? "Enviamos um código de verificação para seu celular."
            : "Enviamos um código de acesso para seu celular."
        );
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao enviar código.");
    } finally {
      setIsSending(false);
    }
  }

  async function handleVerifyCode(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setFeedback("");
    setIsVerifying(true);

    try {
      if (!verificationTarget) {
        throw new Error("Solicite um código antes de verificar.");
      }

      if (!verificationCode.trim()) {
        throw new Error("Digite o código de verificação.");
      }

      if (accessMode === "email") {
        const { error } = await supabase.auth.verifyOtp({
          email: verificationTarget,
          token: verificationCode.trim(),
          type: "email",
        });

        if (error) {
          throw error;
        }
      } else {
        const { error } = await supabase.auth.verifyOtp({
          phone: verificationTarget,
          token: verificationCode.trim(),
          type: "sms",
        });

        if (error) {
          throw error;
        }
      }

      setFeedback(
        screenMode === "forgot"
          ? "Código confirmado com sucesso. Você já pode continuar a recuperação do acesso."
          : "Acesso confirmado com sucesso."
      );
      setVerificationCode("");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Erro ao verificar o código."
      );
    } finally {
      setIsVerifying(false);
    }
  }

  function switchScreenMode(mode: ScreenMode) {
    setScreenMode(mode);
    setError("");
    setFeedback("");
    setVerificationCode("");
  }

  function switchAccessMode(mode: AccessMode) {
    setAccessMode(mode);
    setError("");
    setFeedback("");
    setVerificationCode("");
    setVerificationTarget("");
  }

  return (
    <main className="site-shell">
      <Navbar />

      <section className="auth-section auth-section-extended">
        <div className="auth-box auth-box-extended">
          <div className="auth-header-block">
            <p className="auth-kicker">
              {screenMode === "access"
                ? "Criar login ou acesso"
                : "Esqueci minha senha"}
            </p>

            <h1>
              {screenMode === "access"
                ? "Entre com o método que preferir"
                : "Recupere seu acesso com código de verificação"}
            </h1>

            <p className="auth-helper-text">
              {screenMode === "access"
                ? "Você pode entrar com Google, Apple, email pessoal ou número de telefone."
                : "Informe seu email ou telefone e enviaremos um código de verificação para recuperar seu acesso."}
            </p>
          </div>

          <div className="auth-mode-switch">
            <button
              type="button"
              className={`auth-mode-tab ${
                screenMode === "access" ? "active" : ""
              }`}
              onClick={() => switchScreenMode("access")}
            >
              Criar login ou acesso
            </button>

            <button
              type="button"
              className={`auth-mode-tab ${
                screenMode === "forgot" ? "active" : ""
              }`}
              onClick={() => switchScreenMode("forgot")}
            >
              Esqueci minha senha
            </button>
          </div>

          <div className="auth-social-grid">
            <button
              type="button"
              className="auth-social-button"
              onClick={handleGoogleLogin}
            >
              <GoogleIcon />
              <span>Entrar com Google</span>
            </button>

            <button
              type="button"
              className="auth-social-button"
              onClick={handleAppleLogin}
            >
              <AppleIcon />
              <span>Entrar com Apple</span>
            </button>
          </div>

          <div className="auth-divider">
            <span>ou continue com código</span>
          </div>

          <div className="auth-channel-switch">
            <button
              type="button"
              className={`auth-channel-tab ${
                accessMode === "email" ? "active" : ""
              }`}
              onClick={() => switchAccessMode("email")}
            >
              Email pessoal
            </button>

            <button
              type="button"
              className={`auth-channel-tab ${
                accessMode === "phone" ? "active" : ""
              }`}
              onClick={() => switchAccessMode("phone")}
            >
              Número de telefone
            </button>
          </div>

          <form className="auth-form auth-form-extended" onSubmit={handleSendCode}>
            {accessMode === "email" ? (
              <input
                type="email"
                placeholder="Digite seu email pessoal"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
              />
            ) : (
              <input
                type="tel"
                placeholder="Digite seu telefone com DDI"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                autoComplete="tel"
              />
            )}

            <button type="submit" className="primary-cta" disabled={isSending}>
              {isSending
                ? "Enviando..."
                : screenMode === "forgot"
                ? "Enviar código de verificação"
                : "Receber código de acesso"}
            </button>
          </form>

          <form
            className="auth-form auth-form-extended auth-verify-form"
            onSubmit={handleVerifyCode}
          >
            <input
              type="text"
              placeholder="Digite o código recebido"
              value={verificationCode}
              onChange={(event) => setVerificationCode(event.target.value)}
              inputMode="numeric"
              autoComplete="one-time-code"
            />

            <button
              type="submit"
              className="secondary-cta"
              disabled={isVerifying}
            >
              {isVerifying ? "Verificando..." : "Confirmar código"}
            </button>
          </form>

          {feedback ? (
            <p className="auth-feedback success">{feedback}</p>
          ) : null}

          {error ? <p className="auth-feedback error">{error}</p> : null}
        </div>
      </section>
    </main>
  );
}