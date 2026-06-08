// // // src/components/AdBanner.jsx
// // import React from "react";

// // const AdBanner = () => {
// //   return (
// //     <div className="w-full flex justify-center my-4">
// //       <div className="w-full max-w-5xl bg-yellow-100 border border-yellow-400 text-center p-4 rounded-lg shadow">
// //         <p className="text-sm font-semibold text-gray-700">
// //           🚀 Advertisement
// //         </p>

// //         <img
// //           src="https://via.placeholder.com/900x120"
// //           alt="Ad Banner"
// //           className="w-full mt-2 rounded"
// //         />

// //         <p className="text-xs text-gray-500 mt-1">
// //           Your ad content here (Google Ads / Affiliate / Sponsor)
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdBanner;













// // src/components/AdBanner.jsx
// import React from "react";

// const AdBanner = () => {
//   return (
//     <div className="w-full flex justify-center my-5">
//       <div className="w-full max-w-6xl bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-300 rounded-xl shadow-md overflow-hidden">

//         {/* Top Label */}
//         <div className="bg-yellow-200 text-center py-1">
//           <p className="text-xs font-bold text-gray-700 tracking-wide">
//             🔥 Sponsored Ad
//           </p>
//         </div>

//         {/* Ad Content */}
//         <div className="flex flex-col md:flex-row items-center p-4 gap-4">

//           {/* Left Text */}
//           <div className="flex-1 text-center md:text-left">
//             <h2 className="text-lg font-bold text-gray-800">
//               Try Premium News Experience
//             </h2>
//             <p className="text-sm text-gray-600 mt-1">
//               Get unlimited breaking news, ad-free reading, and instant updates.
//             </p>

//             <button className="mt-3 px-4 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition">
//               Learn More
//             </button>
//           </div>

//           {/* Right Image */}
//           <div className="flex-1">
//             <img
//               src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900"
//               alt="Ad"
//               className="w-full h-32 object-cover rounded-lg"
//             />
//           </div>
//         </div>

//         {/* Footer note */}
//         <div className="text-center text-[10px] text-gray-500 py-2">
//           This is a demo advertisement banner for UI testing only
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdBanner;








// src/components/AdBanner.jsx
import React from "react";

const AdBanner = () => {
  return (
    <div className="w-full flex justify-center my-6">
      
      {/* FULL WIDTH CONTAINER */}
      <div className="w-full max-w-7xl mx-2 md:mx-6 lg:mx-10">

        <div className="relative overflow-hidden rounded-2xl shadow-lg border border-gray-200 bg-white">

          {/* Background Accent */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-500/10 to-pink-500/10"></div>

          <div className="relative flex flex-col md:flex-row items-center justify-between p-5 md:p-8 gap-6">

            {/* LEFT SIDE TEXT */}
            <div className="flex-1">
              <span className="inline-block text-xs font-semibold bg-red-100 text-red-600 px-3 py-1 rounded-full">
                Sponsored
              </span>

              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mt-3">
                Upgrade Your News Experience 🚀
              </h2>

              <p className="text-sm md:text-base text-gray-600 mt-2 leading-relaxed">
                Get real-time breaking news, trending stories, and ad-free premium reading experience across all devices.
              </p>

              <button className="mt-4 px-5 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition">
                Explore Now
              </button>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="flex-1 w-full">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200"
                alt="Ad Banner"
                className="w-full h-40 md:h-52 object-cover rounded-xl"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdBanner;

