











import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ item }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">

      <img
        src={item.image}
        alt={item.title}
        className="h-40 w-full object-cover"
      />

      <div className="p-3">

        <h2 className="font-bold text-lg">{item.title}</h2>

        <p className="text-sm text-gray-600 mt-1">
          {item.description}
        </p>

        {/* ✅ FIXED ROUTE */}
        <Link to={`/news/details/${item.id}`}>
          <button className="mt-3 text-blue-600 font-medium">
            Read More →
          </button>
        </Link>

      </div>
    </div>
  );
};

export default NewsCard;








