"use client";

import { useEffect, useState } from "react";

export default function HistoryPage() {
  const [history, setHistory] = useState<
    { from: string; to: string; amount: number; result: number }[]
  >([]);

  useEffect(() => {
    fetch("/api/history")
      .then((res) => res.json())
      .then((data) => setHistory(data));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-blue-900 to-blue-700">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[url('/bg-money.png')] bg-cover bg-center opacity-10" />

      {/* Caja principal */}
      <section className="relative z-10 w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-extrabold text-blue-700 mb-6 text-center">
          Historial de Conversiones
        </h2>

        {history.length === 0 ? (
          <p className="text-gray-500 italic text-center">
            No hay conversiones registradas todavía...
          </p>
        ) : (
          <ul className="space-y-3">
            {history.map((item, index) => (
              <li
                key={index}
                className="p-4 border rounded-lg shadow-sm flex justify-between items-center"
              >
                <span className="text-gray-700 font-medium">
                  {item.amount} {item.from} → {item.result} {item.to}
                </span>
                <span className="text-sm text-gray-500">
                  #{index + 1}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
