import { localNewsData } from "../data/localNewsData";
import NewsCard from "./NewsCard";

const AreaNews = () => {
  return (
    <>
      {localNewsData.area.map((item) => (
        <NewsCard key={item._id} item={item} />
      ))}
    </>
  );
};

export default AreaNews;