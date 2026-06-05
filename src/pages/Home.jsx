// React Hooks;
import { useEffect, useState } from "react";

// Components;
import MangaList from "../components/MangaList";
import axios from "axios";

export default function Home() {
  const [mangas, setMangas] = useState([]);

  const getTopManga = async () => {
    try {
      const { data: response } = await axios(
        `https://api.jikan.moe/v4/top/manga`,
      );
      console.log(response);
      setMangas(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTopManga();
  }, []);

  return (
    <section>
      <main className="bg-bg dark:bg-bg-dark min-h-screen">
        <MangaList mangas={mangas} />
      </main>
    </section>
  );
}
