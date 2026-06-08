// import React from "react";
// import { Link } from "react-router-dom";

// const categories = [
//   "sports",
//   "technology",
//   "business",
//   "politics",
//   "entertainment",
// ];

// const CategoryTabs = () => {
//   return (
//     <div className="flex gap-3 flex-wrap my-8">

//       {categories.map((category) => (
//         <Link
//           key={category}
//           to={`/category/${category}`}
//           className="px-5 py-2 bg-gray-200 rounded-full hover:bg-red-600 hover:text-white transition"
//         >
//           {category}
//         </Link>
//       ))}

//     </div>
//   );
// };

// export default CategoryTabs;









import React from "react";
import { Link, useLocation } from "react-router-dom";

const categories = [
  "sports",
  "technology",
  "business",
  "politics",
  "entertainment",
];

const CategoryTabs = () => {
  const location = useLocation();

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-3 px-2 py-4 whitespace-nowrap">
        {categories.map((category) => {
          const isActive = location.pathname === `/category/${category}`;

          return (
            <Link
              key={category}
              to={`/category/${category}`}
              className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300
              ${
                isActive
                  ? "bg-red-600 text-white shadow-md scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-red-500 hover:text-white hover:scale-105"
              }`}
            >
              {category}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryTabs;