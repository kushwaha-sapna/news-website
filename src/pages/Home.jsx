// // // // // // import { Link } from "react-router-dom";
// // // // // // import { hindiNewsData } from "../data/hindiNewsData";

// // // // // // const Home = () => {
// // // // // //   return (
// // // // // //     <div className="p-5">

// // // // // //       <h2 className="text-2xl font-bold mb-4">🔥 Breaking News</h2>

// // // // // //       <div className="grid grid-cols-3 gap-4">

// // // // // //         {hindiNewsData.slice(0, 3).map((item) => (
// // // // // //           <div key={item.id} className="border rounded p-3">

// // // // // //             <img src={item.image} className="h-40 w-full object-cover" />

// // // // // //             <h3 className="font-bold mt-2">{item.title}</h3>

// // // // // //             <p className="text-sm text-gray-600">{item.description}</p>

// // // // // //             <Link to={`/news/details/${item.id}`}>
// // // // // //               <button className="text-blue-600 mt-2">
// // // // // //                 Read More →
// // // // // //               </button>
// // // // // //             </Link>

// // // // // //           </div>
// // // // // //         ))}

// // // // // //       </div>

// // // // // //       <div className="mt-6 flex gap-4">

// // // // // //         <Link to="/news/local">Local</Link>
// // // // // //         <Link to="/news/sports">Sports</Link>
// // // // // //         <Link to="/news/international">International</Link>
// // // // // //         <Link to="/news/international">Politics</Link>

// // // // // //       </div>

// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Home;




// // // // // import React, { useState } from "react";

// // // // // import { hindiNewsData } from "../data/hindiNewsData";

// // // // // const Home = () => {
// // // // //   const [searchTerm, setSearchTerm] = useState("");

// // // // //   const filteredNews = hindiNewsData.filter((item) =>
// // // // //     item.title.toLowerCase().includes(searchTerm.toLowerCase())
// // // // //   );

// // // // //   return (
// // // // //     <div className="p-5">

      

// // // // //       {/* NEWS */}
// // // // //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">

// // // // //         {filteredNews.map((item) => (
// // // // //           <div key={item.id} className="border p-3 rounded">
// // // // //             <img src={item.image} className="h-40 w-full object-cover" />
// // // // //             <h3 className="font-bold mt-2">{item.title}</h3>
// // // // //             <p className="text-sm text-gray-600">{item.description}</p>
// // // // //           </div>
// // // // //         ))}

// // // // //       </div>

// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Home;






// // // // import React, { useState } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import { hindiNewsData } from "../data/hindiNewsData";

// // // // const Home = () => {
// // // //   const [searchTerm, setSearchTerm] = useState("");

// // // //   const filteredNews = hindiNewsData.filter((item) =>
// // // //     item.title.toLowerCase().includes(searchTerm.toLowerCase())
// // // //   );

// // // //   return (
// // // //     <div className="p-5">

// // // //       {/* NEWS GRID */}
// // // //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">

// // // //         {filteredNews.map((item) => (
// // // //           <div key={item.id} className="border p-3 rounded shadow">

// // // //             <img
// // // //               src={item.image}
// // // //               className="h-40 w-full object-cover rounded"
// // // //             />

// // // //             <h3 className="font-bold mt-2">{item.title}</h3>

// // // //             <p className="text-sm text-gray-600">
// // // //               {item.description}
// // // //             </p>

// // // //             {/* READ MORE BUTTON */}
// // // //             <Link to={`/news/${item.id}`}>
// // // //               <button className="mt-3 bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700">
// // // //                 Read More
// // // //               </button>
// // // //             </Link>

// // // //           </div>
// // // //         ))}

// // // //       </div>

// // // //     </div>
// // // //   );
// // // // };

// // // // export default Home;



// // // import React, { useState } from "react";
// // // import { hindiNewsData } from "../data/hindiNewsData";
// // // import NewsCard from "../components/NewsCard";

// // // const Home = () => {
// // //   const [searchTerm, setSearchTerm] = useState("");

// // //   const filteredNews = hindiNewsData.filter((item) =>
// // //     item.title.toLowerCase().includes(searchTerm.toLowerCase())
// // //   );

// // //   return (
// // //     <div className="p-5">

// // //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">

// // //         {filteredNews.map((item) => (
// // //           <NewsCard key={item.id} item={item} />
// // //         ))}

// // //       </div>

// // //     </div>
// // //   );
// // // };

// // // export default Home;




// // import React, { useState } from "react";
// // import { hindiNewsData } from "../data/hindiNewsData";
// // import NewsCard from "../components/NewsCard";
// // import AdBanner from "../components/AdBanner";

// // const Home = () => {
// //   const [searchTerm, setSearchTerm] = useState("");

// //   const filteredNews = hindiNewsData.filter((item) =>
// //     item.title.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   return (
// //     <div className="p-5">

// //       {/* 🔍 SEARCH BAR */}
// //       <div className="mb-5">
// //         <input
// //           type="text"
// //           placeholder="Search news..."
// //           value={searchTerm}
// //           onChange={(e) => setSearchTerm(e.target.value)}
// //           className="w-full p-2 border rounded"
// //         />
// //       </div>

// //       {/* 📰 NEWS GRID */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

// //         {filteredNews.length > 0 ? (
// //           filteredNews.map((item) => (
// //             <NewsCard key={item.id} item={item} />
// //           ))
// //         ) : (
// //           <p className="text-gray-500">No news found</p>
// //         )}

// //       </div>
// //    <AdBanner />
// //     </div>
// //   );
// // };

// // export default Home;














// import React from "react";
// import { hindiNewsData } from "../data/hindiNewsData";
// import NewsCard from "../components/NewsCard";
// import AdBanner from "../components/AdBanner";
// import Breaking from "../components/Breaking";
// import NewsVideoSlider from "../components/NewsVideoSlider";
// import Breaking from "../components/TrendingNow";
// const Home = () => {
//   return (
//     <div className="p-5">
// <Breaking/>
//       {/* 🔥 Breaking Section */}
//       {/* <h1 className="text-2xl font-bold mb-4">Latest Stories</h1> */}
//      <h1 className="text-3xl md:text-4xl font-extrabold mt-6 mb-6 text-gray-800 relative inline-block">
//   Latest Stories
//   <span className="absolute left-0 -bottom-1 w-full h-1 bg-red-500 rounded-full"></span>
// </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

//         {hindiNewsData.slice(0, 6).map((item) => (
//           <NewsCard key={item.id} item={item} />
//         ))}

//       </div>

//       {/* 📢 AD BANNER (BEST PLACE: after first section) */}
//       <div className="my-6">
//         <AdBanner />
//       </div>

      
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

//         {hindiNewsData.slice(6).map((item) => (
//           <NewsCard key={item.id} item={item} />
//         ))}

//       </div>
// <div className="p-5">
//       <NewsVideoSlider />
//     </div>
    
//       <TrendingNow />
    
   

      

//     </div>
//   );
// };

// export default Home;







import React from "react";
import { hindiNewsData } from "../data/hindiNewsData";
import NewsCard from "../components/NewsCard";
import AdBanner from "../components/AdBanner";
import Breaking from "../components/Breaking";
import NewsVideoSlider from "../components/NewsVideoSlider";
import TrendingNow from "../components/TrendingNow"; // ✅ FIXED

const Home = () => {
  return (
    <div className="p-5">
      <Breaking />

      {/* 🔥 Breaking Section */}
      {/* <h1 className="text-2xl font-bold mb-4">Latest Stories</h1> */}
      <h1 className="text-3xl md:text-4xl font-extrabold mt-6 mb-6 text-gray-800 relative inline-block">
        Latest Stories
        <span className="absolute left-0 -bottom-1 w-full h-1 bg-red-500 rounded-full"></span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {hindiNewsData.slice(0, 6).map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>

      {/* 📢 AD BANNER (BEST PLACE: after first section) */}
      <div className="my-6">
        <AdBanner />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {hindiNewsData.slice(6).map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>

      <div className="p-5">
        <NewsVideoSlider />
      </div>

      <TrendingNow />
    </div>
  );
};

export default Home;