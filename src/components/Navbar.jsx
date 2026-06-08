




// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../assets/logo.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = () => {
//     if (!searchQuery.trim()) return;
//     navigate(`/search?q=${searchQuery}`);
//     setSearchQuery("");
//     setIsOpen(false);
//   };

//   return (
//     <nav className="bg-white shadow-md border-b border-red-600">

//       {/* TOP BAR */}
//       <div className="flex justify-between items-center px-6 md:px-12 py-3">

//         {/* LOGO */}
//         <div className="flex items-center gap-3">
//           <img src={logo} className="h-16 w-16 object-contain" />
//           <div className="leading-tight">
//             <h1 className="text-xl font-bold text-red-600">The Ganga TV</h1>
//             <p className="text-xs text-gray-500">अपना रंगमंच</p>
//           </div>
//         </div>

//         {/* SEARCH (DESKTOP) */}
//         <div className="hidden md:flex items-center border border-gray-300 rounded-full overflow-hidden w-[420px] shadow-sm">
//           <input
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && handleSearch()}
//             placeholder="Search latest news..."
//             className="w-full px-4 py-2 text-sm outline-none"
//           />
//           <button
//             onClick={handleSearch}
//             className="bg-red-600 text-white px-5 py-2 hover:bg-red-700"
//           >
//             Search
//           </button>
//         </div>

//         {/* LOGIN + MENU */}
//         <div className="hidden md:flex items-center gap-6">

//           <Link className="text-gray-700 hover:text-red-600" to="/">Home</Link>
//           <Link className="text-gray-700 hover:text-red-600" to="/news/local">Local</Link>
//           <Link className="text-gray-700 hover:text-red-600" to="/news/sports">Sports</Link>
//           <Link className="text-gray-700 hover:text-red-600" to="/news/international">International</Link>
// <Link className="text-gray-700 hover:text-red-600" to="/news/politics">Politics</Link>

//           <Link to="/login">
//             <button className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700">
//               Login
//             </button>
//           </Link>

//           {/* MOBILE BTN */}
//           <button
//             className="md:hidden text-2xl text-red-600"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             ☰
//           </button>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       {isOpen && (
//         <div className="md:hidden px-6 pb-4 space-y-3 bg-white border-t">

//           <input
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search news..."
//             className="w-full border px-3 py-2 rounded"
//           />

//           <button
//             onClick={handleSearch}
//             className="w-full bg-red-600 text-white py-2 rounded"
//           >
//             Search
//           </button>

//           <Link onClick={() => setIsOpen(false)} to="/">Home</Link>
//           <Link onClick={() => setIsOpen(false)} to="/news/local">Local</Link>
//           <Link onClick={() => setIsOpen(false)} to="/news/sports">Sports</Link>
//           <Link onClick={() => setIsOpen(false)} to="/news/international">International</Link>
//           <Link onClick={() => setIsOpen(false)} to="/news/politics">Politics</Link>

//           <Link to="/login">
//             <button className="w-full bg-red-600 text-white py-2 rounded">
//               Login
//             </button>
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;







import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    navigate(`/search?q=${searchQuery}`);
    setSearchQuery("");
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md border-b border-red-600">

      {/* TOP BAR */}
      <div className="flex justify-between items-center px-6 md:px-12 py-3">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src={logo} className="h-16 w-16 object-contain" />
          <div className="leading-tight">
            <h1 className="text-xl font-bold text-red-600">The Ganga TV</h1>
            <p className="text-xs text-gray-500">अपना रंगमंच</p>
          </div>
        </div>

        {/* SEARCH (DESKTOP) */}
        <div className="hidden md:flex items-center border border-gray-300 rounded-full overflow-hidden w-[420px] shadow-sm">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search latest news..."
            className="w-full px-4 py-2 text-sm outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-red-600 text-white px-5 py-2 hover:bg-red-700"
          >
            Search
          </button>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">
          <Link className="text-gray-700 hover:text-red-600" to="/">Home</Link>
          <Link className="text-gray-700 hover:text-red-600" to="/news/local">Local</Link>
          <Link className="text-gray-700 hover:text-red-600" to="/news/sports">Sports</Link>
          <Link className="text-gray-700 hover:text-red-600" to="/news/international">International</Link>
          <Link className="text-gray-700 hover:text-red-600" to="/news/politics">Politics</Link>

          <Link to="/login">
            <button className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700">
              Login
            </button>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON (FIXED - NOW VISIBLE) */}
        <button
          className="md:hidden text-3xl text-red-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-white border-t">

          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search news..."
            className="w-full border px-3 py-2 rounded"
          />

          <button
            onClick={handleSearch}
            className="w-full bg-red-600 text-white py-2 rounded"
          >
            Search
          </button>

          <Link onClick={() => setIsOpen(false)} to="/">Home</Link>
          <Link onClick={() => setIsOpen(false)} to="/news/local">Local</Link>
          <Link onClick={() => setIsOpen(false)} to="/news/sports">Sports</Link>
          <Link onClick={() => setIsOpen(false)} to="/news/international">International</Link>
          <Link onClick={() => setIsOpen(false)} to="/news/politics">Politics</Link>

          <Link to="/login">
            <button className="w-full bg-red-600 text-white py-2 rounded">
              Login
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;