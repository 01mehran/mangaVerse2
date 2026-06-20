// Components;
import Container from "./Container";
import MangaCard from "./MangaCard";
import Hero from "./Hero";
import { Link } from "react-router-dom";

export default function MangaList({ mangas }) {
  return (
    <Container>
      {/* <Hero Section /> */}
      <Hero />

      {/* Top Manga List */}
      <section>
        <div className="mb-2 flex items-center justify-between py-2">
          <h1 className="md:text-md dark:text-text-dark text-sm font-medium">
            Top-Rated Manga
          </h1>
          <Link to="/favorites">
            <p className="dark:text-text-dark md:text-md text-sm font-medium">
              Favorites ♥
            </p>
          </Link>
        </div>

        {/* Manga Cards*/}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(12.5rem,1fr))] gap-4 px-2">
          {mangas.map((manga) => (
            <MangaCard key={manga.mal_id} manga={manga} />
          ))}
        </div>
      </section>
    </Container>
  );
}
