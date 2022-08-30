import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsMoonStarsFill } from 'react-icons/bs';
import { FaSun } from 'react-icons/fa';

const NavBar = () => {
  const location = useLocation();
  const [theme, setTheme] = useState<string>('');
  const [path, setPath] = useState<string>('');

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  const handleClick = (theme: string) => {
    localStorage.setItem('theme', theme);
    setTheme(theme);
  };

  // Retrieving theme from storage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme || 'dark');
  }, []);

  // Setting theme
  useEffect(() => {
    theme === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [theme]);

  return (
    <header>
      <nav className="fixed top-0 w-full px-2 bg-white dark:bg-darkBlue-900 z-10">
        <div className="flex justify-between mx-auto py-4 font-semibold max-w-6xl items-center  px-4 ">
          <Link
            onClick={() => setPath('/')}
            to="/"
            className="text-2xl font-bold text-transparent bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text"
          >
            AT
          </Link>
          <ul className="flex space-x-3 items-center text-sm md:text-base">
            <li className="flex flex-col">
              <Link onClick={() => setPath('/')} to="/" className="group">
                <p className="">Portfolio</p>
                <div
                  className={`h-0.5 bg-gradient-to-r from-red-600 to-orange-500 transition-width group-hover:w-full ${
                    path === '/' ? `w-full` : 'w-0'
                  }`}
                ></div>
              </Link>
            </li>
            {/* ABOUT */}
            <li>
              <Link
                onClick={() => setPath('/about')}
                to="/about"
                className="group"
              >
                <p className="">About</p>
                <div
                  className={`h-0.5 bg-gradient-to-r from-red-600 to-orange-500 transition-width group-hover:w-full ${
                    path === '/about' ? `w-full` : 'w-0'
                  }`}
                ></div>
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setPath('/blog')}
                to="/blog"
                className="group"
              >
                <p className="">Blog</p>
                <div
                  className={`h-0.5 bg-gradient-to-r from-red-600 to-orange-500 transition-width group-hover:w-full ${
                    path === '/blog' ? `w-full` : 'w-0'
                  }`}
                ></div>
              </Link>
            </li>
            {/* CONTACT */}
            {/* <li>
              <Link
                onClick={() => setPath('/contact')}
                to="/contact"
                className="group"
              >
                <p className="">Contact</p>
                <div
                  className={`h-0.5 bg-gradient-to-r from-red-600 to-orange-500 transition-width group-hover:w-full ${
                    path === '/contact' ? `w-full` : 'w-0'
                  }`}
                ></div>
              </Link>
            </li> */}
            <li className="pl-2 pr-1">
              <button type="button">
                {theme === 'dark' ? (
                  <BsMoonStarsFill
                    onClick={() => handleClick('light')}
                    className="h-5 w-5"
                  />
                ) : (
                  <FaSun
                    onClick={() => handleClick('dark')}
                    className="h-5 w-5"
                  />
                )}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
