"use client";

import { ReactNode } from "react";
import { CartProvider } from "../context/CartContext";

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return <CartProvider>{children}</CartProvider>;
}