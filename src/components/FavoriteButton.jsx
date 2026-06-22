// Context;
import { useFavorites } from "../contexts/FavoritesContext";

export default function FavoriteButton({ manga }) {
  const { toggleFavourite, isFavourite } = useFavorites();

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();

        toggleFavourite(manga);
      }}
      className="bg-surface-light-dark/90 absolute top-3 left-3 w-fit cursor-pointer rounded-lg p-1"
    >
      <svg
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlns:cc="http://creativecommons.org/ns#"
        xmlns:dc="http://purl.org/dc/elements/1.1/"
        className={`ease stroke-2 transition-all duration-150 ${isFavourite(manga) ? " stroke-danger fill-danger" : "stroke-bg hover:fill-danger/80 fill-none"}`}
      >
        <g transform="translate(0 -1028.4)">
          <path d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z" />
        </g>
      </svg>
    </button>
  );
}
