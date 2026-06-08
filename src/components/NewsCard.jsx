// import React from "react";

// const NewsCard = ({ item }) => {
//   return (
//     <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300">

//       <div className="md:flex">

//         {/* IMAGE */}
//         <div className="md:w-2/5 relative">
//           <img
//             src={item.image}
//             alt={item.title}
//             className="w-full h-64 md:h-full object-cover"
//           />

//           <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">
//             {item.tag || "LOCAL"}
//           </span>

//           {item.time === "LIVE" && (
//             <span className="absolute top-3 right-3 bg-black text-white text-xs px-3 py-1 rounded animate-pulse">
//               🔴 LIVE
//             </span>
//           )}
//         </div>

//         {/* CONTENT */}
//         <div className="md:w-3/5 p-6 flex flex-col justify-between">

//           <div>
//             <h2 className="text-2xl font-extrabold text-gray-900 leading-tight hover:text-red-600 cursor-pointer transition">
//               {item.title}
//             </h2>

//             <p className="mt-4 text-gray-600 leading-relaxed">
//               {item.summary}
//             </p>

//             <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
//               <span>📍 {item.area}</span>
//               <span>🕒 {item.time}</span>

//               {item.reporter && (
//                 <span className="font-semibold text-red-600">
//                   By {item.reporter}
//                 </span>
//               )}
//             </div>
//           </div>

//           <div className="flex items-center gap-3 mt-6">

//             <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-medium">
//               Read Full Story →
//             </button>

//             {item.youtubeLink && (
//               <a
//                 href={item.youtubeLink}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="bg-black hover:bg-gray-800 text-white px-5 py-2 rounded-lg font-medium"
//               >
//                 ▶ Watch Report
//               </a>
//             )}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsCard;



import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ item }) => {
  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

      <div className="md:flex">

        {/* IMAGE */}
        <div className="md:w-2/5 relative overflow-hidden">
          <img
            src={item.image || "/news-placeholder.jpg"}
            alt={item.title}
            className="w-full h-64 md:h-full object-cover hover:scale-105 transition duration-500"
          />

          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full shadow-lg">
            {item.tag || "LOCAL"}
          </span>

          {item.time === "LIVE" && (
            <span className="absolute top-3 right-3 bg-black text-white text-xs px-3 py-1 rounded-full animate-pulse">
              🔴 LIVE
            </span>
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        {/* CONTENT */}
        <div className="md:w-3/5 p-6 flex flex-col justify-between">

          <div>

            {/* HEADLINE */}
            <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 leading-tight hover:text-red-600 cursor-pointer transition">
              {item.title}
            </h2>

            {/* SUMMARY */}
            <p className="mt-4 text-gray-600 leading-7 line-clamp-3">
              {item.summary}
            </p>

            {/* META */}
            <div className="flex flex-wrap items-center gap-4 mt-5 text-sm">

              <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                📍 {item.area}
              </span>

              <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                🕒 {item.time}
              </span>

              {item.reporter && (
                <span className="bg-red-50 px-3 py-1 rounded-full text-red-600 font-semibold">
                  ✍️ {item.reporter}
                </span>
              )}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center gap-3 mt-6">

            <Link
              to={`/news/${item._id}`}
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl font-semibold shadow-md transition"
            >
              Read Full Story →
            </Link>

            {item.youtubeLink && (
              <a
                href={item.youtubeLink}
                target="_blank"
                rel="noreferrer"
                className="bg-black hover:bg-gray-800 text-white px-5 py-3 rounded-xl font-semibold shadow-md transition"
              >
                ▶ Watch Report
              </a>
            )}

            <button className="border border-gray-300 hover:border-red-500 hover:text-red-600 px-5 py-3 rounded-xl font-medium transition">
              🔖 Save
            </button>

          </div>

        </div>
      </div>
    </article>
  );
};

export default NewsCard;