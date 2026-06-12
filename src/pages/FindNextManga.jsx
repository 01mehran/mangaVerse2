// React-router-dom;
import { useLoaderData, useNavigation } from "react-router-dom";

// React Hooks;
import { useState } from "react";

// Components;
import Container from "../components/Container";
import BackButton from "../components/BackButton";
import MangaSlot from "../components/MangaSlot";
import MangaModal from "../components/MangaModal";
import { useSearchManga } from "../hooks/useSearchManga";

export default function FindNextManga() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSlot, setActiveSlot] = useState(null);
  const [selectedMangas, setSelectedMangas] = useState({
    1: null,
    2: null,
    3: null,
  });

  const { setQuery, setSearchedManga } = useSearchManga();

  const { topMangas } = useLoaderData();
  const navigation = useNavigation();
  const loadingTopMangas = navigation.state === "loading";

  const handleClick = (slotIndex) => {
    setActiveSlot(slotIndex);
    setIsOpen(true);
  };

  const handleSelectmanga = (manga) => {
    setSelectedMangas((prev) => ({
      ...prev,
      [activeSlot]: manga,
    }));

    setIsOpen(false);
    setQuery("");
    setSearchedManga([]);
    console.log(selectedMangas);
  };

  return (
    <main className="bg-bg dark:bg-bg-dark min-h-screen">
      <Container>
        <section className="py-6 md:py-8">
          <BackButton />

          <div className="border-border bg-surface dark:border-border-dark dark:bg-surface-dark rounded-3xl border p-6 md:p-10">
            <div className="mx-auto max-w-3xl text-center">
              <span className="bg-primary-bg text-primary dark:bg-primary-dark-bg dark:text-primary-dark-light/80 inline-flex rounded-md px-3 py-1 text-sm font-medium">
                Personalized Recommendation
              </span>

              <h1 className="text-text dark:text-text-dark mt-4 text-lg font-bold sm:text-3xl lg:text-5xl">
                Find Your Next Manga
              </h1>

              <p className="text-text-muted dark:text-text-muted-dark mt-4 text-base md:text-lg">
                Pick 3 manga you enjoyed and we'll recommend similar titles
                based on genres and themes.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-10">
          <div className="grid gap-5 md:grid-cols-3">
            {/* Slot - 1  */}

            <MangaSlot
              title="Select Manga #1"
              value="Select Manga +"
              onClick={() => handleClick(1)}
              selectedMangas={selectedMangas[1]}
            />

            {/* Slot - 2  */}
            <MangaSlot
              title="Select Manga #2"
              value="Select Manga +"
              onClick={() => handleClick(2)}
              selectedMangas={selectedMangas[2]}
            />

            {/* Slot - 3  */}
            <MangaSlot
              title="Select Manga #3"
              value="Select Manga +"
              onClick={() => handleClick(3)}
              selectedMangas={selectedMangas[3]}
            />
          </div>
        </section>

        <section className="pb-14 text-center">
          <button className="bg-primary hover:bg-primary/90 dark:bg-primary-dark/70 dark:hover:bg-primary-dark/80 cursor-pointer rounded-xl px-5 py-3 text-[14px] font-semibold text-white transition sm:px-6 sm:py-4 sm:text-lg">
            Find My Next Manga
          </button>
        </section>
      </Container>

      {isOpen && (
        <MangaModal
          onClose={() => setIsOpen(false)}
          topMangas={topMangas}
          loadingTopMangas={loadingTopMangas}
          isOpen={isOpen}
          onSelect={handleSelectmanga}
        />
      )}
    </main>
  );
}
