import { MasterContext } from "@/context/MasterContext";
import { useContext } from "react";

const Pagination = () => {
  const { page, setPage } = useContext(MasterContext);

  const handlePageClick = (newPage: number) => {
    if (newPage < 1) return;
    setPage(newPage);
  };

  return (
    <div className="flex justify-center my-10">
      <nav aria-label="Pagination">
        <ul className="inline-flex items-center gap-1 text-sm">
          {/* Previous */}
          <li>
            <button onClick={() => handlePageClick(page - 1)} disabled={page <= 1} className={`inline-flex items-center gap-1 rounded-l-md border px-4 py-2 font-medium ${page <= 1 ? "text-gray-300 bg-gray-100 cursor-not-allowed" : "text-gray-600 bg-white hover:bg-gray-50 border-gray-300"}`}>
              ‹ Previous
            </button>
          </li>

          {/* Page Numbers */}
          {page > 2 && (
            <li>
              <button onClick={() => handlePageClick(page - 2)} className="px-4 py-2 border border-gray-300 bg-white text-gray-600 hover:bg-gray-50">
                {page - 2}
              </button>
            </li>
          )}
          {page > 1 && (
            <li>
              <button onClick={() => handlePageClick(page - 1)} className="px-4 py-2 border border-gray-300 bg-white text-gray-600 hover:bg-gray-50">
                {page - 1}
              </button>
            </li>
          )}
          <li>
            <span className="px-4 py-2 border border-gray-300 bg-yellow-100 text-yellow-600 font-semibold" title="Current Page">
              {page}
            </span>
          </li>
          <li>
            <button onClick={() => handlePageClick(page + 1)} className="px-4 py-2 border border-gray-300 bg-white text-gray-600 hover:bg-gray-50">
              {page + 1}
            </button>
          </li>
          <li>
            <button onClick={() => handlePageClick(page + 2)} className="px-4 py-2 border border-gray-300 bg-white text-gray-600 hover:bg-gray-50">
              {page + 2}
            </button>
          </li>

          {/* Next */}
          <li>
            <button onClick={() => handlePageClick(page + 1)} className="inline-flex items-center gap-1 rounded-r-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-600 hover:bg-gray-50">
              Next ›
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
