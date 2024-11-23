export function FAQ() {
  const faqs = [
    {
      question: "How do I install Sonic 3 A.I.R.?",
      answer:
        "Download the ZIP file, extract it, and run Sonic3AIR.exe. It's that simple!",
    },
    {
      question: "Is controller support available?",
      answer:
        "Yes, Sonic 3 A.I.R. supports various controller configurations for your gaming preference.",
    },
    {
      question: "Can I install mods?",
      answer:
        "Place downloaded mod files in the game's mod folder and select them at startup.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-10">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
