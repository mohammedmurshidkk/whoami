import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  isDark: boolean;
  toggle: () => void;
}

const ThemeToggle = ({ isDark, toggle }: ThemeToggleProps) => {
  return (
    <button
      onClick={toggle}
      className="fixed top-4 right-4 z-50 p-2 rounded-md border border-border bg-background hover:bg-accent transition-colors"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun className="h-4 w-4 text-foreground" /> : <Moon className="h-4 w-4 text-foreground" />}
    </button>
  );
};

export default ThemeToggle;
