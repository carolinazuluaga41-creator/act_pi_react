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
    <section className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Historial de Conversiones
      </h2>
      <ul className="space-y-2">
        {history.map((item, index) => (
          <li key={index} className="border-b py-2">
            {item.amount} {item.from} → {item.result} {item.to}
          </li>
        ))}
      </ul>
    </section>
  );
}
