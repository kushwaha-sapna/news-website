import React from "react";

const Section = ({ title, children }) => {
  return (
    <div className="mb-10">

      {/* TITLE */}
      <h2 className="text-xl md:text-2xl font-bold text-red-600 border-l-4 border-red-600 pl-3 mb-5">
        {title}
      </h2>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {children}
      </div>

    </div>
  );
};

export default Section;