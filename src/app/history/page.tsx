export default function HistoryPage() {
  const mockHistory = [
    { from: "USD", to: "COP", amount: 100, result: 400000 },
    { from: "EUR", to: "USD", amount: 50, result: 55 },
  ];

  return (
    <section className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Historial de Conversiones</h2>
      <ul className="space-y-2">
        {mockHistory.map((item, index) => (
          <li key={index} className="border-b py-2">
            {item.amount} {item.from} → {item.result} {item.to}
          </li>
        ))}
      </ul>
    </section>
  );
}
