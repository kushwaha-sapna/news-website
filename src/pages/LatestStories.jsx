import React from "react";

const stories = [
  {
    id: 1,
    title: "India launches next-gen AI news system",
    desc: "Government introduces AI-powered real-time news verification across media platforms.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    tag: "TECH",
  },
  {
    id: 2,
    title: "Stock market hits record high in 2026",
    desc: "Sensex and Nifty reach all-time high driven by IT and banking stocks.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    tag: "BUSINESS",
  },
  {
    id: 3,
    title: "Space mission discovers new exoplanet",
    desc: "NASA confirms Earth-like planet located 120 light years away.",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80",
    tag: "SCIENCE",
  },
  {
    id: 4,
    title: "Cricket World Cup updates",
    desc: "India enters semi-finals after a thrilling match against Australia.",
    image:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80",
    tag: "SPORTS",
  },
  {
    id: 5,
    title: "New metro line opens in Uttar Pradesh",
    desc: "Improved connectivity boosts travel between major cities.",
    image:
      "https://images.unsplash.com/photo-1520975922323-4f4f9f3f4f3f?auto=format&fit=crop&w=800&q=80",
    tag: "INDIA",
  },
  {
    id: 6,
    title: "Tech companies hiring surge in India",
    desc: "IT sector sees massive recruitment growth in 2026.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    tag: "CAREER",
  },
];

const LatestStories = () => {
  const featured = stories[0];
  const others = stories.slice(1);

  return (
    <div className="bg-gray-100 min-h-screen px-4 md:px-10 py-10">

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 border-l-4 border-red-600 pl-3">
        Latest Stories
      </h1>

      {/* Featured Story */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row mb-10 hover:shadow-2xl transition duration-300">
        
        <img
          src={featured.image}
          alt={featured.title}
          className="w-full md:w-1/2 h-72 object-cover"
          loading="lazy"
        />

        <div className="p-6 flex flex-col justify-center">
          <span className="text-xs bg-red-600 text-white px-3 py-1 rounded-full w-fit">
            {featured.tag}
          </span>

          <h2 className="text-2xl font-bold mt-3 text-gray-800">
            {featured.title}
          </h2>

          <p className="text-gray-600 mt-2">{featured.desc}</p>

          <button className="mt-5 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg w-fit transition">
            Read More
          </button>
        </div>
      </div>

      {/* Grid Stories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {others.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-44 w-full object-cover"
              loading="lazy"
            />

            <div className="p-4">
              <span className="text-xs bg-black text-white px-2 py-1 rounded">
                {item.tag}
              </span>

              <h3 className="font-semibold mt-2 text-gray-800">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {item.desc}
              </p>

              <button className="mt-3 text-red-600 font-semibold hover:underline">
                Read More →
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default LatestStories;






