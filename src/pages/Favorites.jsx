// React-router-dom;
import { useNavigation } from "react-router-dom";

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

        {isLoading ? (
          <Loading />
        ) : (
          <main>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(12.5rem,1fr))] gap-4 px-2">
              {favorites.map((manga) => (
                <MangaCard key={manga.mal_id} manga={manga} />
              ))}
            </div>
          </main>
        )}
      </Container>
    </section>
  );
}
