"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useCallback } from "react";

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  const onToggleTheme = useCallback(() => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, [theme]);

  return (
    <Button
      className={cn(
        "bg-foreground rounded-sm hover:bg-foreground/80 transition-all dark:bg-primary dark:hover:bg-primary/80",
      )}
      onClick={onToggleTheme}
    >
      <SunIcon
        className={cn(
          "h-[1.4rem] w-[1.4rem] scale-0 transition-all dark:scale-100",
        )}
      />
      <MoonIcon
        className={cn(
          "h-[1.4rem] w-[1.4rem] absolute scale-100 transition-all  dark:scale-0",
        )}
      />
    </Button>
  );
};

export default ThemeToggle;
