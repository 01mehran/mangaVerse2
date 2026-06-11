// React-router-dom;
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="py-6 md:py-8">
      <div className="border-border bg-surface dark:border-border-dark dark:bg-surface-dark/80 shadow-card overflow-hidden rounded-3xl border">
        <div className="p-4 text-left md:p-8">
          <div className="max-w-2xl space-y-1 sm:space-y-4">
            <h2 className="text-text dark:text-text-dark text-lg font-bold sm:text-3xl lg:text-5xl">
              Find Your Next Manga
            </h2>

            <p className="text-text-muted dark:text-text-muted-dark text-sm leading-7 md:text-lg">
              Select your favourite manga and discover new titles tailored to
              your taste.
            </p>

            <Link
              to="/find-next-manga"
              className="bg-primary hover:bg-primary/90 dark:bg-primary-dark/70 dark:hover:bg-primary-dark/80 inline-flex cursor-pointer rounded-xl px-4 py-1.5 text-[12px] font-semibold text-white transition-all sm:px-6 sm:py-3 md:text-base"
            >
              Discover Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
