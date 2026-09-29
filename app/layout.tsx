import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "El Puerquito Caleruno | Lechona",
  description:
    "Lechonas completas y cojines con mucha carne y poca grasa. Bogotá - Barrio Villas de Granada, La Calera, Sopó y Guasca.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}