import React, { useEffect, useState } from "react";

const BreakingNews = () => {
  const breakingNews = [
    {
      id: 1,
      title:
        "India achieves major AI breakthrough in 2026 transforming healthcare, education and industry.",
    },
    {
      id: 2,
      title:
        "Stock market hits record high as Sensex crosses new milestone amid strong global growth.",
    },
    {
      id: 3,
      title:
        "India enters Cricket World Cup semifinals after dominating victory in quarterfinal match.",
    },
    {
      id: 4,
      title:
        "New digital policy announced to boost startups, innovation and tech ecosystem in India.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev === breakingNews.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center p-6">

      {/* Long Rectangular Card */}
      <div className="w-full max-w-6xl bg-white border-l-8 border-red-600 shadow-xl rounded-xl overflow-hidden">

        {/* Header */}
        <div className="bg-red-600 text-white px-6 py-3 font-bold text-lg">
          🔴 Breaking News
        </div>

        {/* Sliding Area */}
        <div className="relative h-24 overflow-hidden bg-white">

          {breakingNews.map((news, i) => (
            <div
              key={news.id}
              className="absolute top-0 left-0 w-full h-full flex items-center px-6 transition-all duration-700"
              style={{
                transform: `translateX(${(i - index) * 100}%)`,
              }}
            >
              <h2 className="text-lg font-semibold text-black">
                📰 {news.title}
              </h2>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default BreakingNews;