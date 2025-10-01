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
    <section className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Convertir Divisas</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="number"
          placeholder="Cantidad"
          className="border p-2 rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        >
          {currencies.map((c) => (
            <option key={c.code} value={c.code}>
              {c.code} - {c.name}
            </option>
          ))}
        </select>

        <select
          className="border p-2 rounded"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        >
          {currencies.map((c) => (
            <option key={c.code} value={c.code}>
              {c.code} - {c.name}
            </option>
          ))}
        </select>

        <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Convertir
        </button>
      </form>

      {result !== null && (
        <p className="mt-4 text-lg font-semibold text-green-600">
          Resultado: {result.toFixed(2)} {to}
        </p>
      )}
    </section>
  );
}
