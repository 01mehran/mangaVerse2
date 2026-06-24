// React-router-dom;
import { Link, useLoaderData, useNavigation } from "react-router-dom";

// React Hooks;
import { useEffect, useState } from "react";

// Libraries;
import axios from "axios";

// Custom Hooks;
import { useSearchManga } from "../hooks/useSearchManga";
import useLocalStorage from "../hooks/useLocalStorage";

// Components;
import Container from "../components/Container";
import BackButton from "../components/BackButton";
import MangaSlot from "../components/MangaSlot";
import Loading from "../components/Loading";
import MangaCard from "../components/MangaCard";
import ModalMangaCard from "../components/ModalMangaCard";
import FindNextMangaHero from "../components/FindNextMangaHero";
import ModalManga from "../components/ModalManga";

export default function FindNextManga() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSlot, setActiveSlot] = useState(null);
  const [loadingRecommended, setLoadingRecommended] = useState(false);
  const [selectedMangas, setSelectedMangas] = useLocalStorage(
    "selectedMangas",
    [null, null, null],
  );
  const [recommendedMangas, setRecommendedMangas] = useLocalStorage(
    "savedManga",
    [],
  );
  const [recommendedError, setRecommendedError] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const { setQuery, setSearchedManga } = useSearchManga();

  const { topMangas } = useLoaderData();

  const navigation = useNavigation();
  const loadingTopMangas = navigation.state === "loading";

  const isDisabled = selectedMangas.filter(Boolean).length === 0;

  const selectedMangaNames = selectedMangas
    ?.map((manga) => manga?.title.slice(0, 10))
    .join(" • ");

  const displayedMangas = showAll
    ? recommendedMangas
    : recommendedMangas.slice(0, 12);

  const handleClick = (slotIndex) => {
    setActiveSlot(slotIndex);
    setIsOpen(true);
  };

  const handleSelectmanga = (manga) => {
    setSelectedMangas((prev) => {
      const copy = [...prev];
      copy[activeSlot] = manga;
      return copy;
    });

    setIsOpen(false);
    setQuery("");
    setSearchedManga([]);
  };

  const handleFindNextManga = async () => {
    setRecommendedError(null);

    const allGenres = selectedMangas?.flatMap((manga) => manga?.genres || []);

    const genreCount = {};

    allGenres.forEach((genre) => {
      genreCount[genre.mal_id] = {
        genre,
        count: (genreCount[genre.mal_id]?.count || 0) + 1,
      };
    });

    const genreIds = Object.values(genreCount)
      .sort((a, b) => b.count - a.count)
      .slice(0, 3)
      .map((item) => item.genre.mal_id)
      .join(",");

    try {
      setLoadingRecommended(true);

      const { data: response } = await axios.get(
        `https://api.jikan.moe/v4/manga?genres=${genreIds}`,
      );

      const selectedIds = selectedMangas
        .filter(Boolean)
        .map((manga) => manga.mal_id);

      const recommendations = response.data.filter(
        (manga) => !selectedIds.includes(manga.mal_id),
      );

      setRecommendedMangas(recommendations);
    } catch (err) {
      console.error(err);
      setRecommendedError(err);
    } finally {
      setLoadingRecommended(false);
    }
  };

  const handleDeleteManga = (id) => {
    setSelectedMangas((prev) => {
      const updated = prev.map((manga) =>
        manga?.mal_id === id ? null : manga,
      );

      const hasManga = updated.some((manga) => manga !== null);

      if (!hasManga) {
        setRecommendedMangas([]);
      }

      return updated;
    });
  };

  return (
    <section className="bg-bg dark:bg-bg-dark min-h-screen py-6 md:py-8">
      <Container>
        <BackButton />
        {loadingTopMangas ? (
          <Loading />
        ) : (
          <main>
            {/* Hero */}
            <FindNextMangaHero />

            {/* Slots */}
            <section className="py-10">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                {selectedMangas.map((manga, index) => (
                  <MangaSlot
                    key={index}
                    title={`Select Manga #${index + 1}`}
                    value="Select Manga +"
                    onClick={() => handleClick(index)}
                    selectedMangas={manga}
                    onDelete={handleDeleteManga}
                  />
                ))}
              </div>
            </section>

            {/* Button */}
            <section className="pb-10 text-center">
              <button
                disabled={isDisabled || loadingRecommended}
                onClick={handleFindNextManga}
                className="bg-primary hover:bg-primary/90 dark:bg-primary-dark/70 dark:hover:bg-primary-dark/80 text-md h-10 w-54 cursor-pointer rounded-xl px-5 text-[14px] font-semibold text-white transition disabled:pointer-events-none disabled:opacity-60 sm:px-6 md:w-72"
              >
                {loadingRecommended ? (
                  <span className="dark:border-secondary-dark pointer-events-none mx-auto inline-block size-4 animate-spin rounded-xl border-2 border-r-0 border-l-0 border-white"></span>
                ) : (
                  "Show Similar Mangas "
                )}
              </button>
            </section>

            <section>
              {recommendedError && (
                <div className="mx-auto w-fit text-center text-sm text-red-600">
                  <p className="">{`Somethig went wrong (${recommendedError.status})`}</p>
                  <span>Try again later</span>
                </div>
              )}

              {recommendedMangas.length > 0 && (
                <>
                  <h4 className="dark:text-bg border-primary/20 my-4 border-b pb-1 text-sm font-medium">
                    Similar to:{" "}
                    <span className="dark:text-secondary/90 text-primary/90 italic">
                      {selectedMangaNames}
                    </span>
                  </h4>

                  <div className="xs:grid-cols-2 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {displayedMangas.map((manga) => (
                      <Link
                        to={`/manga/${manga.mal_id}`}
                        key={manga.mal_id}
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        <ModalMangaCard manga={manga} />
                      </Link>
                    ))}
                  </div>
                  <button
                    onClick={() => setShowAll((prev) => !prev)}
                    className="text-primary dark:text-secondary cursor-pointer pt-3 text-sm font-medium italic"
                  >
                    {showAll ? "Show less manga" : "Show more manga"}
                  </button>
                </>
              )}
            </section>

            {isOpen && (
              <ModalManga
                onClose={() => setIsOpen(false)}
                topMangas={topMangas}
                loadingTopMangas={loadingTopMangas}
                isOpen={isOpen}
                onSelect={handleSelectmanga}
              />
            )}
          </main>
        )}
      </Container>
    </section>
  );
}
