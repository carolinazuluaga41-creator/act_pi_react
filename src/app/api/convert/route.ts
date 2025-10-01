import { NextResponse } from "next/server";

// Tasas ficticias basadas en USD como referencia
const rates: Record<string, number> = {
  USD: 1,       // Dólar estadounidense
  EUR: 0.92,    // Euro
  GBP: 0.79,    // Libra esterlina
  JPY: 149.5,   // Yen japonés
  CNY: 7.1,     // Yuan chino
  AUD: 1.52,    // Dólar australiano
  CAD: 1.37,    // Dólar canadiense
  CHF: 0.91,    // Franco suizo
  HKD: 7.82,    // Dólar de Hong Kong
  SGD: 1.36,    // Dólar de Singapur
  COP: 4100,    // Peso colombiano
};

export async function POST(request: Request) {
  try {
    const { amount, from, to } = await request.json();

    if (!amount || !from || !to) {
      return NextResponse.json({ error: "Faltan parámetros" }, { status: 400 });
    }

    if (!rates[from] || !rates[to]) {
      return NextResponse.json({ error: "Moneda no soportada" }, { status: 400 });
    }

    // Convertir primero a USD y luego a la moneda destino
    const usdValue = Number(amount) / rates[from];
    const converted = usdValue * rates[to];

    // Redondear a 2 decimales
    const roundedResult = Number(converted.toFixed(2));

    // Crear objeto de conversión
    const conversion = {
      from,
      to,
      amount: Number(amount),
      result: roundedResult,
      date: new Date().toISOString(), // guardamos fecha y hora
    };

    // Guardar en historial
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/history`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(conversion),
    });

    return NextResponse.json(conversion);
  } catch (err) {
    console.error("Error en la conversión:", err);
    return NextResponse.json({ error: "Error en la conversión" }, { status: 500 });
  }
}
