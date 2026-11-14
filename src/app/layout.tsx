import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_Bengali, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const bengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-bengali",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "GK Pharma (Unani) Limited | Unani Medicine Manufacturer in Bangladesh",
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "GK Pharma",
    "GK Pharma Unani Limited",
    "Unani medicine Bangladesh",
    "Unani manufacturer Gazipur",
    "herbal medicine Bangladesh",
    "Unani products Tongi",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "health",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: "/",
    siteName: SITE.name,
    title: "GK Pharma (Unani) Limited | Unani Medicine Manufacturer in Bangladesh",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "GK Pharma (Unani) Limited",
    description: SITE.description,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#008348",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} ${bengali.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="flex min-h-full flex-col bg-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex flex-1 flex-col outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
