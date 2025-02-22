import { Noise } from "@/components/ui/noise";
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
        <body className='antialiased'>
          <Analytics />
          <Noise></Noise>
          {children}
        </body>
      </html>
    </>
  );
}
