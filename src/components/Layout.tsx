import React, { ReactNode } from 'react';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';

interface LayoutProps {
  children: ReactNode;
  onSearch: (query: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onSearch }) => {
  return (
    <div className='w-full min-h-screen'>
      <Header />

      <div className="bg-white shadow-sm p-4">
        <SearchBar onSearch={onSearch} />
      </div>

      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;

