"use client";

import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const logged = Cookies.get("isLoggedIn") === "true";
    setIsLoggedIn(logged);

    if (!logged && pathname !== "/login") {
      router.push("/login");
    }
  }, [pathname, router]);

  if (isLoggedIn === null) {
    return <div className="flex items-center justify-center h-screen">Cargando...</div>;
  }

  return (
    <div
      className="relative flex flex-col min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/5 -z-10"></div>

      {/* Solo mostrar header/navbar/footer si está logueado */}
      {isLoggedIn && (
        <>
          <Header />
          <Navbar />
        </>
      )}

      {/* Contenido principal */}
      <main className="flex-grow container mx-auto p-4 relative z-10">
        {children}
      </main>

      {isLoggedIn && <Footer />}
    </div>
  );
}
