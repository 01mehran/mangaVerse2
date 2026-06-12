// React Hooks;
import { useEffect, useState } from "react";

// Libraris;
import axios from "axios";

export function useSearchManga() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loadingSearch, setLoadingSearch] = useState(false);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    setLoadingSearch(true);

    const timeout = setTimeout(async () => {
      try {
        const { data: response } = await axios(
          `https://api.jikan.moe/v4/manga?q=${query}`,
        );

        setResults(response.data || []);
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
    results,
    loadingSearch,
  };
}
