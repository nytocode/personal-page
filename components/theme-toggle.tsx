"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useCallback, useMemo } from "react";
import { Button } from "./ui/button";

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  const checked = useMemo(() => {
    return theme === "light";
  }, [theme]);

  const onToggleTheme = useCallback(() => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, [theme]);

  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={onToggleTheme}
        variant="outline"
        size="icon"
        className="active:scale-110"
      >
        <MoonIcon
          className={cn(
            "h-[1.4rem] w-[1.4rem] scale-100 transition-all dark:scale-0 dark:hidden",
          )}
        />
        <SunIcon
          className={cn(
            "h-[1.4rem] w-[1.4rem] hidden scale-0 transition-all dark:scale-100 dark:inline",
          )}
        />
      </Button>
    </div>
  );
};

export default ThemeToggle;
