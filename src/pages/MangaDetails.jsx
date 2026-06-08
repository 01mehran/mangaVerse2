// React-router-dom;
import { useLoaderData, useNavigation } from "react-router-dom";

// API;
import { translateSynopsis } from "../services/openai";

// React Hooks;
import { useState } from "react";

// Components;
import Container from "../components/Container";
import MangaCard from "../components/MangaCard";
import Loading from "../components/Loading";
import InfoList from "../components/InfoList";
import ExpandableText from "../components/ExpandableText";
import BackButton from "../components/BackButton";

// Icons;
import { WandSparkles } from "lucide-react";

export default function MangaDetails() {
  const mangaDetails = useLoaderData();

  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  const [translatedSynopsis, setTranslatedSynopsis] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);

  const handleTranslate = async () => {
    setIsTranslating(true);

    try {
      const result = await translateSynopsis(mangaDetails.synopsis);
      setTranslatedSynopsis(result);
    } catch (err) {
      console.error(err);
    } finally {
      setIsTranslating(false);
    }
  };

  return (
    <section className="bg-bg text-text dark:bg-bg-dark dark:text-text-dark min-h-screen py-12">
      <Container>
        <BackButton />

        {isLoading ? (
          <Loading />
        ) : (
          <main className="min-h-screen py-10">
            <div className="mx-auto max-w-6xl">
              {/* TOP SECTION */}
              <section className="grid grid-cols-1 gap-10 md:grid-cols-[320px_1fr]">
                {/* COVER */}
                <div className="border-border dark:border-border-dark aspect-3/4 w-full overflow-hidden rounded-3xl border shadow-lg transition hover:scale-[1.02] md:sticky md:top-34 dark:shadow-xl">
                  <img
                    src={mangaDetails?.images?.jpg?.image_url}
                    alt={`Cover of ${mangaDetails?.title}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* DETAILS */}
                <div className="flex flex-col gap-6">
                  {/* TITLE */}
                  <div>
                    <h1 className="sm:4xl text-2xl font-bold md:text-5xl">
                      {mangaDetails?.title}
                    </h1>

                    <p className="mt-2 text-lg text-slate-500 sm:text-2xl dark:text-gray-400">
                      {mangaDetails?.title_japanese}
                    </p>
                  </div>

                  {/* SCORE + STATS */}
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="bg-warning-light text-warning-dark dark:bg-warning-dark-bg dark:text-warning-dark rounded-xl px-4 py-2 font-semibold">
                      ⭐ {mangaDetails?.score?.toFixed(2) ?? "N/A"}
                    </div>

                    <div className="bg-secondary-light text-secondary dark:bg-secondary-bg-dark dark:text-secondary-dark rounded-xl px-4 py-2 font-semibold">
                      Rank #{mangaDetails?.rank ?? "N/A"}
                    </div>

                    <div className="bg-info-bg text-info-text dark:bg-info-bg-hover rounded-xl px-4 py-2 text-sm font-semibold">
                      Popularity #{mangaDetails?.popularity ?? "N/A"}
                    </div>

                    <div className="bg-success-bg text-text-muted dark:bg-success-bg dark:text-text-secondary-dark rounded-xl px-4 py-2 text-sm font-semibold">
                      Favorites {mangaDetails?.favorites ?? "N/A"}
                    </div>
                  </div>

                  {/* BADGES */}
                  <div className="flex flex-wrap gap-2">
                    {mangaDetails?.genres?.length ? (
                      mangaDetails.genres?.map((genre) => (
                        <span
                          key={genre.mal_id}
                          className="bg-primary-bg text-primary dark:bg-primary-dark-bg dark:text-primary-dark-light rounded-full px-1.5 py-1 text-xs font-medium"
                        >
                          {genre.name}
                        </span>
                      ))
                    ) : (
                      <span className="text-primary dark:text-primary-dark">
                        N/A
                      </span>
                    )}
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/3">
                    {/* Manga Info List; */}
                    <InfoList mangaDetails={mangaDetails} />
                  </div>
                </div>
              </section>

              {/* SYNOPSIS */}
              <section className="xs:p-8 mt-14 rounded-3xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/3">
                <div className="flex items-center justify-between">
                  <h2 className="mb-4 text-2xl font-bold text-indigo-500 dark:text-purple-500">
                    Synopsis
                  </h2>

                  <button onClick={handleTranslate} disabled={isTranslating}>
                    {isTranslating ? (
                      <span className="dark:border-secondary-dark border-primary pointer-events-none block size-8 animate-spin rounded-full border-2 border-r-0 border-l-0"></span>
                    ) : (
                      <WandSparkles size={20} className="cursor-pointer" />
                    )}
                  </button>
                </div>

                <ExpandableText
                  text={translatedSynopsis || mangaDetails.synopsis}
                />
              </section>

              {mangaDetails?.background && (
                <section className="xs:p-8 mt-10 rounded-3xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/3">
                  <h2 className="mb-4 text-2xl font-bold text-indigo-500 dark:text-purple-500">
                    Background
                  </h2>

                  <ExpandableText text={mangaDetails?.background} />
                </section>
              )}
            </div>
          </main>
        )}
      </Container>
    </section>
  );
}
