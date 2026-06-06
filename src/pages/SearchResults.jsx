// React Hooks;
import { useEffect, useState } from "react";

// React-router-dom;
import { useSearchParams } from "react-router-dom";

// Libraries;
import axios from "axios";

// Components;
import Container from "../components/Container";
import MangaCard from "../components/MangaCard";
import Loading from "../components/Loading";
import BackButton from "../components/BackButton";
import ErrorMsg from "../components/ErrorMsg";

export default function SearchResults() {
  const [searchedManga, setSearchedManga] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams();

  const query = searchParams.get("q");

  const getSearchedManga = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const { data: response } = await axios(
        `https://api.jikan.moe/v4/manga?q=${query}`,
      );
      setSearchedManga(response.data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      getSearchedManga();
    }
  }, [query]);

  return (
    <section className="bg-bg dark:bg-bg-dark min-h-screen py-12">
      <Container>
        {/* Back button */}
        <BackButton />

        <main className="min-h-screen">
          {error && <ErrorMsg error={error} onRetry={getSearchedManga} />}
          {isLoading && <Loading />}

          {/* Empty state */}
          {!isLoading && searchedManga.length === 0 && (
            <div className="flex flex-col items-center justify-center text-center">
              <span className="mb-3 text-5xl">⚠️</span>
              <h2 className="dark: text-xl font-medium text-black/90 italic dark:text-white">
                Ooops, no manga found for{" "}
                <span className="text-primary dark:text-primary-dark text-xl">
                  "{query}"
                </span>
              </h2>
            </div>
          )}

          {/* Results */}
          {!isLoading && searchedManga.length > 0 && (
            <>
              {/* Search title */}
              <h1 className="text-text dark:text-text-dark mb-8 text-xl font-bold md:text-2xl">
                Search results for:
                <span className="text-primary dark:text-primary-dark-light ml-3">
                  "{query}"
                </span>
              </h1>

              <p className="text-text dark:text-text-dark pb-2 text-sm italic">
                Found {searchedManga.length} manga
              </p>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {searchedManga.map((manga) => (
                  <MangaCard manga={manga} key={manga.mal_id} />
                ))}
              </div>
            </>
          )}
        </main>
      </Container>
    </section>
  );
}
