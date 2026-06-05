// Components;
import Container from "./Container";
import Input from "./Input";

// Icons;
import { Moon, Sun } from "lucide-react";

// Logo;
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="dark:bg-surface-light-dark/95 border-border bg-surface/80 text-text dark:border-border-dark dark:text-text-dark sticky top-0 z-50 w-full border-b py-4 backdrop-blur-lg">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <article className="text-xl font-bold tracking-wide">
            <span className="text-text dark:text-text-dark">manga</span>
            <span className="text-primary dark:text-primary-dark">Verse</span>
          </article>

          <Input className="hidden w-110 md:flex lg:w-150" />

          {/* Right Side */}
          <article className="flex items-center gap-px">
            {/* Logo */}
            <div className="w-14">
              <img
                src={logo}
                alt="manga logo"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Dark/Light Toggle Button */}
            <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-slate-100 hover:scale-105 hover:bg-indigo-100 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
              <Moon size={18} className="block dark:hidden" />
              <Sun size={18} className="hidden dark:block" />
            </button>
          </article>
        </div>
      </Container>

      {/* Mobile Search */}
      <Container>
        <Input className="flex pt-3 md:hidden" />
      </Container>
    </header>
  );
}
