// React;
import { createContext, useContext, useState } from "react";

// Custom Hooks;
import useLocalStorage from "../hooks/useLocalStorage";

const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage("favourites", []);

  const isFavourite = (manga) => {
    return favorites.some((favourite) => favourite.mal_id === manga.mal_id);
  };

  const toggleFavourite = (manga) => {
    if (isFavourite(manga)) {
      setFavorites((prev) =>
        prev.filter((favourite) => favourite.mal_id !== manga.mal_id),
      );
    } else {
      setFavorites((prev) => [...prev, manga]);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, setFavorites, toggleFavourite, isFavourite }}
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
