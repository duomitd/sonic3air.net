import Link from "next/link";

export function Download() {
  return (
    <section
      id="download"
      className="py-20 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">
          Download Sonic 3 A.I.R.
        </h2>
        <p className="text-xl mb-12 text-gray-700 max-w-2xl mx-auto">
          Get the latest version and start your adventure today. Available for
          Windows, macOS, and Android.
        </p>
        <Link
          href="https://sonic3air.org"
          className="bg-blue-600 text-white py-4 px-10 rounded-full text-xl font-semibold 
                         hover:bg-blue-700 transition duration-300 inline-block"
        >
          Download v22.09.10.0
        </Link>
        <p className="mt-6 text-sm text-gray-600">
          Requires a compatible Sonic 3 & Knuckles ROM
        </p>
      </div>
    </section>
  );
}
