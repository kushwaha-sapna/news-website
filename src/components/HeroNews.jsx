import React from "react";
import { Link } from "react-router-dom";

const HeroNews = ({ news }) => {
  if (!news) return null;

  return (
    <section className="relative h-[500px] rounded-xl overflow-hidden mb-10">

      <img
        src={news.image}
        alt={news.title}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50 flex items-end">

        <div className="p-8 text-white">

          <span className="bg-red-600 px-3 py-1 rounded">
            Breaking News
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            {news.title}
          </h1>

          <p className="mt-4 max-w-2xl">
            {news.description}
          </p>

          <Link
            to={`/news/${news._id}`}
            className="inline-block mt-6 bg-red-600 px-6 py-3 rounded-lg"
          >
            Read Full Story
          </Link>

        </div>

      </div>

    </section>
  );
};

export default HeroNews;