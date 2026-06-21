import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const handleFavourites = (manga) => {
    const isFavourite = favorites.some(
      (favorite) => favorite.mal_id === manga.mal_id,
    );

    if (isFavourite) {
      setFavorites((prev) =>
        prev.filter((favourite) => favourite.mal_id !== manga.mal_id),
      );
    } else {
      setFavorites((prev) => [...prev, manga]);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, setFavorites, handleFavourites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);

  if (!context)
    throw new Error(
      "useFavorite must be used within a favoritesContextProvider",
    );

  return context;
};
