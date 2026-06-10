// React-router-dom;
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="bg-bg dark:bg-surface-light-dark flex min-h-screen items-center justify-center px-6 text-center text-indigo-950 dark:text-white">
      <div className="max-w-md">
        {/* BIG 404 */}
        <h1 className="text-[120px] leading-none font-black text-indigo-200 dark:text-purple-900">
          404
        </h1>

        {/* TITLE */}
        <h2 className="-mt-10 text-2xl font-bold">Page Not Found</h2>

        {/* DESCRIPTION */}
        <p className="mt-3 text-sm text-indigo-700 dark:text-gray-400">
          The page you’re looking for doesn’t exist, got deleted, or moved
          somewhere else.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="cursor-pointer rounded-lg border border-indigo-300 px-5 py-2 text-indigo-700 transition hover:bg-indigo-100 dark:border-purple-800 dark:text-white dark:hover:bg-purple-900/40"
          >
            Go Back
          </button>

          <Link
            to="/"
            className="rounded-lg bg-indigo-600 px-5 py-2 font-medium text-white transition hover:bg-indigo-700 dark:bg-purple-600 dark:hover:bg-purple-700"
          >
            Home
          </Link>
        </div>

        {/* HINT */}
        <p className="mt-6 text-xs text-indigo-400 dark:text-gray-600">
          Tip: check the URL or return to homepage
        </p>
      </div>
    </div>
  );
}
