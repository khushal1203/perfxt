import "./globals.css";

export const metadata = {
  title: "Perfxt",
  description: "Perfxt - Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning style={{ scrollBehavior: "smooth" }}>
      <body>{children}</body>
    </html>
  );
}
