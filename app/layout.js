import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Perfxt",
  description: "Perfxt - Landing Page",
  icons: {
    icon: "/images/home/fvicon.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Inter:wght@400;500&display=swap"
        />
      </head>
      <body>
        {children}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1914651325815360');fbq('track','PageView');`}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display:"none"}} src="https://www.facebook.com/tr?id=1914651325815360&ev=PageView&noscript=1" alt="" />
        </noscript>
      </body>
    </html>
  );
}
