import type { Metadata, Viewport } from "next";
import { business } from "@/lib/business";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: "7/24 Mobil Lastikçi İstanbul | Kahraman Oto Lastik",
    template: "%s | Kahraman Oto Lastik",
  },
  description:
    "İstanbul'un 39 ilçesinde 7/24 mobil lastikçi. Binek, SUV ve ağır vasıta lastik değişimi ve tamiri için Kahraman Oto Lastik'i arayın.",
  applicationName: "Kahraman Oto Lastik",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: business.url,
    siteName: business.name,
    title: "7/24 Mobil Lastikçi İstanbul | Kahraman Oto Lastik",
    description: "İstanbul'un 39 ilçesinde binek, SUV ve ağır vasıta araçlara 7/24 mobil lastik desteği.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kahraman Oto Lastik",
    description: "İstanbul'un 39 ilçesinde binek, SUV ve ağır vasıta araçlar için 7/24 mobil lastik hizmeti.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f2ea",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
