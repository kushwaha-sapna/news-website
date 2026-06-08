




import { useParams } from "react-router-dom";
import { hindiNewsData } from "../data/hindiNewsData";

const NewsDetails = () => {
  const { id } = useParams();

  const news = hindiNewsData.find(
    (item) => String(item.id) === id
  );

  if (!news) return <h2 className="p-5">News not found</h2>;

  return (
    <div className="max-w-3xl mx-auto p-5">

      <img
        src={news.image}
        className="w-full h-80 object-cover"
        alt={news.title}
      />

      <h1 className="text-2xl font-bold mt-4">
        {news.title}
      </h1>

      <p className="mt-3 text-gray-600">
        {news.content}
      </p>

    </div>
  );
};

export default NewsDetails;