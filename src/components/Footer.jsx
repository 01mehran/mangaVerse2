// Components;
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-border bg-surface dark:border-border-dark dark:bg-surface-light-dark/95 border-t">
      <Container>
        <div className="py-10">
          <div className="flex flex-col items-center justify-around gap-8 lg:flex-row">
            {/* Logo & text */}
            <div className="text-center lg:text-left">
              <article className="flex items-center justify-center text-xl font-bold tracking-wide lg:justify-start">
                <span className="text-text dark:text-text-dark">manga</span>
                <span className="text-primary dark:text-primary-dark">
                  Verse
                </span>
              </article>

              <p className="text-text-tertiary dark:text-text-muted-dark mt-3 max-w-sm text-sm sm:text-lg">
                Discover your next favorite manga and <br />
                explore legendary stories.
              </p>
            </div>

            {/* Quote */}
            <div className="text-sm text-slate-500 dark:text-gray-400">
              “Read. Explore. Become legendary.”
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-8 border-t border-slate-200 pt-6 text-center text-sm text-slate-500 dark:border-white/10 dark:text-gray-500">
            © 2026 MangaVerse. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
