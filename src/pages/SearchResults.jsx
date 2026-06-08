// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// import NewsCard from "../components/NewsCard";
// import { searchNews } from "../services/newsApi";

// const SearchResults = () => {
//   const query = new URLSearchParams(useLocation().search).get("q");

//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await searchNews(query);
//         setNews(res.data);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [query]);

//   if (loading)
//     return <h2>Loading...</h2>;

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">

//       <h1 className="text-2xl font-bold mb-6">
//         Search Results: {query}
//       </h1>

//       <div className="grid md:grid-cols-3 gap-6">

//         {news.map((item) => (
//           <NewsCard
//             key={item._id}
//             news={item}
//           />
//         ))}

//       </div>

//     </div>
//   );
// };

// export default SearchResults;






import React from "react";
import { useLocation } from "react-router-dom";

import NewsCard from "../components/NewsCard";
import { dummyNews } from "../data/dummyNews";

const SearchResults = () => {
  const query =
    new URLSearchParams(useLocation().search).get("q") || "";

  const filteredNews = dummyNews.filter(
    (item) =>
      item.title?.toLowerCase().includes(query.toLowerCase()) ||
      item.description?.toLowerCase().includes(query.toLowerCase()) ||
      item.category?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">
        Search Results: {query}
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {filteredNews.length > 0 ? (
          filteredNews.map((item) => (
            <NewsCard
              key={item._id}
              news={item}
            />
          ))
        ) : (
          <p className="text-gray-500">
            No news found for "{query}"
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;