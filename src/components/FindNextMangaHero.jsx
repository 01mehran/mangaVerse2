import React from "react";

export default function FindNextMangaHero() {
  return (
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
            Pick 3 manga you enjoyed and we'll recommend similar mangas based on
            genres.
          </p>
        </div>
      </div>
    </section>
  );
}
