import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Eliud254"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 p-3 hover:bg-gray-800 rounded-lg"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/eliudobure/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 p-3 hover:bg-gray-800 rounded-lg"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          <div className="w-full border-t border-gray-800 pt-6">
            <p className="text-gray-400 text-center text-sm">
              © 2025 Eliud Obure. All rights reserved.
            </p>
            <p className="text-gray-500 text-center text-xs mt-2">
              Software Engineer & Founder
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};