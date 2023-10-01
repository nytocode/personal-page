"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useCallback } from "react";
import { Switch } from "./ui/switch";

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
    <div className="flex items-center gap-2">
      <Switch onCheckedChange={onToggleTheme} checked={theme === "light"} />
      <MoonIcon
        className={cn(
          "h-[1.4rem] w-[1.4rem] hidden scale-0 transition-all  dark:scale-100 dark:inline",
        )}
      />
      <SunIcon
        className={cn(
          "h-[1.4rem] w-[1.4rem] scale-100 transition-all dark:scale-0 dark:hidden",
        )}
      />
    </div>
  );
};

export default ThemeToggle;
