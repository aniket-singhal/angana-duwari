import type { Metadata } from "next";
import { Inter, Merriweather, Noto_Serif_Devanagari } from "next/font/google";
import Navbar from "@/components/Navbar"; // Import Navbar
import Footer from "@/components/Footer"; // Import Footer
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

const notoSerifDevanagari = Noto_Serif_Devanagari({
  weight: ["400", "700"],
  subsets: ["devanagari"],
  variable: "--font-hindi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Angana Duwari | Chhattisgarh Knowledge Portal",
  description: "The authoritative encyclopedia for Chhattisgarh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable} ${notoSerifDevanagari.variable} antialiased bg-stone-50 text-stone-900 flex flex-col min-h-screen`}>
        
        {/* The Navbar sits at the top of every page */}
        <Navbar />
        
        {/* The Page Content grows to fill space */}
        <main className="flex flex-col gap-2 mb-8">
          {children}
        </main>

        {/* The Footer sits at the bottom of every page */}
        <Footer />
        
      </body>
    </html>
  );
}