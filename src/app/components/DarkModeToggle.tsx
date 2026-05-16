import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";

interface DarkModeToggleProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export function DarkModeToggle({ darkMode, setDarkMode }: DarkModeToggleProps) {
  return (
    <motion.button
      className="fixed top-8 right-8 z-50 w-14 h-14 border-2 border-black dark:border-white bg-white dark:bg-black flex items-center justify-center hover:scale-110 transition-transform"
      onClick={() => setDarkMode(!darkMode)}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
      aria-label="Toggle dark mode"
    >
      <motion.div
        initial={false}
        animate={{ rotate: darkMode ? 0 : 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        whileTap={{ scale: 0.9 }}
      >
        {darkMode ? (
          <Moon className="w-6 h-6 text-white" />
        ) : (
          <Sun className="w-6 h-6 text-black" />
        )}
      </motion.div>
    </motion.button>
  );
}
