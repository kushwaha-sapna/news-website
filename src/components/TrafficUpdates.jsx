import { localNewsData } from "../data/localNewsData";
import NewsCard from "./NewsCard";

const TrafficUpdates = () => {
  return (
    <>
      {localNewsData.traffic.map((item) => (
        <NewsCard key={item._id} item={item} />
      ))}
    </>
  );
};

export default TrafficUpdates;