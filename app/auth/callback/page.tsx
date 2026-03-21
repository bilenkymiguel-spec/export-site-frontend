"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type UserSaved = {
  id: number;
  email: string;
  name: string;
  createdAt: string;
};

export default function CallbackPage() {
  const [message, setMessage] = useState("Processando login...");

  useEffect(() => {
    const handleLogin = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();

        if (error) {
          setMessage("Erro ao obter sessão");
          return;
        }

        const user = data.session?.user;

        if (!user || !user.email) {
          setMessage("Usuário não encontrado");
          return;
        }

        const email = user.email;
        const name = user.user_metadata?.full_name || "";

        const response = await fetch("http://localhost:3001/products/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, name }),
        });

        if (!response.ok) {
          throw new Error("Erro no backend");
        }

        const savedUser: UserSaved = await response.json();

        localStorage.setItem("user", JSON.stringify(savedUser));

        setMessage("Login concluído!");

        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      } catch (err) {
        console.error(err);
        setMessage("Erro no login");
      }
    };

    handleLogin();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>{message}</h1>
    </div>
  );
}