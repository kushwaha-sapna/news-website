import { localNewsData } from "../data/localNewsData";
import NewsCard from "./NewsCard";

const ReporterUpdates = () => {
  return (
    <>
      {localNewsData.reporters.map((item) => (
        <NewsCard key={item._id} item={item} />
      ))}
    </>
  );
};

export default ReporterUpdates;