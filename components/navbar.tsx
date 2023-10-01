import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const Navbar = () => {
  return (
    <header className="w-[1000px] mx-auto p-4 flex items-center">
      <nav>
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
      <div className="ml-auto flex items-center gap-5">
        <a
          href="https://github.com/nytocode/personal-webapp"
          target="_blank"
          className="flex items-center gap-1 cursor-pointer"
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
