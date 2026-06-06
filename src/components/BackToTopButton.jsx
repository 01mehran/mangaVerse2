// React Hooks;
import { useEffect, useState } from "react";

// Icons;
import { ChevronUp } from "lucide-react";

export default function BackToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={backToTop}
      className={`sm-bottom-7 bg-primary dark:bg-primary-dark fixed right-4 bottom-4 z-50 flex size-10 cursor-pointer items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 ease-in hover:-translate-y-1 sm:right-7 sm:size-12 ${show ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-20 opacity-50"}`}
    >
      <ChevronUp size={20} />
    </button>
  );
}
