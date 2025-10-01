"use client";

import Link from "next/link";
import LogoutButton from "@/components/LogoutButton";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Revisar cookies al montar
    setIsLoggedIn(Cookies.get("isLoggedIn") === "true");

    // Revisar periódicamente (pequeño hack si solo usas cookies)
    const interval = setInterval(() => {
      setIsLoggedIn(Cookies.get("isLoggedIn") === "true");
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="flex justify-between items-center bg-blue-100 p-3 text-blue-800 font-semibold shadow-md">
      {/* Links a la izquierda */}
      <div className="flex gap-4">
        <Link href="/">Inicio</Link>
        <Link href="/exchange">Convertir</Link>
        <Link href="/history">Historial</Link>
        <Link href="/about">Acerca de</Link>
      </div>

      {/* Botón cerrar sesión o login */}
      <div>
        {isLoggedIn ? (
          <LogoutButton />
        ) : (
          <Link
            href="/login"
            className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
