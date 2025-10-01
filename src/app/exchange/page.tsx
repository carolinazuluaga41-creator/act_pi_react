"use client";
import { useState } from "react";

const currencies = [
  { code: "USD", name: "Dólar Estadounidense" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "Libra Esterlina" },
  { code: "JPY", name: "Yen Japonés" },
  { code: "CNY", name: "Yuan Chino" },
  { code: "AUD", name: "Dólar Australiano" },
  { code: "CAD", name: "Dólar Canadiense" },
  { code: "CHF", name: "Franco Suizo" },
  { code: "HKD", name: "Dólar de Hong Kong" },
  { code: "SGD", name: "Dólar de Singapur" },
  { code: "COP", name: "Peso Colombiano" },
];

export default function ExchangePage() {
  const [amount, setAmount] = useState<string>("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("COP");
  const [result, setResult] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/convert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: Number(amount), from, to }),
    });

    const data = await res.json();
    if (data.result) setResult(data.result);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-blue-700 relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[url('/bg-money.png')] bg-cover bg-center opacity-10" />

      {/* Caja principal */}
      <section className="relative z-10 w-full max-w-lg bg-white shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-extrabold text-blue-700 mb-6 text-center">
          Convertir Divisas
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="number"
            placeholder="Cantidad"
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-blue-700 placeholder-blue-400"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <select
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-blue-700"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          >
            {currencies.map((c) => (
              <option key={c.code} value={c.code} className="text-blue-700">
                {c.code} - {c.name}
              </option>
            ))}
          </select>

          <select
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-blue-700"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          >
            {currencies.map((c) => (
              <option key={c.code} value={c.code} className="text-blue-700">
                {c.code} - {c.name}
              </option>
            ))}
          </select>

          <button className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Convertir
          </button>
        </form>

        {result !== null && (
          <p className="mt-6 text-xl font-bold text-center text-green-600">
            Resultado: {result.toFixed(2)} {to}
          </p>
        )}
      </section>
    </div>
  );
}
