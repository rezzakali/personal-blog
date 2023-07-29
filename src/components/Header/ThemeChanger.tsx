import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { ImSun } from 'react-icons/im';

const ColorMode = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center justify-center">
      {theme === 'light' ? (
        <FaMoon
          className="cursor-pointer h-4 w-4 text-[#687385]"
          onClick={() => setTheme('dark')}
        />
      ) : (
        <ImSun
          className="cursor-pointer h-4 w-4 text-[#687385]"
          onClick={() => setTheme('light')}
        />
      )}
    </div>
  );
};

export default ColorMode;
