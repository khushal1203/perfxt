import "./globals.css";

export const metadata = {
  title: "Perfxt",
  description: "Perfxt - Landing Page",
  icons: {
    icon: "/images/home/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600&family=Inter:wght@400;500&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600&family=Inter:wght@400;500&display=swap"
          media="print"
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600&family=Inter:wght@400;500&display=swap"
          />
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
