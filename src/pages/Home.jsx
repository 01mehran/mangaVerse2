// React Hooks;
import { useEffect, useState } from "react";

// Libraries;
import axios from "axios";

// Components;
import MangaList from "../components/MangaList";
import Loading from "../components/Loading";
import ErrorMsg from "../components/ErrorMsg";

export default function Home() {
  const [mangas, setMangas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getTopManga = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const { data: response } = await axios(
        `https://api.jikan.moe/v4/top/manga`,
      );
      console.log(response);
      setMangas(response.data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTopManga();
  }, []);

  return (
    <section>
      <main className="bg-bg dark:bg-bg-dark min-h-screen">
        {error && <ErrorMsg error={error} />}
        {isLoading && <Loading />}

        {!isLoading && !error && <MangaList mangas={mangas} />}
      </main>
    </section>
  );
}
