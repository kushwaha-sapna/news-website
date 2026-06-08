import { localNewsData } from "../data/localNewsData";
import NewsCard from "./NewsCard";

const CrimeUpdates = () => {
  return (
    <>
      {localNewsData.crime.map((item) => (
        <NewsCard key={item._id} item={item} />
      ))}
    </>
  );
};

export default CrimeUpdates;