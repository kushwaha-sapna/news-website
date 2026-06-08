// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import NewsList from "./pages/NewsList";
// import NewsDetails from "./pages/NewsDetails";
// import Login from "./pages/Login";

// function App() {
//   return (
//     <BrowserRouter basename="/news-website">
      
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/news/:category" element={<NewsList />} />
//         <Route path="/news/details/:id" element={<NewsDetails />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>

//       <Footer />

//     </BrowserRouter>
//   );
// }

// export default App;







import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NewsList from "./pages/NewsList";
import NewsDetails from "./pages/NewsDetails";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter basename="/news-website">

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Category Page */}
        <Route path="/news/:category" element={<NewsList />} />

        {/* Details Page (FIXED) */}
        <Route path="/news/details/:id" element={<NewsDetails />} />

        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;