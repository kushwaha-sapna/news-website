// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-slate-900 text-white mt-10">

//       <div className="max-w-7xl mx-auto px-4 py-10">

//         <h2 className="text-2xl font-bold">
//           GangaTV
//         </h2>

//         <p className="mt-3 text-gray-300">
//           Latest news from India and
//           around the world.
//         </p>

//         <hr className="my-6" />

//         <p className="text-center">
//           © 2026 GangaTV. All Rights
//           Reserved.
//         </p>

//       </div>
//     </footer>
//   );
// };

// export default Footer;









import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand Section */}
        <div>
          <h3 className="text-2xl font-bold">
            The <span className="text-red-500">Ganga</span> TV News
          </h3>
          <p className="text-gray-300 mt-3">
            आपका अपना मंच — sach, sabse pehle.
          </p>
        </div>

        {/* Sections */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Sections</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">Politics</li>
            <li className="hover:text-white cursor-pointer">Sports</li>
            <li className="hover:text-white cursor-pointer">Entertainment</li>
            <li className="hover:text-white cursor-pointer">Breaking</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow us</h4>
          <div className="flex flex-col space-y-2 text-gray-300">
            <span className="hover:text-white cursor-pointer">Facebook</span>
            <span className="hover:text-white cursor-pointer">Twitter</span>
            <span className="hover:text-white cursor-pointer">YouTube</span>
            <span className="hover:text-white cursor-pointer">Instagram</span>
          </div>
        </div>
      </div>

      {/* Bottom Copy */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} Ganga TV News. All rights reserved.
      </div>
    </footer>
  );
}