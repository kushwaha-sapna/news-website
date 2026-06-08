import React, { useState } from "react";

const videoNewsData = [
  {
    id: 1,
    title: "Breaking News: India Update",
    videoId: "dQw4w9WgXcQ",
    youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Latest Political News",
    videoId: "M7lc1UVf-VE",
    youtubeLink: "https://www.youtube.com/watch?v=M7lc1UVf-VE",
  },
  {
    id: 3,
    title: "Sports Big Update",
    videoId: "ysz5S6PUM-U",
    youtubeLink: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
  },
  {
    id: 4,
    title: "Weather News Today",
    videoId: "aqz-KE-bpKQ",
    youtubeLink: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
  },
  {
    id: 5,
    title: "Business Market Update",
    videoId: "tgbNymZ7vqY",
    youtubeLink: "https://www.youtube.com/watch?v=tgbNymZ7vqY",
  },
];

const NewsVideoSlider = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % videoNewsData.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? videoNewsData.length - 1 : prev - 1
    );
  };

  const current = videoNewsData[index];

  return (
    <div className="w-full max-w-4xl mx-auto my-8 relative group">

      {/* Heading */}
      <h2 className="text-3xl font-bold mb-4 text-center">
         Watch News 
      </h2>

      {/* Slider Card */}
      <div className="relative bg-white shadow-lg rounded-2xl overflow-hidden border">

        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2
          text-6xl text-black/30 hover:text-black
          opacity-0 group-hover:opacity-100
          transition duration-300 select-none"
        >
          ‹
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2
          text-6xl text-black/30 hover:text-black
          opacity-0 group-hover:opacity-100
          transition duration-300 select-none"
        >
          ›
        </button>

        {/* Title */}
        <div className="p-4 bg-red-600 text-white">
          <h2 className="text-lg font-semibold">{current.title}</h2>
        </div>

        {/* Video */}
        <div className="w-full aspect-video">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${current.videoId}`}
            title="News Video"
            allowFullScreen
          ></iframe>
        </div>

        {/* Bottom Link */}
        <div className="p-4 flex justify-end">
          <a
            href={current.youtubeLink}
            target="_blank"
            rel="noreferrer"
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Watch Full News
          </a>
        </div>

      </div>
    </div>
  );
};

export default NewsVideoSlider;