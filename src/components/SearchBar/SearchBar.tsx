// "use client";

// import { useContext, useRef, useState } from "react";
// import { MasterContext } from "@/context/MasterContext";

// const SearchBar = () => {
//   const { setQuery, setPage, setDetailsType, setFilters } = useContext(MasterContext);
//   const [searchText, setSearchText] = useState<string>("");
//   const inputRef = useRef<HTMLInputElement>(null);
//   const [searchTrigger, setSearchTrigger] = useState<boolean>(false);

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchText(event.target.value);
//   };

//   const handleSearch = () => {
//     if (searchText.trim() !== "") {
//       setDetailsType("news");
//       setFilters({});
//       setPage(1);
//       setQuery(searchText.trim());
//       setSearchTrigger(true);
//     }
//   };

//   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
//     console.log("key down");
//     if (event.key === "Enter") {
//       handleSearch();
//     }
//   };

//   const clearInput = () => {
//     setSearchText("");
//     setQuery("");
//     if (inputRef.current) inputRef.current.value = "";
//   };

//   return (
//     <div className="relative w-full max-w-md">
//       <label className="input input-bordered flex items-center gap-2 w-full max-w-md">
//         <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//           <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
//             <circle cx="11" cy="11" r="8" />
//             <path d="m21 21-4.3-4.3" />
//           </g>
//         </svg>
//         <input ref={inputRef} type="search" placeholder="Search News" value={searchText} onChange={handleInputChange} onKeyDown={handleKeyDown} className="grow" />
//       </label>
//     </div>
//   );
// };

// export default SearchBar;
