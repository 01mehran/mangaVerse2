// Icons;
import { Search } from "lucide-react";

export default function Input({ className }) {
  return (
    <form
      className={`border-border bg-bg focus-within:ring-primary dark:border-border-dark dark:bg-surface-hover-dark dark:focus-within:ring-primary-dark items-center rounded-full border px-3 py-3 focus-within:ring-2 ${className}`}
    >
      <button className="cursor-pointer transition duration-300 hover:scale-105">
        <Search
          size={18}
          className="text-text-muted dark:text-text-muted-dark"
        />
      </button>

      <input
        type="text"
        placeholder="Search manga..."
        className={`text-text sm:text-md placeholder-text-muted-light dark:text-text-dark dark:placeholder-text-muted-light-dark w-full bg-transparent px-2 text-sm outline-none`}
      />
    </form>
  );
}
