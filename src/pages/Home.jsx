// React Hooks;
import { useEffect, useState } from "react";

// React-router-dom;
import { useSearchParams } from "react-router-dom";

// Libraries;
import axios from "axios";

// Components;
import MangaList from "../components/MangaList";
import Loading from "../components/Loading";
import ErrorMsg from "../components/ErrorMsg";
import Pagination from "../components/Pagination";
import BackToTopButton from "../components/BackToTopButton";

export default function Home() {
  const [mangas, setMangas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState(null);

  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const getTopManga = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const { data: response } = await axios(
        `https://api.jikan.moe/v4/top/manga?page=${page}`,
      );
      setMangas(response.data);
      setPagination(response.pagination);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTopManga();

    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);

  return (
    <section>
      <main className="bg-bg dark:bg-bg-dark min-h-screen">
        {error && <ErrorMsg error={error} onRetry={getTopManga} />}
        {isLoading && <Loading />}

        {!isLoading && !error && <MangaList mangas={mangas} />}
      </main>

      {pagination && <Pagination pagination={pagination} />}

      <BackToTopButton />
    </section>
  );
}
