// Components;
import ExpandableText from "./ExpandableText";

// Icons;
import { WandSparkles } from "lucide-react";

export default function MangaStorySection({ title, story, translation }) {
  if (!translation) return null;

  return (
    <section className="xs:p-8 mt-14 rounded-3xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/3">
      <div className="flex items-center justify-between">
        <h2 className="mb-4 text-2xl font-bold text-indigo-500 dark:text-purple-500">
          {title}
        </h2>

        <button
          onClick={() => translation.handleTranslate(story)}
          disabled={translation.isTranslating}
        >
          {translation.isTranslating ? (
            <span className="dark:border-secondary-dark border-primary pointer-events-none block size-8 animate-spin rounded-full border-2 border-r-0 border-l-0"></span>
          ) : (
            <article className="group relative">
              <WandSparkles size={20} className="cursor-pointer" />
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 scale-50 rounded-lg px-2 text-[12px] text-nowrap opacity-0 transition-all duration-200 ease-in group-hover:-top-7 group-hover:scale-105 group-hover:opacity-100">
                {translation.showTranslation ? "English" : "Persian"}
              </span>
            </article>
          )}
        </button>
      </div>

      <ExpandableText
        text={translation.showTranslation ? translation.translatedText : story}
        showTranslation={translation.showTranslation}
        error={translation.error}
      />
    </section>
  );
}
