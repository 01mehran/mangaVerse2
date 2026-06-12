// React Hooks;
import { useEffect, useState } from "react";

// Libraris;
import axios from "axios";

export function useSearchManga() {
  const [query, setQuery] = useState("");
  const [searchedManga, setSearchedManga] = useState([]);
  const [loadingSearch, setLoadingSearch] = useState(false);

  useEffect(() => {
    if (!query) {
      setSearchedManga([]);
      return;
    }

    setLoadingSearch(true);

    const timeout = setTimeout(async () => {
      try {
        const { data: response } = await axios(
          `https://api.jikan.moe/v4/manga?q=${query}`,
        );

        setSearchedManga(response.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingSearch(false);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [query]);

  return {
    query,
    setQuery,
    searchedManga,
    loadingSearch,
  };
}
