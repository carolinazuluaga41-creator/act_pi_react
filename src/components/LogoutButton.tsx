"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    // ❌ Eliminar cookie de login
    Cookies.remove("isLoggedIn");
    Cookies.remove("username");

    // 🔄 Redirigir al login
    router.push("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition"
    >
      Cerrar sesión
    </button>
  );
}
