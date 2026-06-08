import React from "react";
import NewsCard from "./NewsCard";

const RelatedNews = ({
  relatedNews,
}) => {
  return (
    <section className="mt-12">

      <h2 className="text-3xl font-bold mb-6">
        Related News
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {relatedNews.map((item) => (
          <NewsCard
            key={item._id}
            news={item}
          />
        ))}

      </div>

    </section>
  );
};

export default RelatedNews;