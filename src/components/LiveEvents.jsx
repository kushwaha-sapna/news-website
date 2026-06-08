import { localNewsData } from "../data/localNewsData";
import NewsCard from "./NewsCard";

const LiveEvents = () => {
  return (
    <>
      {localNewsData.live.map((item) => (
        <NewsCard key={item._id} item={item} />
      ))}
    </>
  );
};

export default LiveEvents;