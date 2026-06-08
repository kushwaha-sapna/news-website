import React from "react";
import { useParams } from "react-router-dom";
import { localNewsData } from "../data/localNewsData";

const NewsDetails = () => {
  const { id } = useParams();

  const allNews = [
    ...localNewsData.area,
    ...localNewsData.crime,
    ...localNewsData.traffic,
    ...localNewsData.live,
    ...localNewsData.reporters,
  ];

  const article = allNews.find(
    (news) => news._id === Number(id)
  );

  if (!article) {
    return (
      <div className="text-center py-20 text-xl">
        News Not Found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">

      <img
        src={article.image}
        alt={article.title}
        className="w-full h-[500px] object-cover rounded-xl"
      />

      <div className="mt-8">

        <span className="bg-red-600 text-white px-4 py-1 rounded">
          {article.tag}
        </span>

        <h1 className="text-4xl font-bold mt-4">
          {article.title}
        </h1>

        <div className="flex gap-6 mt-4 text-gray-500">
          <span>📍 {article.area}</span>
          <span>🕒 {article.time}</span>
          <span>✍️ {article.reporter}</span>
        </div>

        <div className="mt-8 text-lg leading-9 whitespace-pre-line text-gray-700">
          {article.content}
        </div>

        {article.youtubeLink && (
          <a
            href={article.youtubeLink}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-8 bg-red-600 text-white px-6 py-3 rounded-lg"
          >
            ▶ Watch Full Video Report
          </a>
        )}

      </div>
    </div>
  );
};

export default NewsDetails;