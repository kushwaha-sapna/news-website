// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// import NewsCard from "../components/NewsCard";
// import { getCategoryNews } from "../services/newsApi";

// const CategoryPage = () => {
//   const { category } = useParams();

//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await getCategoryNews(category);
//         setNews(res.data);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [category]);

//   if (loading)
//     return <h2>Loading...</h2>;

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">

//       <h1 className="text-3xl font-bold mb-6 capitalize">
//         {category} News
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

// export default CategoryPage;

import React from "react";
import { useParams } from "react-router-dom";

import NewsCard from "../components/NewsCard";
import { dummyNews } from "../data/dummyNews";

const CategoryPage = () => {
  const { category } = useParams();

  const filteredNews = dummyNews.filter(
    (item) =>
      item.category?.toLowerCase() === category?.toLowerCase()
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {category} News
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
            No news available in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;