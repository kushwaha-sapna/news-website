// // // import React, { useEffect, useState } from "react";

// // // import HeroNews from "../components/HeroNews";
// // // import NewsCard from "../components/NewsCard";
// // // import CategoryTabs from "../components/CategoryTabs";
// // // import SearchBar from "../components/SearchBar";
// // // import Loader from "../components/Loader";

// // // import { getAllNews } from "../services/newsApi";
// // // import { dummyNews } from "../data/dummyNews";
// // // import BreakingNews from "../components/BreakingNews";


// // // const Home = () => {
// // //   const [news, setNews] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [apiStatus, setApiStatus] = useState(true);

// // //   // 🔴 BREAKING NEWS STATE
// // //   const [breakingNews, setBreakingNews] = useState([]);

// // //   useEffect(() => {
// // //     const fetchNews = async () => {
// // //       try {
// // //         const res = await getAllNews();

// // //         setNews(res.data);
// // //         setApiStatus(true);

// // //         // 🔴 FILTER BREAKING NEWS
// // //         setBreakingNews(
// // //           res.data.filter((item) => item.isBreaking === true)
// // //         );

// // //       } catch (error) {
// // //         console.log("API not available, using dummy data");

// // //         setApiStatus(false);

// // //         // fallback dummy data
// // //         setNews(dummyNews);

// // //         // 🔴 BREAKING FROM DUMMY DATA
// // //         setBreakingNews(
// // //           dummyNews.filter((item) => item.isBreaking === true)
// // //         );
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchNews();
// // //   }, []);

// // //   if (loading) {
// // //     return <Loader />;
// // //   }

// // //   return (
// // //     <div className="max-w-7xl mx-auto px-4 py-6">

// // //       {/* 🔴 BREAKING NEWS SECTION */}
// // //       {breakingNews.length > 0 && (
// // //         <div className="bg-red-600 text-white rounded mb-4 overflow-hidden">

// // //           {/* LABEL */}
// // //           <div className="bg-red-700 px-3 py-1 text-sm font-bold">
// // //             🔴 BREAKING NEWS
// // //           </div>

// // //           {/* SCROLL CONTENT */}
// // //           <div className="flex gap-10 whitespace-nowrap py-2 px-3 animate-pulse">
// // //             {breakingNews.map((item) => (
// // //               <span key={item._id} className="font-medium">
// // //                 🚨 {item.title}
// // //               </span>
// // //             ))}
// // //           </div>

// // //         </div>
// // //       )}

// // //       {/* SEARCH */}
// // //       <SearchBar />

// // //       {/* 🔥 HERO SECTION */}
// // //       <HeroNews news={news?.[0]} />

// // //       {/* CATEGORIES */}
// // //       <CategoryTabs />
// // //         <BreakingNews />


// // //       {/* STATUS MESSAGE */}
// // //       {!apiStatus && (
// // //         <div className="bg-yellow-100 text-yellow-700 p-3 rounded mt-4 text-sm">
// // //           ⚠ API not connected — showing demo news
// // //         </div>
// // //       )}

// // //       {/* SECTION TITLE */}
// // //       <h2 className="text-2xl font-bold mt-8 mb-4">
// // //         Latest News
// // //       </h2>

// // //       {/* NEWS GRID */}
// // //       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
// // //         {news.length > 0 ? (
// // //           news.map((item) => (
// // //             <NewsCard key={item._id} news={item} />
// // //           ))
// // //         ) : (
// // //           <p>No news available</p>
// // //         )}
// // //       </div>

// // //     </div>
// // //   );
// // // };

// // // export default Home;








// // import React, { useEffect, useState } from "react";

// // import HeroNews from "../components/HeroNews";
// // import NewsCard from "../components/NewsCard";
// // import CategoryTabs from "../components/CategoryTabs";
// // import SearchBar from "../components/SearchBar";
// // import Loader from "../components/Loader";
// // import BreakingNews from "../pages/BreakingNews";


// // import { getAllNews } from "../services/newsApi";
// // import { dummyNews } from "../data/dummyNews";
// // import LatestStories from "../pages/LatestStories";

// // const Home = () => {
// //   const [news, setNews] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [apiStatus, setApiStatus] = useState(true);

// //   useEffect(() => {
// //     const fetchNews = async () => {
// //       try {
// //         const res = await getAllNews();

// //         const data = res.data;

// //         setNews(data);
// //         setApiStatus(true);
// //       } catch (error) {
// //         console.log("API not available, using dummy data");

// //         setNews(dummyNews);
// //         setApiStatus(false);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchNews();
// //   }, []);

// //   if (loading) {
// //     return <Loader />;
// //   }

// //   return (
// //     <div className="max-w-7xl mx-auto px-4 py-6">

     
      
// //       {/* SEARCH */}
// //       <SearchBar />

// //       {/* 🔴 BREAKING NEWS COMPONENT (TOP) */}
// //        <BreakingNews />


// //       {/* HERO SECTION */}
// //       <HeroNews news={news?.[0]} />

// //       {/* CATEGORIES */}
// //       <CategoryTabs />
       
// //       {/* STATUS MESSAGE */}
// //       {!apiStatus && (
// //         <div className="bg-yellow-100 text-yellow-700 p-3 rounded mt-4 text-sm">
// //           ⚠ API not connected — showing demo news
// //         </div>
// //       )}

// //       {/* LATEST NEWS */}
// //       <h2 className="text-2xl font-bold mt-8 mb-4">
// //         Latest News
// //       </h2>

// //       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
// //         {news.length > 0 ? (
// //           news.map((item) => (
// //             <NewsCard key={item._id || item.id} news={item} />
// //           ))
// //         ) : (
// //           <p>No news available</p>
// //         )}
// //       </div>

// //       <LatestStories/>

// //     </div>
// //   );
// // };

// // export default Home;









// import React, { useState } from "react";

// import HeroNews from "../components/HeroNews";
// import NewsCard from "../components/NewsCard";
// import CategoryTabs from "../components/CategoryTabs";
// import SearchBar from "../components/SearchBar";
// import Loader from "../components/Loader";

// import BreakingNews from "../pages/BreakingNews";
// import LatestStories from "../pages/LatestStories";
// import TrendingNow from "../pages/TrendingNow";

// const Home = () => {
//   // ✅ no API, no dummy → empty state only
//   const [news] = useState([]);
//   const [loading] = useState(false);
//   const [apiStatus] = useState(false);

//   if (loading) {
//     return <Loader />;
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-6">

//       {/* SEARCH */}
//       <SearchBar />
//      { /* BREAKING NEWS */}
//       <BreakingNews />

      

//       {/* HERO SECTION */}
//       <HeroNews news={news?.[0]} />

//       {/* CATEGORIES */}
//       <CategoryTabs />

      
     

    

//       {/* EXTRA SECTION */}
//       <LatestStories />
//       <TrendingNow/>

//     </div>
//   );
// };

// export default Home;







import React from "react";

import HeroNews from "../components/HeroNews";
import CategoryTabs from "../components/CategoryTabs";
import SearchBar from "../components/SearchBar";

import BreakingNews from "../pages/BreakingNews";
import LatestStories from "../pages/LatestStories";
import TrendingNow from "../pages/TrendingNow";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* SEARCH */}
      <SearchBar />

      {/* BREAKING NEWS */}
      <BreakingNews />

      {/* HERO SECTION */}
      <HeroNews />

      {/* CATEGORIES */}
      <CategoryTabs />

      {/* EXTRA SECTIONS */}
      <LatestStories />
      <TrendingNow />
    </div>
  );
};

export default Home;