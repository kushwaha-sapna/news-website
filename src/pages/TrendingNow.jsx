import React from "react";

const trendingNews = [
  {
    id: 1,
    title: "India launches new AI mission for education sector",
    category: "Technology",
    time: "2h ago",
  },
  {
    id: 2,
    title: "Stock market hits record high amid global recovery",
    category: "Business",
    time: "4h ago",
  },
  {
    id: 3,
    title: "Cricket World Cup: India qualifies for finals",
    category: "Sports",
    time: "6h ago",
  },
  {
    id: 4,
    title: "New electric car breaks 1000km range barrier",
    category: "Automobile",
    time: "1d ago",
  },
  {
    id: 5,
    title: "Big tech companies announce new hiring spree",
    category: "Jobs",
    time: "3h ago",
  },
  {
    id: 6,
    title: "Climate change report shows urgent warning",
    category: "Environment",
    time: "5h ago",
  },
];

const TrendingNow = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 md:px-12">

      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-red-600">
          🔥 Trending Now
        </h1>
        <p className="text-gray-600 mt-2">
          Latest trending headlines happening right now
        </p>
      </div>

      {/* Top Trending Banner */}
      <div className="max-w-6xl mx-auto bg-red-600 text-white rounded-xl p-6 mb-8 shadow-lg">
        <h2 className="text-xl md:text-2xl font-semibold">
          Top Trending Story
        </h2>
        <p className="mt-2 text-sm md:text-base">
          India AI Mission becomes global spotlight as government pushes digital transformation in education and research.
        </p>
      </div>

      {/* Trending Grid */}
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {trendingNews.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-5 border-l-4 border-red-500"
          >
            {/* Category */}
            <span className="text-xs font-semibold text-red-500 uppercase tracking-wide">
              {item.category}
            </span>

            {/* Title */}
            <h3 className="mt-2 text-lg font-bold text-gray-800 leading-snug">
              {item.title}
            </h3>

            {/* Time */}
            <p className="mt-3 text-sm text-gray-500">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNow;