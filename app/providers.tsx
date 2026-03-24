"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type UserRole = "guest" | "customer" | "admin";

type AuthUser = {
  name?: string;
  email?: string;
  role: UserRole;
};

type AuthContextValue = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (userData: Partial<AuthUser>) => void;
  logout: () => void;
};

type CartItem = {
  id: number | string;
  name: string;
  price: number;
  category?: string;
  quantity: number;
  image?: string;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (id: number | string) => void;
  updateQuantity: (id: number | string, quantity: number) => void;
  clearCart: () => void;
};

const AUTH_STORAGE_KEY = "export-site-auth";
const CART_STORAGE_KEY = "export-site-cart";

const AuthContext = createContext<AuthContextValue | undefined>(undefined);
const CartContext = createContext<CartContextValue | undefined>(undefined);

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = window.localStorage.getItem(AUTH_STORAGE_KEY);

    if (!saved) return;

    try {
      const parsed = JSON.parse(saved) as AuthUser;
      setUser(parsed);
    } catch {
      window.localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  }, []);

  const login = useCallback((userData: Partial<AuthUser>) => {
    const normalizedUser: AuthUser = {
      name: userData.name ?? "",
      email: userData.email ?? "",
      role: userData.role ?? "customer",
    };

    setUser(normalizedUser);
    window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(normalizedUser));
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    window.localStorage.removeItem(AUTH_STORAGE_KEY);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      isAdmin: user?.role === "admin",
      login,
      logout,
    }),
    [user, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = window.localStorage.getItem(CART_STORAGE_KEY);

    if (!saved) return;

    try {
      const parsed = JSON.parse(saved) as CartItem[];
      setItems(Array.isArray(parsed) ? parsed : []);
    } catch {
      window.localStorage.removeItem(CART_STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = useCallback(
    (item: Omit<CartItem, "quantity">, quantity = 1) => {
      setItems((currentItems) => {
        const existing = currentItems.find(
          (currentItem) => String(currentItem.id) === String(item.id)
        );

        if (existing) {
          return currentItems.map((currentItem) =>
            String(currentItem.id) === String(item.id)
              ? {
                  ...currentItem,
                  quantity: currentItem.quantity + quantity,
                }
              : currentItem
          );
        }

        return [...currentItems, { ...item, quantity }];
      });
    },
    []
  );

  const removeItem = useCallback((id: number | string) => {
    setItems((currentItems) =>
      currentItems.filter((item) => String(item.id) !== String(id))
    );
  }, []);

  const updateQuantity = useCallback((id: number | string, quantity: number) => {
    setItems((currentItems) =>
      currentItems
        .map((item) =>
          String(item.id) === String(id)
            ? { ...item, quantity: Math.max(1, quantity) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const itemCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items]
  );

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      itemCount,
      subtotal,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    }),
    [items, itemCount, subtotal, addItem, removeItem, updateQuantity, clearCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  );
}

export default Providers;

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser usado dentro de <Providers />");
  }

  return context;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart deve ser usado dentro de <Providers />");
  }

  return context;
}