export default function ExchangePage() {
  return (
    <section className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Convertir Divisas</h2>
      <form className="flex flex-col gap-4">
        <input
          type="number"
          placeholder="Cantidad"
          className="border p-2 rounded"
        />
        <select className="border p-2 rounded">
          <option>USD - Dólar Estadounidense</option>
          <option>EUR - Euro</option>
          <option>COP - Peso Colombiano</option>
        </select>
        <select className="border p-2 rounded">
          <option>USD - Dólar Estadounidense</option>
          <option>EUR - Euro</option>
          <option>COP - Peso Colombiano</option>
        </select>
        <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Convertir
        </button>
      </form>
    </section>
  );
}
