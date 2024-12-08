// components/EssentialsSection.js
import Image from "next/image";

const categories = [
  {
    id: 1,
    title: "Men's",
    image: "/ess1.png",
  },
  {
    id: 2,
    title: "Women's",
    image: "/ess2.png",
  },
  {
    id: 3,
    title: "Kids'",
    image: "/ess3.png",
  },
];

const EssentialsSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">The Essentials</h2>

        {/* Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={category.image}
                alt={category.title}
                width={500}
                height={500}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EssentialsSection;
