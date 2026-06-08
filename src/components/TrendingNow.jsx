import React from "react";

const TrendingNow = () => {
  const trendingNews = [
    { id: 1, title: "India defeats Afghanistan in record Test victory", category: "Sports" },
    { id: 2, title: "Stock market falls amid global tension", category: "Business" },
    { id: 3, title: "Monsoon advances across multiple states", category: "Weather" },
    { id: 4, title: "New AI summit highlights India's tech growth", category: "Technology" },
    { id: 5, title: "Gold ETF inflows hit record high in India", category: "Finance" },
  ];

  return (
    <div className="w-full mt-6 bg-gradient-to-r from-white via-gray-50 to-white border border-gray-200 shadow-lg overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 bg-red-600 text-white">
        <h2 className="text-lg md:text-xl font-bold tracking-wide flex items-center gap-2">
          🔥 Trending Now
        </h2>
        <span className="text-xs md:text-sm bg-white text-red-600 px-3 py-1 rounded-full font-semibold shadow">
          LIVE
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {trendingNews.map((item) => (
          <div
            key={item.id}
            className="group flex items-center justify-between p-3 rounded-xl border border-gray-100 bg-white hover:shadow-md hover:border-red-200 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col">
              <p className="text-sm md:text-base font-medium text-gray-800 group-hover:text-red-600 transition line-clamp-1">
                {item.title}
              </p>
              <span className="text-xs text-gray-400 mt-1">
                Trending update
              </span>
            </div>

            <span className="text-xs md:text-sm px-3 py-1 rounded-full bg-red-50 text-red-600 font-medium border border-red-100">
              {item.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNow;