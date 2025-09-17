import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PixelAr - Desarrollo Web Profesional para Negocios Argentinos",
  description: "Desarrollo web profesional para tu negocio local. 5 años de experiencia corporativa, precios de freelancer argentino. Páginas web, e-commerce y más.",
  keywords: "desarrollo web, diseño web, e-commerce, páginas web, Argentina, freelancer, negocio local",
  authors: [{ name: "Joaquín Lasalde - PixelAr" }],
  creator: "PixelAr",
  publisher: "PixelAr",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://pixelar.com.ar"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PixelAr - Desarrollo Web Profesional para Negocios Argentinos",
    description: "Desarrollo web profesional para tu negocio local. 5 años de experiencia corporativa, precios de freelancer argentino.",
    url: "https://pixelar.com.ar",
    siteName: "PixelAr",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PixelAr - Desarrollo Web Profesional",
    description: "Desarrollo web profesional para negocios argentinos",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
