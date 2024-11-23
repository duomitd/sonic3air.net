import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
      <GoogleAnalytics gaId="G-YNRP49C67N" />
    </html>
  );
}
