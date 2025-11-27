// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = ({ scrollToSection, homeRef, aboutRef, projectsRef, technologiesRef, contactRef }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigation = (ref) => {
        scrollToSection(ref);
        setIsMenuOpen(false);
    };

    return (
        <nav className={`sticky top-0 z-50 transition-all duration-300 overflow-x-hidden ${
            scrolled 
                ? 'bg-gradient-to-r from-blue-50/95 to-green-50/95 backdrop-blur-md shadow-lg' 
                : 'bg-gradient-to-r from-blue-50 to-green-50 shadow-md'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex justify-between items-center h-16 sm:h-20">
                    <div className="flex items-center min-w-0">
                        <button 
                            onClick={() => handleNavigation(homeRef)}
                            className="text-xl sm:text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer truncate"
                        >
                            Eliud Obure
                        </button>
                    </div>

                    <div className="hidden md:flex items-center space-x-1 flex-shrink-0">
                        <button 
                            onClick={() => handleNavigation(homeRef)} 
                            className="px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-700 hover:text-blue-600 hover:bg-white/60 rounded-lg transition-all duration-200 font-medium whitespace-nowrap"
                        >
                            Home
                        </button>
                        <button 
                            onClick={() => handleNavigation(aboutRef)} 
                            className="px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-700 hover:text-blue-600 hover:bg-white/60 rounded-lg transition-all duration-200 font-medium whitespace-nowrap"
                        >
                            About
                        </button>
                        <button 
                            onClick={() => handleNavigation(projectsRef)} 
                            className="px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-700 hover:text-blue-600 hover:bg-white/60 rounded-lg transition-all duration-200 font-medium whitespace-nowrap"
                        >
                            Projects
                        </button>
                        <button 
                            onClick={() => handleNavigation(technologiesRef)} 
                            className="px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-700 hover:text-blue-600 hover:bg-white/60 rounded-lg transition-all duration-200 font-medium whitespace-nowrap"
                        >
                            Technologies
                        </button>
                        <button 
                            onClick={() => handleNavigation(contactRef)} 
                            className="px-3 sm:px-4 py-2 text-sm sm:text-base text-gray-700 hover:text-blue-600 hover:bg-white/60 rounded-lg transition-all duration-200 font-medium whitespace-nowrap"
                        >
                            Contact
                        </button>
                    </div>

                    <div className="md:hidden flex items-center flex-shrink-0">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)} 
                            className="p-2 text-gray-700 hover:text-blue-600 hover:bg-white/60 rounded-lg transition-all"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden border-t border-blue-100 bg-gradient-to-r from-blue-50 to-green-50 overflow-x-hidden">
                    <div className="px-4 pt-2 pb-4 space-y-1">
                        <button 
                            onClick={() => handleNavigation(homeRef)} 
                            className="block w-full px-4 py-3 text-left text-gray-700 hover:text-blue-600 hover:bg-white/60 rounded-lg transition-all font-medium"
                        >
                            Home
                        </button>
                        <button 
                            onClick={() => handleNavigation(aboutRef)} 
                            className="block w-full px-4 py-3 text-left text-gray-700 hover:text-blue-600 hover:bg-white/60 rounded-lg transition-all font-medium"
                        >
                            About
                        </button>
                        <button 
                            onClick={() => handleNavigation(projectsRef)} 
                            className="block w-full px-4 py-3 text-left text-gray-700 hover:text-blue-600 hover:bg-white/60 rounded-lg transition-all font-medium"
                        >
                            Projects
                        </button>
                        <button 
                            onClick={() => handleNavigation(technologiesRef)} 
                            className="block w-full px-4 py-3 text-left text-gray-700 hover:text-blue-600 hover:bg-white/60 rounded-lg transition-all font-medium"
                        >
                            Technologies
                        </button>
                        <button 
                            onClick={() => handleNavigation(contactRef)} 
                            className="block w-full px-4 py-3 text-left text-gray-700 hover:text-blue-600 hover:bg-white/60 rounded-lg transition-all font-medium"
                        >
                            Contact
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};