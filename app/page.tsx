import { Metadata } from "next";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Download } from "@/components/download";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Sonic 3 A.I.R. - Angel Island Revisited",
  description:
    "Experience Sonic 3 & Knuckles like never before with Sonic 3 A.I.R. (Angel Island Revisited). Download now for Windows, macOS, and Android.",
  openGraph: {
    title: "Sonic 3 A.I.R. - Angel Island Revisited",
    description:
      "Experience Sonic 3 & Knuckles like never before with Sonic 3 A.I.R.",
    images: [{ url: "https://example.com/sonic3air-og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Download />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
