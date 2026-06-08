// React Hooks:
import { useState } from "react";

export default function ExpandableText({ text, showTranslation, error }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!text) return null;

  const limit = 300;
  const isLong = text.length > limit;

  const displayedText =
    isExpanded || !isLong ? text : `${text.slice(0, limit)}...`;

  return (
    <div className="relative">
      <p
        className={`${showTranslation ? "font-vazir text-right" : ""} dark:text-text-secondary-dark leading-8 font-medium`}
      >
        {displayedText}
      </p>

      {isLong && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary dark:text-primary-dark mt-3 cursor-pointer text-xs font-medium transition hover:opacity-80"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      )}

      {error && (
        <span className="absolute right-4 bottom-px text-[12px] font-medium text-red-500 md:text-sm">
          Translation Failed!
        </span>
      )}
    </div>
  );
}
