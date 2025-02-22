import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Noise } from "@/components/ui/Noise";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "HexVPN",
  description: "Free and fast VPN service, that won't be blocked in Russia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang='en'>
        <body className='min-h-[100dvh] antialiased'>
          <Header />
          <Analytics />
          <Noise></Noise>
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
