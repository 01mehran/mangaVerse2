// Components;
import Container from "./Container";
import MangaCard from "./MangaCard";

export default function MangaList({ mangas }) {
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-md dark:bg-bg-dark dark:text-text-dark mb-2 py-2 font-medium">
          Top-Rated Manga
        </h1>

        {/* Manga Cards*/}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(225px,1fr))] gap-6 px-2">
          {mangas.map((manga) => (
            <MangaCard key={manga.mal_id} manga={manga} />
          ))}
        </div>
      </div>
    </Container>
  );
}
