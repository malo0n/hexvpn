import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import { Noise } from "@/components/ui/Noise";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import Script from "next/script";
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
          <Script
            id='yandex-metrica'
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: `
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(100223317, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
<noscript><div><img src="https://mc.yandex.ru/watch/100223317" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
          `,
            }}
          />
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
