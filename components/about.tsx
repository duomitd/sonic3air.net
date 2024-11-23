import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          About Sonic 3 A.I.R.
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Sonic 3 A.I.R. (Angel Island Revisited) is an open-source remake of
          the classic Sonic 3 & Knuckles, bringing modern enhancements to this
          beloved game. Available for Windows, macOS, and Android, it offers a
          fresh take on a timeless adventure.
        </p>
        <div className="flex justify-center">
          <Image
            src="/placeholder.svg"
            alt="Sonic 3 A.I.R. Gameplay"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
