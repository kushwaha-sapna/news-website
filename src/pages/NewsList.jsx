// import { useParams, Link } from "react-router-dom";
// import { hindiNewsData } from "../data/hindiNewsData";

// const NewsList = () => {
//   const { category } = useParams();

//   const filtered = hindiNewsData.filter(
//     (item) => item.category === category
//   );

//   return (
//     <div className="grid grid-cols-3 gap-4 p-5">

//       {filtered.map((item) => (
//         <div key={item.id} className="border p-3">

//           <img src={item.image} className="h-40 w-full object-cover" />

//           <h2>{item.title}</h2>

//           <p>{item.description}</p>

//           <Link to={`/news/details/${item.id}`}>
//             <button className="text-blue-600">
//               Read More
//             </button>
//           </Link>

//         </div>
//       ))}

//     </div>
//   );
// };

// export default NewsList;








import { useParams } from "react-router-dom";
import { hindiNewsData } from "../data/hindiNewsData";
import NewsCard from "../components/NewsCard";

const NewsList = () => {
  const { category } = useParams();

  const filtered = hindiNewsData.filter(
    (item) => item.category === category
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5">

      {filtered.map((item) => (
        <NewsCard key={item.id} item={item} />
      ))}

    </div>
  );
};

export default NewsList;