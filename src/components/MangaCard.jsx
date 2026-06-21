// React-router-dom;
import { Link } from "react-router-dom";

// Components;
import FavoriteButton from "./FavoriteButton";

export default function MangaCard({ manga }) {
  return (
    <Link
      to={`/manga/${manga.mal_id}`}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      <article className="group border-border bg-surface dark:border-border-dark dark:bg-surface-dark cursor-pointer overflow-hidden rounded-2xl border shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
        {/* Cover */}
        <div className="relative aspect-3/4 overflow-hidden">
          <img
            src={manga?.images?.jpg?.large_image_url}
            alt={`Cover of ${manga.title}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          {/* Score */}
          <div className="bg-overlay-dark text-warning-dark absolute top-3 right-3 rounded-lg px-2 py-1 text-sm font-medium backdrop-blur">
            ⭐ {manga?.score?.toFixed(1) ?? "N/A"}
          </div>

          {/* Heart Svg Icon Button */}
          <FavoriteButton manga={manga} />
        </div>

        {/* Content */}
        <div className="space-y-3 p-2 lg:p-4">
          {/* Title */}
          <h3 className="text-text dark:text-text-dark line-clamp-1 text-lg font-bold">
            {manga?.title ?? "N/A"}
          </h3>

          {/* Genres */}
          <div className="flex gap-2 text-indigo-500 dark:text-purple-400">
            {manga?.genres?.length ? (
              manga.genres?.slice(0, 2).map((genre) => (
                <span
                  key={genre.mal_id}
                  className="bg-primary-bg text-primary dark:bg-primary-dark-bg dark:text-primary-dark-light rounded-full px-1.5 py-1 text-xs font-medium text-nowrap"
                >
                  {genre.name}
                </span>
              ))
            ) : (
              <span className="text-primary dark:text-primary-dark">N/A</span>
            )}
          </div>

          {/* Footer */}
          <div className="border-border dark:border-border-dark flex items-center justify-between border-t pt-3">
            <span className="text-text-muted dark:text-text-muted-dark text-sm">
              {manga?.status ?? "N/A"}
            </span>

            <span className="text-sm font-semibold text-indigo-500 dark:text-purple-400">
              #{manga?.rank ?? "N/A"}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
