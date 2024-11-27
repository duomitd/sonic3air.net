import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Download } from "@/components/download";
import { FAQ } from "@/components/faq";

export const metadata: Metadata = {
  title: "Sonic 3 A.I.R. - Angel Island Revisited",
  description:
    "Experience Sonic 3 & Knuckles like never before with Sonic 3 A.I.R. (Angel Island Revisited). Download now for Windows, macOS, and Android.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <Features />
        <Download />
        <FAQ />
      </main>
    </div>
  );
}
