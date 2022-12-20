import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { BsMoonFill, BsFillSunFill } from 'react-icons/bs';

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  const renderChangeTheme = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <BsFillSunFill
          className="h-6 w-6"
          role="button"
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <BsMoonFill
          className="h-4 w-4"
          role="button"
          onClick={() => setTheme('dark')}
        />
      );
    }
  };
  return (
    <nav className="flex items-center justify-between py-4 md:py-8">
      <Link href="/">
        <Image
          className="cursor-pointer rounded-full"
          width={30}
          height={30}
          src="/images/logo.webp"
          alt="logo"
        />
      </Link>
      <ul className="flex items-center space-x-4">
      <li className="text-lg font-bold">
          <Link href="#projects">Projects</Link>
        </li>
        <li className="text-lg font-bold">
          <Link href="#about">About Me</Link>
        </li>
        <li className="text-lg font-bold">
          <Link href="#contact">Contact</Link>
        </li>
        {renderChangeTheme()}
      </ul>
    </nav>
  );
};

export default Navbar;
