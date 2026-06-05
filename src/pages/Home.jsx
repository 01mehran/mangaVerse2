// React Hooks;
import { useEffect, useState } from "react";

// Libraries;
import axios from "axios";

// Components;
import MangaList from "../components/MangaList";
import Loading from "../components/Loading";

export default function Home() {
  const [mangas, setMangas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTopManga = async () => {
    setIsLoading(true);

    try {
      const { data: response } = await axios(
        `https://api.jikan.moe/v4/top/manga`,
      );
      console.log(response);
      setMangas(response.data);
    } catch (err) {
      console.error(err);
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
        {isLoading ? <Loading /> : <MangaList mangas={mangas} />}
      </main>
    </section>
  );
}
