import { NextResponse } from "next/server";

let history: { from: string; to: string; amount: number; result: number }[] = [];

// GET → obtener historial
export async function GET() {
  return NextResponse.json(history);
}

// POST → guardar nueva conversión en el historial
export async function POST(req: Request) {
  const body = await req.json();
  // Insertar al inicio del array (lo más reciente primero)
  history.unshift(body);
  return NextResponse.json({ message: "Guardado en historial", item: body });
}
