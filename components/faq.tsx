import { getMdxContent } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";

export function FAQ() {
  const { content } = getMdxContent(`/mdx/en/faq.mdx`);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Frequently Asked Questions
        </h2>
        <div
          style={{ maxWidth: "100%", borderRadius: "0.5rem" }}
          className="prose lg:prose-xl prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg bg-white p-4 lg:p-8 w-full "
        >
          <MDXRemote source={content} />
        </div>
      </div>
    </section>
  );
}
