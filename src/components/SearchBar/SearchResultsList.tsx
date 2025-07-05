// "use client";
// import { useContext } from "react";
// import { MasterContext } from "@/context/MasterContext";

// const SearchResultsList = () => {
//   const { news, loading } = useContext(MasterContext);
//   console.log("news", news);

//   if (loading) return <div className="text-center mt-10 text-gray-400">Searching...</div>;
//   if (!news.length) return <div className="text-center mt-10 text-gray-400">No results found.</div>;

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
//       {news.map((item, index) => (
//         <div key={index} className="p-4 border rounded shadow-sm bg-base-100">
//           <h2 className="font-semibold mb-1">{item.title}</h2>
//           <p className="text-sm text-gray-600 line-clamp-3">{item.description}</p>
//           <a href={item.url} target="_blank" className="text-sm text-yellow-500 hover:underline mt-2 inline-block">
//             Read more →
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SearchResultsList;
