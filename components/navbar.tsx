import Link from "next/link";
import ThemeToggle from "./theme-toggle";

const Navbar = () => {
  return (
    <header className="w-[1000px] mx-auto p-4 flex items-center">
      <h2 className="text-xl font-medium">Antonio Forte</h2>
      <nav className="ml-4">
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
      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Navbar;
