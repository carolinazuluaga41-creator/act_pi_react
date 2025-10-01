import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "diviXpress",
  description: "Conversor de divisas en tiempo real",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
