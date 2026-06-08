// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import MobileMenu from "./MobileMenu";

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   return (
// //     <header className="bg-white shadow-md sticky top-0 z-50">
// //       <div className="max-w-7xl mx-auto px-4">

// //         <div className="flex items-center justify-between h-16">

// //           {/* Logo */}
// //           <Link to="/">
// //             <h1 className="text-3xl font-bold text-red-600">
// //               GangaTV
// //             </h1>
// //           </Link>

// //           {/* Desktop Menu */}
// //           <nav className="hidden md:flex gap-6 font-medium">

// //             <Link
// //               to="/"
// //               className="hover:text-red-600"
// //             >
// //               Home
// //             </Link>

// //             <Link
// //               to="/category/sports"
// //               className="hover:text-red-600"
// //             >
// //               Sports
// //             </Link>

// //             <Link
// //               to="/category/local-news"
// //               className="hover:text-red-600"
// //             >
// //               Local News
// //             </Link>

// //             <Link
// //               to="/category/breaking-news"
// //               className="hover:text-red-600"
// //             >
// //               Breaking News
// //             </Link>

// //             <Link
// //               to="/category/politics"
// //               className="hover:text-red-600"
// //             >
// //               Politics
// //             </Link>

// //             <Link
// //               to="/category/entertainment"
// //               className="hover:text-red-600"
// //             >
// //               Entertainment
// //             </Link>
// //  <Link
// //               to="/category/international"
// //               className="hover:text-red-600"
// //             >
// //               International
// //             </Link>

// //           </nav>

// //           {/* Mobile Menu Button */}
// //           <button
// //             onClick={() =>
// //               setIsOpen(!isOpen)
// //             }
// //             className="md:hidden text-2xl"
// //           >
// //             ☰
// //           </button>
// //         </div>

// //         {isOpen && (
// //           <MobileMenu
// //             setIsOpen={setIsOpen}
// //           />
// //         )}
// //       </div>
// //     </header>
// //   );
// // };

// // export default Navbar;




// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import MobileMenu from "./MobileMenu";

// // 👇 add your logo import from assets
// import logo from "../assets/gangatv-logo.png"; 
// // (path adjust kar lena apne folder structure ke hisaab se)

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

//           {/* Desktop Menu */}
//           <nav className="hidden md:flex gap-6 font-medium">

//             <Link to="/" className="hover:text-red-600">
//               Home
//             </Link>

//             <Link to="/sports" className="hover:text-red-600">
//               Sports
//             </Link>

//             <Link to="/local-news" className="hover:text-red-600">
//               Local News
//             </Link>

           
 


//             <Link to="/politics" className="hover:text-red-600">
//               Politics
//             </Link>

//             <Link to="/entertainment" className="hover:text-red-600">
//               Entertainment
//             </Link>

//             <Link to="/international" className="hover:text-red-600">
//               International
//             </Link>

//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-2xl"
//           >
//             ☰
//           </button>
//         </div>

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
        <div className="flex items-center justify-between h-22">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="GangaTV Logo"
              className="h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu + Login Button */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6 font-medium">
              <Link to="/" className="hover:text-red-600 transition">
                Home
              </Link>

              <Link to="/sports" className="hover:text-red-600 transition">
                Sports
              </Link>

              <Link to="/local-news" className="hover:text-red-600 transition">
                Local News
              </Link>

              <Link to="/politics" className="hover:text-red-600 transition">
                Politics
              </Link>

              <Link
                to="/entertainment"
                className="hover:text-red-600 transition"
              >
                Entertainment
              </Link>

              <Link
                to="/international"
                className="hover:text-red-600 transition"
              >
                International
              </Link>
            </nav>

            {/* Login Button */}
            <Link
              to="/login"
              className="bg-red-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-red-700 transition duration-300"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
      </div>
    </header>
  );
};

export default Navbar;