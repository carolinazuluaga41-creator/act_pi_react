"use client";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      Cookies.set("isLoggedIn", "true", { expires: 1 });
      Cookies.set("username", username);
      router.push("/");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
      <div className="backdrop-blur-md bg-white/20 border border-white/30 shadow-2xl rounded-2xl p-8 w-96 text-white">
        <h2 className="text-3xl font-bold text-center mb-6">🔐 Bienvenido</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-300"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-300"
          />
          <button
            type="submit"
            className="mt-2 py-3 rounded-lg font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-90 transition"
          >
            Ingresar
          </button>
        </form>
        <p className="text-center text-sm mt-4 text-gray-200">
          ¿No tienes cuenta?{" "}
          <a href="#" className="underline text-cyan-300 hover:text-white">
            Regístrate
          </a>
        </p>
      </div>
    </div>
  );
}
