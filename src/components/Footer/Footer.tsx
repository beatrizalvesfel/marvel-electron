import React from 'react';
import { LinkedinLogo, WhatsappLogo, GithubLogo } from "@phosphor-icons/react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2025 Marvel Heroes</p>
      <div className="mt-2 flex justify-center space-x-4">
        <a
          href="https://wa.me/5575999161771"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors"
        >
          <WhatsappLogo color="#fff" weight="fill" size={24} />

        </a>

        <a
          href="https://github.com/beatrizalvesfel"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors"
        >
          <GithubLogo color="#fff" weight="fill" size={24} />
        </a>

        <a
          href="https://www.linkedin.com/in/beatrizalvesfel"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors"
        >
          <LinkedinLogo color="#fff" weight="fill" size={24} />

        </a>
      </div>
    </footer>
  );
};

export default Footer;