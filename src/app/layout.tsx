import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Smart Green Shipping | Guaranteed Fuel Savings",
  description:
    "Smart Green Shipping is an award-winning collaborative, systems-design house. We develop technical, commercially viable, digitally enabled wind-powered solutions to accelerate shipping's green transition.",
  metadataBase: new URL("https://www.smartgreenshipping.com"),
  openGraph: {
    title: "Smart Green Shipping | Guaranteed Fuel Savings",
    description:
      "The only wind propulsion Provider able to guarantee performance.",
    url: "https://www.smartgreenshipping.com",
    siteName: "Smart Green Shipping",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${exo.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}