import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { BiSun } from 'react-icons/bi';
import { HiOutlineMoon } from 'react-icons/hi';

const ThemeToggler = (props) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      className={`${props.className} w-8 h-8 bg-gray-100 rounded-lg dark:bg-gray-700 flex items-center justify-center hover:ring-2 ring-gray-400 transition-all duration-300 focus:shadow`}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? (
        <BiSun className="text-gray-100 w-5 h-5" />
      ) : (
        <HiOutlineMoon className="text-gray-500 w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggler;
