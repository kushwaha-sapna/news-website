// import React, { useState } from "react";
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//      <div className='text-3xl text-teal-500'>news</div>
       
//     </>
//   )
// }

// export default App




import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sports from "./pages/Sports"

import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import NewsDetails from "./pages/NewsDetails";
import SearchResults from "./pages/SearchResults";
import NotFound from "./pages/NotFound";
import LocalNews from "./pages/LocalNews";
import Politics from "./pages/Politics";
import International from "./pages/International";
import Entertainment from "./pages/Entertainment";

import Login from "./pages/Login"


const App = () => {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/sports" element={<Sports />} />
 <Route path="/local-news" element={<LocalNews/>} />
<Route path="/politics" element={<Politics/>} />
<Route path="/international" element={<International/>} />
<Route path="/entertaiment" element={<Entertainment/>} />
<Route path="/login" element={<Login/>} />

        {/* <Route
          path="/category/:category"
          element={<CategoryPage />}
        /> */}

        <Route
          path="/news/:id"
          element={<NewsDetails />}
        />

        <Route
          path="/search"
          element={<SearchResults />}
        />

        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
};

export default App;