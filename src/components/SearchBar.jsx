import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] =
    useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    navigate(
      `/search?q=${query}`
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="my-8"
    >
      <div className="flex">

        <input
          type="text"
          placeholder="Search news..."
          value={query}
          onChange={(e) =>
            setQuery(e.target.value)
          }
          className="flex-1 border p-3 rounded-l-lg"
        />

        <button
          type="submit"
          className="bg-red-600 text-white px-6 rounded-r-lg"
        >
          Search
        </button>

      </div>
    </form>
  );
};

export default SearchBar;