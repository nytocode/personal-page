import { GitHubLogoIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <HamburgerMenuIcon className="h-[1.4rem] w-[1.4rem]" />
      </SheetTrigger>
      <SheetContent side="top" className="h-screen pt-10">
        <nav>
          <ul className="flex flex-col gap-10">
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
                href="/wblog"
              >
                Blog
              </Link>
            </li>
            <hr />
            <li>
              <a
                href="https://github.com/nytocode/personal-webapp"
                target="_blank"
                className="flex items-center gap-2 cursor-pointer"
              >
                <GitHubLogoIcon className="h-[1.4rem] w-[1.4rem]" />
                Source
              </a>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
