import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://el-puerquito-caleruno.pages.dev";
const siteName = "El Puerquito Caleruno";
const description =
  "Lechonas completas y cojines con mucha carne y poca grasa. Pedidos en Villas de Granada, Bogotá, La Calera, Sopó y Guasca.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Lechona en Bogotá y La Calera`,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "lechona",
    "lechona en Bogotá",
    "lechona Villas de Granada",
    "lechona La Calera",
    "lechona Sopó",
    "lechona Guasca",
    "lechona para eventos",
    "cojín de lechona",
    "El Puerquito Caleruno",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    siteName,
    title: `${siteName} | Mucha carne. Poca grasa. Mucho por compartir.`,
    description,
    images: [
      {
        url: "/images/hero-lechona.jpg",
        width: 1375,
        height: 1144,
        alt: "Lechona de El Puerquito Caleruno",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Lechona en Bogotá y La Calera`,
    description,
    images: ["/images/hero-lechona.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description,
  inLanguage: "es-CO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
