// React-router-dom;
import { Link, useNavigation } from "react-router-dom";

// Context;
import { useFavorites } from "../contexts/FavoritesContext";

// Components;
import BackButton from "../components/BackButton";
import Container from "../components/Container";
import MangaCard from "../components/MangaCard";
import Loading from "../components/Loading";

export default function Favorites() {
  const { favorites } = useFavorites();

  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <section className="bg-bg dark:bg-bg-dark min-h-screen py-6 md:py-8">
      <Container>
        <BackButton />

        {isLoading && <Loading />}

        <main>
          {!isLoading && favorites.length > 0 && (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(12.5rem,1fr))] gap-4 px-2">
              {favorites.map((manga) => (
                <MangaCard key={manga.mal_id} manga={manga} />
              ))}
            </div>
          )}

          {!isLoading && favorites.length === 0 && (
            <div className="xs:text-base mt-8 flex flex-col text-center text-sm text-white">
              <span className="xs:pb-0 pb-1 text-gray-700 dark:text-gray-400">
                No favourite manga yet ♥
              </span>
              <span className="text-gray-700 dark:text-gray-400">
                Start exploring and add your favourite manga!
              </span>

              <Link
                to="/"
                className="dashed border-primary text-primary dark:border-primary-dark dark:text-primary-dark dark:bg-primary-dark/5 bg-primary/5 mx-auto mt-6 w-fit rounded-lg border border-dashed px-4 py-1 text-[12px] md:text-sm"
              >
                Explore Manga
              </Link>
            </div>
          )}
        </main>
      </Container>
    </section>
  );
}
