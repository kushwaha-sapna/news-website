// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Sports = () => {
//   const [cricketNews, setCricketNews] = useState([]);
//   const [footballNews, setFootballNews] = useState([]);

//   const fetchData = async () => {
//     try {
//       const cricketRes = await fetch("http://localhost:5000/api/sports/cricket");
//       const footballRes = await fetch("http://localhost:5000/api/sports/football");

//       setCricketNews(await cricketRes.json());
//       setFootballNews(await footballRes.json());
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="bg-gray-100 min-h-screen">

//       {/* 🔴 HEADER */}
//       <div className="bg-red-600 text-white py-6 shadow-lg">
//         <h1 className="text-center text-4xl font-bold">
//           🏆 Sports News Hub
//         </h1>
//         <p className="text-center text-red-100 mt-1">
//           Cricket • Football • Live Scores • World Tournaments
//         </p>
//       </div>

//       {/* 🔥 TOP STRIP (BREAKING STYLE) */}
//       <div className="bg-white border-b border-red-200 py-2">
//         <marquee className="text-red-600 font-semibold">
//           🔴 Breaking: India wins series | ⚽ Messi scores hat-trick | 🏏 IPL updates live now
//         </marquee>
//       </div>

//       {/* 🧩 MAIN GRID */}
//       <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">

//         {/* 🏏 CRICKET SECTION */}
//         <div className="bg-white rounded-xl shadow-lg p-5 border-t-4 border-red-600">

//           <h2 className="text-xl font-bold text-red-600 mb-4">
//             🏏 Cricket Updates
//           </h2>

//           <div className="space-y-5">

//             {cricketNews.map((item) => (
//               <div key={item._id} className="border-b pb-4">

//                 <img
//                   src={item.image || "https://source.unsplash.com/400x250/?cricket"}
//                   className="w-full h-44 object-cover rounded-md"
//                 />

//                 <h3 className="font-bold text-gray-900 mt-2">
//                   {item.title}
//                 </h3>

//                 <p className="text-sm text-gray-600 mt-1">
//                   {item.description?.slice(0, 120)}...
//                 </p>

//                 <Link
//                   to={`/news/${item._id}`}
//                   className="text-red-600 text-sm font-semibold mt-2 inline-block hover:underline"
//                 >
//                   Read Full Story →
//                 </Link>

//               </div>
//             ))}

//           </div>
//         </div>

//         {/* 🔴 LIVE SCORES + TOURNAMENTS */}
//         <div className="space-y-6">

//           {/* LIVE SCORES */}
//           <div className="bg-black text-white rounded-xl p-5 shadow-lg">

//             <h2 className="text-xl font-bold mb-3">
//               🔴 Live Scores
//             </h2>

//             <div className="space-y-3 text-sm">

//               <div className="bg-gray-800 p-3 rounded">
//                 🏏 IND vs AUS — 187/4 (18.2 ov)
//               </div>

//               <div className="bg-gray-800 p-3 rounded">
//                 ⚽ MCI vs LIV — 2 : 1 (75’)
//               </div>

//               <div className="bg-gray-800 p-3 rounded">
//                 🏏 RCB vs CSK — Match Starting Soon
//               </div>

//             </div>

//             <p className="text-xs text-gray-400 mt-3">
//               Auto-updated live feed 🔄
//             </p>

//           </div>

//           {/* TOURNAMENTS */}
//           <div className="bg-white rounded-xl shadow-lg p-5 border-t-4 border-purple-600">

//             <h2 className="text-xl font-bold mb-4">
//               🏆 World Tournaments
//             </h2>

//             <div className="space-y-3 text-sm">

//               <div className="border-b pb-2">
//                 <p className="font-semibold">ICC Cricket World Cup 2026</p>
//                 <p className="text-gray-600">Top international cricket teams compete globally</p>
//               </div>

//               <div className="border-b pb-2">
//                 <p className="font-semibold">FIFA World Cup 2026</p>
//                 <p className="text-gray-600">Biggest football tournament in the world</p>
//               </div>

//               <div>
//                 <p className="font-semibold">T20 World Cup</p>
//                 <p className="text-gray-600">Fast-paced cricket championship</p>
//               </div>

//             </div>

//           </div>

//         </div>

//         {/* ⚽ FOOTBALL SECTION */}
//         <div className="bg-white rounded-xl shadow-lg p-5 border-t-4 border-red-600">

//           <h2 className="text-xl font-bold text-red-600 mb-4">
//             ⚽ Football News
//           </h2>

//           <div className="space-y-5">

//             {footballNews.map((item) => (
//               <div key={item._id} className="border-b pb-4">

//                 <img
//                   src={item.image || "https://source.unsplash.com/400x250/?football"}
//                   className="w-full h-44 object-cover rounded-md"
//                 />

//                 <h3 className="font-bold text-gray-900 mt-2">
//                   {item.title}
//                 </h3>

//                 <p className="text-sm text-gray-600 mt-1">
//                   {item.description?.slice(0, 120)}...
//                 </p>

//                 <Link
//                   to={`/news/${item._id}`}
//                   className="text-red-600 text-sm font-semibold mt-2 inline-block hover:underline"
//                 >
//                   Read Full Story →
//                 </Link>

//               </div>
//             ))}

//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Sports;









import React from "react";
import { Link } from "react-router-dom";

const Sports = () => {
  // 🏏 DUMMY CRICKET NEWS
  const cricketNews = [
    {
      _id: "1",
      title: "India wins thrilling match against Australia",
      description:
        "India secured a last over victory in a nail-biting match at the stadium with outstanding performance from top order batsmen.",
      image:
        "https://images.unsplash.com/photo-1594470117722-de4b9a02ebed"
    },
    {
      _id: "2",
      title: "IPL 2026 schedule announced",
      description:
        "The new IPL season schedule has been officially released with exciting new matches and venues across India.",
      image:
        "https://images.unsplash.com/photo-1521412644187-c49fa049e84d"
    }
  ];

  // ⚽ DUMMY FOOTBALL NEWS
  const footballNews = [
    {
      _id: "3",
      title: "Messi scores hat-trick in final match",
      description:
        "Lionel Messi delivered an outstanding performance with a hat-trick leading his team to victory.",
      image:
        "https://images.unsplash.com/photo-1508098682722-e99c43a406b2"
    },
    {
      _id: "4",
      title: "Champions League final highlights",
      description:
        "An intense final match concluded with dramatic penalties and unforgettable moments.",
      image:
        "https://images.unsplash.com/photo-1521412644187-c49fa049e84d"
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* 🔴 HEADER */}
      <div className="bg-red-600 text-white py-6 shadow-lg">
        <h1 className="text-center text-4xl font-bold">
          🏆 Sports News Hub
        </h1>
        <p className="text-center text-red-100 mt-1">
          Cricket • Football • Live Scores • Tournaments
        </p>
      </div>

      {/* 🔥 BREAKING NEWS */}
      <div className="bg-white border-b border-red-200 py-2">
        <marquee className="text-red-600 font-semibold">
          🔴 Breaking: India wins series | ⚽ Messi hat-trick | 🏏 IPL updates live
        </marquee>
      </div>

      {/* 🧩 MAIN GRID */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* 🏏 CRICKET SECTION */}
        <div className="bg-white rounded-xl shadow-lg p-5 border-t-4 border-red-600">

          <h2 className="text-xl font-bold text-red-600 mb-4">
            🏏 Cricket Updates
          </h2>

          <div className="space-y-5">

            {cricketNews.map((item) => (
              <div key={item._id} className="border-b pb-4">

                <img
                  src={item.image}
                  className="w-full h-44 object-cover rounded-md"
                />

                <h3 className="font-bold text-gray-900 mt-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  {item.description}
                </p>

                <Link
                  to={`/news/${item._id}`}
                  className="text-red-600 text-sm font-semibold mt-2 inline-block hover:underline"
                >
                  Read Full Story →
                </Link>

              </div>
            ))}

          </div>
        </div>

        {/* 🔴 LIVE SCORES + TOURNAMENTS */}
        <div className="space-y-6">

          {/* LIVE SCORES */}
          <div className="bg-black text-white rounded-xl p-5 shadow-lg">

            <h2 className="text-xl font-bold mb-3">
              🔴 Live Scores
            </h2>

            <div className="space-y-3 text-sm">

              <div className="bg-gray-800 p-3 rounded">
                🏏 IND vs AUS — 187/4 (18.2 ov)
              </div>

              <div className="bg-gray-800 p-3 rounded">
                ⚽ MCI vs LIV — 2 : 1 (75’)
              </div>

              <div className="bg-gray-800 p-3 rounded">
                🏏 RCB vs CSK — Starting Soon
              </div>

            </div>

          </div>

          {/* TOURNAMENTS */}
          <div className="bg-white rounded-xl shadow-lg p-5 border-t-4 border-purple-600">

            <h2 className="text-xl font-bold mb-4">
              🏆 World Tournaments
            </h2>

            <p className="text-sm text-gray-600 mb-2">
              ICC Cricket World Cup 2026
            </p>

            <p className="text-sm text-gray-600 mb-2">
              FIFA World Cup 2026
            </p>

            <p className="text-sm text-gray-600">
              T20 World Cup Championship
            </p>

          </div>

        </div>

        {/* ⚽ FOOTBALL SECTION */}
        <div className="bg-white rounded-xl shadow-lg p-5 border-t-4 border-red-600">

          <h2 className="text-xl font-bold text-red-600 mb-4">
            ⚽ Football News
          </h2>

          <div className="space-y-5">

            {footballNews.map((item) => (
              <div key={item._id} className="border-b pb-4">

                <img
                  src={item.image}
                  className="w-full h-44 object-cover rounded-md"
                />

                <h3 className="font-bold text-gray-900 mt-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  {item.description}
                </p>

                <Link
                  to={`/news/${item._id}`}
                  className="text-red-600 text-sm font-semibold mt-2 inline-block hover:underline"
                >
                  Read Full Story →
                </Link>

              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
};

export default Sports;