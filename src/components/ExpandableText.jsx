// React Hooks:
import { useState } from "react";

export default function ExpandableText({ text }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!text) return null;

  const limit = 300;
  const isLong = text.length > limit;

  const displayedText =
    isExpanded || !isLong ? text : `${text.slice(0, limit)}...`;

  return (
    <div>
      <p className="text-text-tertiary dark:text-text-secondary-dark leading-8">
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
    </div>
  );
}
