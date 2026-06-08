// // import React from "react";

// // const Breaking= () => {
// //   // Dummy Hindi Breaking News Data (inside component as requested)
// //   const breakingNews = [
// //     "🚨 भारत में आज बड़ा आर्थिक बदलाव देखने को मिला",
// //     "🔥 IPL 2026: मुंबई इंडियंस ने शानदार जीत दर्ज की",
// //     "⚡ मौसम विभाग ने भारी बारिश का अलर्ट जारी किया",
// //     "📰 सरकार ने नए डिजिटल शिक्षा नियम लागू किए",
// //     "🚀 भारत का नया अंतरिक्ष मिशन सफल रहा",
// //   ];

// //   return (
// //     <div className="w-full bg-red-600 text-white overflow-hidden shadow-md">
      
// //       {/* Label */}
// //       <div className="flex items-center px-4 py-2 bg-red-700">
// //         <span className="font-bold tracking-wide animate-pulse">
// //           🔴 BREAKING NEWS
// //         </span>
// //       </div>

// //       {/* Ticker */}
// //       <div className="whitespace-nowrap flex overflow-hidden">
// //         <div className="flex animate-marquee space-x-10 py-3 px-2">
// //           {breakingNews.map((news, index) => (
// //             <span
// //               key={index}
// //               className="text-sm md:text-base font-medium"
// //             >
// //               {news}
// //             </span>
// //           ))}
// //         </div>

// //         {/* Duplicate for seamless loop */}
// //         <div className="flex animate-marquee space-x-10 py-3 px-2">
// //           {breakingNews.map((news, index) => (
// //             <span
// //               key={index + "copy"}
// //               className="text-sm md:text-base font-medium"
// //             >
// //               {news}
// //             </span>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Breaking;







// import React from "react";

// const Breaking = () => {
//   const breakingNews = [
//     "🚨 भारत में आज बड़ा आर्थिक बदलाव देखने को मिला",
//     "🔥 IPL 2026: मुंबई इंडियंस ने शानदार जीत दर्ज की",
//     "⚡ मौसम विभाग ने भारी बारिश का अलर्ट जारी किया",
//     "📰 सरकार ने नए डिजिटल शिक्षा नियम लागू किए",
//     "🚀 भारत का नया अंतरिक्ष मिशन सफल रहा",
//   ];

//   return (
//     <div className="w-full bg-red-600 text-white overflow-hidden shadow-lg">
      
//       {/* Label */}
//       <div className="flex items-center px-6 py-3 bg-red-700">
//         <span className="font-bold tracking-widest animate-pulse text-sm md:text-base">
//           🔴 BREAKING NEWS
//         </span>
//       </div>

//       {/* Ticker */}
//       <div className="whitespace-nowrap flex overflow-hidden py-2">
        
//         {/* First Track */}
//         <div className="flex animate-marquee space-x-16 px-6">
//           {breakingNews.map((news, index) => (
//             <span
//               key={index}
//               className="text-sm md:text-base font-medium hover:text-yellow-200 transition"
//             >
//               {news}
//             </span>
//           ))}
//         </div>

//         {/* Duplicate Track for smooth loop */}
//         <div className="flex animate-marquee space-x-16 px-6">
//           {breakingNews.map((news, index) => (
//             <span
//               key={index + "copy"}
//               className="text-sm md:text-base font-medium hover:text-yellow-200 transition"
//             >
//               {news}
//             </span>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Breaking;



import React, { useEffect, useState } from "react";

const Breaking = () => {
  const breakingNews = [
    "🚨 भारत में आज बड़ा आर्थिक बदलाव देखने को मिला",
    "🔥 IPL 2026: मुंबई इंडियंस ने शानदार जीत दर्ज की",
    "⚡ मौसम विभाग ने भारी बारिश का अलर्ट जारी किया",
    "📰 सरकार ने नए डिजिटल शिक्षा नियम लागू किए",
    "🚀 भारत का नया अंतरिक्ष मिशन सफल रहा",
  ];

  const [index, setIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % breakingNews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-red-600 text-white shadow-lg">

      {/* Label */}
      <div className="flex items-center px-6 py-3 bg-red-700">
        <span className="font-bold tracking-widest animate-pulse text-sm md:text-base">
          🔴 BREAKING NEWS
        </span>
      </div>

      {/* Sliding News */}
      <div className="h-12 flex items-center justify-center overflow-hidden">
        <div className="transition-all duration-700 ease-in-out text-center px-4">
          <p className="text-sm md:text-base font-medium">
            {breakingNews[index]}
          </p>
        </div>
      </div>

    </div>
  );
};

export default Breaking;