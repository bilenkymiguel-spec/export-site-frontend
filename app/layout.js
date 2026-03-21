import { UserProvider } from "../context/UserContext";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}