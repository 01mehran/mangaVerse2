// React-router-dom;
import { useNavigation } from "react-router-dom";

// Components;
import Container from "../components/Container";
import BackButton from "../components/BackButton";
import Loading from "../components/Loading";

export default function FindNextManga() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <main className="bg-bg dark:bg-bg-dark min-h-screen">
      {isLoading ? (
        <Loading />
      ) : (
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
              <div className="border-border bg-surface dark:border-border-dark dark:bg-surface-dark rounded-2xl border p-5">
                <h3 className="text-text dark:text-text-dark mb-4 font-semibold">
                  Favorite Manga #1
                </h3>

                <button className="border-border dark:border-border-dark text-text-muted dark:text-text-muted-dark flex h-48 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-dashed">
                  Select Manga +
                </button>
              </div>

              <div className="border-border bg-surface dark:border-border-dark dark:bg-surface-dark rounded-2xl border p-5">
                <h3 className="text-text dark:text-text-dark mb-4 font-semibold">
                  Favorite Manga #2
                </h3>

                <button className="border-border dark:border-border-dark text-text-muted dark:text-text-muted-dark flex h-48 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-dashed">
                  Select Manga +
                </button>
              </div>

              <div className="border-border bg-surface dark:border-border-dark dark:bg-surface-dark rounded-2xl border p-5">
                <h3 className="text-text dark:text-text-dark mb-4 font-semibold">
                  Favorite Manga #3
                </h3>

                <button className="border-border dark:border-border-dark text-text-muted dark:text-text-muted-dark flex h-48 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-dashed">
                  Select Manga +
                </button>
              </div>
            </div>
          </section>

          <section className="pb-14 text-center">
            <button className="bg-primary hover:bg-primary/90 dark:bg-primary-dark/70 dark:hover:bg-primary-dark/80 cursor-pointer rounded-xl px-5 py-3 text-[14px] font-semibold text-white transition sm:px-6 sm:py-4 sm:text-lg">
              Find My Next Manga
            </button>
          </section>
        </Container>
      )}
    </main>
  );
}
