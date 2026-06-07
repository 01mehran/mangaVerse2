// React Hooks;
import { useEffect } from "react";

// React-router-dom;
import { useLocation, useNavigation, useRevalidator } from "react-router-dom";

// Icons;
import { Search } from "lucide-react";

export default function Input({
  className,
  onHandleSearch,
  searchQuery,
  setSearchQuery,
}) {
  const location = useLocation();
  const navigation = useNavigation();
  const { state } = useRevalidator();

  const isLoading = navigation.state === "loading" || state === "loading";

  useEffect(() => {
    setSearchQuery("");
  }, [location.pathname, setSearchQuery]);

  return (
    <form
      onSubmit={onHandleSearch}
      className={` ${isLoading ? "pointer-events-none opacity-80" : ""} border-border bg-bg focus-within:ring-primary dark:border-border-dark dark:bg-surface-hover-dark dark:focus-within:ring-primary-dark items-center rounded-full border px-3 py-3 focus-within:ring-2 ${className}`}
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
        disabled={isLoading}
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
      />
    </form>
  );
}
