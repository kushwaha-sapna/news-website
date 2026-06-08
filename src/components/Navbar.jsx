






// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import MobileMenu from "./MobileMenu";

// import logo from "../assets/gangatv-logo.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex items-center justify-between h-22">
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-2">
//             <img
//               src={logo}
//               alt="GangaTV Logo"
//               className="h-20 w-auto object-contain"
//             />
//           </Link>

//           {/* Desktop Menu + Login Button */}
//           <div className="hidden md:flex items-center gap-8">
//             <nav className="flex gap-6 font-medium">
//               <Link to="/" className="hover:text-red-600 transition">
//                 Home
//               </Link>

//               <Link to="/sports" className="hover:text-red-600 transition">
//                 Sports
//               </Link>

//               <Link to="/local-news" className="hover:text-red-600 transition">
//                 Local News
//               </Link>

//               <Link to="/politics" className="hover:text-red-600 transition">
//                 Politics
//               </Link>

//               <Link
//                 to="/entertainment"
//                 className="hover:text-red-600 transition"
//               >
//                 Entertainment
//               </Link>

//               <Link
//                 to="/international"
//                 className="hover:text-red-600 transition"
//               >
//                 International
//               </Link>
//             </nav>

//             {/* Login Button */}
//             <Link
//               to="/login"
//               className="bg-red-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-red-700 transition duration-300"
//             >
//               Login
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-2xl"
//           >
//             ☰
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
//       </div>
//     </header>
//   );
// };

// export default Navbar;










import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

import logo from "../assets/gangatv-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Navbar container */}
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="GangaTV Logo"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 font-medium">
            <Link to="/news-website" className="hover:text-red-600 transition">Home</Link>
            <Link to="/sports" className="hover:text-red-600 transition">Sports</Link>
            <Link to="/local-news" className="hover:text-red-600 transition">Local News</Link>
            <Link to="/politics" className="hover:text-red-600 transition">Politics</Link>
            <Link to="/entertainment" className="hover:text-red-600 transition">Entertainment</Link>
            <Link to="/international" className="hover:text-red-600 transition">International</Link>
          </nav>

          {/* Desktop Login */}
          <div className="hidden md:block">
            <Link
              to="/login"
              className="bg-red-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-red-700 transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-3xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
      </div>
    </header>
  );
};

export default Navbar;