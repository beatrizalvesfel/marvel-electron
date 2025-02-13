import React, { ReactNode, useContext } from 'react';
import Header from '../components/Header/Header';
import { ThemeContext } from '../hooks/themeContext';
import Footer from './Footer/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;

  return (
    <>
      <div className={`${themeContext.theme} w-full min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <div className="relative">
          <Header />
          <button
            onClick={themeContext.toggleTheme}
            className="absolute top-4 right-4 px-4 py-2 bg-transparent"
          >
            {themeContext.theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>

        <div className="p-4">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;



