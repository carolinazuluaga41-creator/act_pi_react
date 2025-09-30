import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-4 bg-blue-100 p-3 text-blue-800 font-semibold">
      <Link href="/">Inicio</Link>
      <Link href="/exchange">Convertir</Link>
      <Link href="/history">Historial</Link>
      <Link href="/about">Acerca de</Link>
    </nav>
  );
}
