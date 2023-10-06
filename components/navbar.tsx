import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import MobileMenu from "./mobile-menu";

const Navbar = () => {
  return (
    <header className="bg-background w-full max-w-[1000px] mx-auto p-4 md:flex flex-row items-center justify-between">
      <MobileMenu />
      <nav className="hidden md:inline-block">
        <ul className="flex items-center gap-4">
          <li>
            <Link
              className="p-2 cursor-pointer bg-background text-foreground hover:invert"
              href="/work"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              className="p-2 cursor-pointer bg-background text-foreground hover:invert"
              href="/blog"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <div className="hidden md:flex items-center gap-5">
        <a
          href="https://github.com/nytocode/personal-webapp"
          target="_blank"
          className="flex items-center gap-2 cursor-pointer"
        >
          <GitHubLogoIcon className="h-[1.4rem] w-[1.4rem]" />
          <span className="">Source</span>
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Navbar;
