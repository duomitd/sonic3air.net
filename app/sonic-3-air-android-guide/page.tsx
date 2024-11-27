import { getMdxContent } from "@/lib/mdx";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";

export const metadata: Metadata = {
  title: "How to Install Sonic 3 A.I.R. on Android: Step-by-Step Guide",
  description:
    "Learn how to install Sonic 3 A.I.R. on your Android device with this comprehensive guide. Find out how to get the Sonic 3 & Knuckles ROM, install the APK, and start playing the game.",
};

export default function AndroidGuidPage() {
  const { content } = getMdxContent("/mdx/en/sonic-3-air-android-guide.mdx");

  return (
    <div className="container bg-white mx-auto">
      <main className="py-12">
        <div
          style={{ maxWidth: "100%", borderRadius: "0.5rem" }}
          className="prose lg:prose-xl prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg bg-white p-4 lg:p-8 w-full "
        >
          <MDXRemote source={content} />
        </div>
      </main>
    </div>
  );
}
