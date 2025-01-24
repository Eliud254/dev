import React from 'react';
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          <a
            href="https://github.com/Eliud254"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/eliudobure/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
        <p className="text-gray-400 text-center">
          © 2025 Eliud Obure. All rights reserved.
        </p>
      </div>
    </footer>
  );
};