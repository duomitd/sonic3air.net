import { ChevronRight } from "lucide-react";

export function Features() {
  const features = [
    {
      title: "Enhanced Graphics",
      description:
        "Experience the classic zones with improved visuals and smooth animations.",
    },
    {
      title: "Mod Support",
      description:
        "Customize your game with a wide range of community-created mods.",
    },
    {
      title: "Multiplayer",
      description: "Enjoy local and online multiplayer modes with friends.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 inline-flex items-center"
              >
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
