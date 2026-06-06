// React-router-dom;
import { useSearchParams } from "react-router-dom";

// Icons;
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ pagination }) {
  if (!pagination) return null;

  const [searchParams, setSearchParams] = useSearchParams();

  const totalPages = pagination?.last_visible_page;

  const handleChangePage = (page) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page);
    setSearchParams(params);
  };

  return (
    <div className="flex justify-center gap-3 bg-slate-100 py-6 dark:bg-gray-950 dark:text-slate-200">
      <>
        <button
          disabled={pagination?.current_page === 1}
          onClick={() => handleChangePage(pagination?.current_page - 1)}
          className="cursor-pointer rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2 text-indigo-600 shadow-sm transition-transform hover:-translate-x-px disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-x-0 dark:border-white/10 dark:bg-indigo-500/5 dark:text-indigo-500"
        >
          <ChevronLeft size={20} />
        </button>

        <span className="flex items-center rounded-xl bg-indigo-200/30 px-5 font-semibold text-slate-700 dark:bg-white/5 dark:text-slate-200">
          {pagination?.current_page} / {totalPages}
        </span>

        <button
          disabled={!pagination?.has_next_page}
          onClick={() => handleChangePage(pagination?.current_page + 1)}
          className="cursor-pointer rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2 text-indigo-600 shadow-sm transition-transform hover:translate-x-px disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-x-0 dark:border-white/10 dark:bg-indigo-500/5 dark:text-indigo-500"
        >
          <ChevronRight size={20} />
        </button>
      </>
    </div>
  );
}
