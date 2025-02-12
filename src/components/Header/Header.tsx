import React from 'react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={`${className} bg-red-600 text-white p-4 text-center text-2xl font-bold `}>
      <h1>Wiki Marvel</h1>
    </header>
  );
};

export default Header;