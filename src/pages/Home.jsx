// React-router-dom;
import { useLoaderData, useNavigation } from "react-router-dom";

// Components;
import MangaList from "../components/MangaList";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import BackToTopButton from "../components/BackToTopButton";
import { useEffect } from "react";

export default function Home() {
  const { topMangas, pagination } = useLoaderData();

  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <section>
      <main className="bg-bg dark:bg-bg-dark min-h-screen">
        {isLoading ? <Loading /> : <MangaList mangas={topMangas} />}
      </main>

      {pagination && <Pagination pagination={pagination} />}

      <BackToTopButton />
    </section>
  );
}
