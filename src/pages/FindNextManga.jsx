// React-router-dom;
import { Link, useLoaderData, useNavigation } from "react-router-dom";

// React Hooks;
import { useEffect, useState } from "react";

// Libraries;
import axios from "axios";

// Custom Hooks;
import { useSearchManga } from "../hooks/useSearchManga";

// Components;
import Container from "../components/Container";
import BackButton from "../components/BackButton";
import MangaSlot from "../components/MangaSlot";
import MangaModal from "../components/MangaModal";
import Loading from "../components/Loading";
import MangaCard from "../components/MangaCard";
import ModalMangaCard from "../components/ModalMangaCard";

export default function FindNextManga() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSlot, setActiveSlot] = useState(null);
  const [loadingRecommended, setLoadingRecommended] = useState(false);

  const [selectedMangas, setSelectedMangas] = useState(() => {
    const saved = localStorage.getItem("selectedMangas");
    return saved ? JSON.parse(saved) : [null, null, null];
  });

  const [recommendedMangas, setRecommendedMangas] = useState(() => {
    const saved = localStorage.getItem("savedManga");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("selectedMangas", JSON.stringify(selectedMangas));
  }, [selectedMangas]);

  useEffect(() => {
    localStorage.setItem("savedManga", JSON.stringify(recommendedMangas));
  }, [recommendedMangas]);

  const { setQuery, setSearchedManga } = useSearchManga();

  const { topMangas } = useLoaderData();

  const navigation = useNavigation();
  const loadingTopMangas = navigation.state === "loading";

  const isDisabled = selectedMangas.filter(Boolean).length === 0;

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
    const genres = [
      ...new Map(
        selectedMangas
          .flatMap((manga) => manga?.genres || [])
          .map((genre) => [genre.mal_id, genre]),
      ).values(),
    ];
    const genreIds = genres
      .slice(0, 3)
      .map((genre) => genre.mal_id)
      .join(",");

    try {
      setLoadingRecommended(true);

      const { data } = await axios.get(
        `https://api.jikan.moe/v4/manga?genres=${genreIds}`,
      );

      const selectedIds = selectedMangas
        .filter(Boolean)
        .map((manga) => manga.mal_id);

      const recommendations = data.data.filter(
        (manga) => !selectedIds.includes(manga.mal_id),
      );

      setRecommendedMangas(recommendations);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingRecommended(false);
    }
  };

  return (
    <section className="bg-bg dark:bg-bg-dark min-h-screen py-6 md:py-8">
      <Container>
        <BackButton />
        {loadingTopMangas ? (
          <Loading />
        ) : (
          <main>
            <section>
              <div className="border-border bg-surface dark:border-border-dark dark:bg-surface-dark rounded-3xl border p-6 md:p-10">
                <div className="mx-auto max-w-3xl text-center">
                  <span className="bg-primary-bg text-primary dark:bg-primary-dark-bg dark:text-primary-dark-light/80 inline-flex rounded-md px-3 py-1 text-sm font-medium">
                    Personalized Recommendation
                  </span>

                  <h1 className="text-text dark:text-text-dark mt-4 text-lg font-bold sm:text-3xl lg:text-5xl">
                    Find Your Next Manga
                  </h1>

                  <p className="text-text-muted dark:text-text-muted-dark mt-4 text-base md:text-lg">
                    Pick 3 manga you enjoyed and we'll recommend similar mangas
                    based on genres.
                  </p>
                </div>
              </div>
            </section>

            <section className="py-10">
              <div className="grid gap-5 md:grid-cols-3">
                {/* Slot - 1  */}

                <MangaSlot
                  title="Select Manga #1"
                  value="Select Manga +"
                  onClick={() => handleClick(0)}
                  selectedMangas={selectedMangas[0]}
                />

                {/* Slot - 2  */}
                <MangaSlot
                  title="Select Manga #2"
                  value="Select Manga +"
                  onClick={() => handleClick(1)}
                  selectedMangas={selectedMangas[1]}
                />

                {/* Slot - 3  */}
                <MangaSlot
                  title="Select Manga #3"
                  value="Select Manga +"
                  onClick={() => handleClick(2)}
                  selectedMangas={selectedMangas[2]}
                />
              </div>
            </section>

            <section className="pb-10 text-center">
              <button
                disabled={isDisabled || loadingRecommended}
                onClick={handleFindNextManga}
                className="bg-primary hover:bg-primary/90 dark:bg-primary-dark/70 dark:hover:bg-primary-dark/80 text-md h-10 w-54 cursor-pointer rounded-xl px-5 text-[14px] font-semibold text-white transition disabled:pointer-events-none disabled:opacity-80 sm:px-6 md:w-72"
              >
                {loadingRecommended ? (
                  <span className="dark:border-secondary-dark border-primary pointer-events-none mx-auto inline-block size-4 animate-spin rounded-xl border-2 border-r-0 border-l-0"></span>
                ) : (
                  "Show Similar Mangas "
                )}
              </button>
            </section>

            {recommendedMangas.length > 0 && (
              <section>
                <div className="xs:grid-cols-2 grid grid-cols-1 gap-4 overflow-scroll md:grid-cols-3 lg:grid-cols-4">
                  {recommendedMangas.map((manga) => (
                    <Link to={`/manga/${manga.mal_id}`} key={manga.mal_id}>
                      <div className="shadow-card flex cursor-pointer items-center gap-3 rounded-lg bg-gray-100 p-2 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                        {/* Image */}
                        <img
                          src={manga?.images?.jpg?.image_url}
                          alt={manga?.title}
                          className="h-14 w-10 rounded object-cover"
                        />
                        <div className="flex flex-col space-y-1">
                          <p className="line-clamp-1 text-sm font-semibold text-gray-900 dark:text-white">
                            {manga?.title ?? "N/A"}
                          </p>

                          <div className="text-xs text-gray-500 dark:text-gray-300">
                            {manga?.genres.length > 0
                              ? manga?.genres
                                  .slice(0, 2)
                                  .map((g) => g.name)
                                  .join(" , ")
                              : "NO jenres"}
                          </div>

                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            ⭐{manga?.score?.toFixed(1) ?? "N/A"} • Rank #
                            {manga?.rank ?? "?"}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

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
        )}
      </Container>
    </section>
  );
}
