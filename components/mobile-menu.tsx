"use client";

import { GitHubLogoIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { useState } from "react";
import Logo from "./logo";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="md:hidden">
        <HamburgerMenuIcon className="h-[1.4rem] w-[1.4rem]" />
      </SheetTrigger>
      <SheetContent side="top" className="h-screen pt-10">
        <nav>
          <ul className="flex flex-col gap-10">
            <li className="flex justify-center">
              <Link onClick={() => setIsOpen(false)} href="/">
                <Logo />
              </Link>
            </li>
            <hr />
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                className="p-2 cursor-pointer bg-background text-foreground hover:invert"
                href="/work"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpen(false)}
                className="p-2 cursor-pointer bg-background text-foreground hover:invert"
                href="/blog"
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
