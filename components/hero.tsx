import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto text-center">
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Sonic 3 A.I.R.
        </h1>
        <p className="text-xl mb-12 text-gray-700 max-w-2xl mx-auto">
          Experience Angel Island Revisited. A modern remake of the classic,
          reimagined for today's gamers.
        </p>
        <Link
          href="#download"
          className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold 
                         hover:bg-blue-700 transition duration-300 inline-block"
        >
          Download Now
        </Link>
        <div className="mt-20">
          <Image
            src="/placeholder.svg"
            alt="Sonic 3 A.I.R. Gameplay"
            width={1200}
            height={675}
            className="rounded-lg shadow-2xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
