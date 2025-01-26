// Navbar.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = ({ scrollToSection, homeRef, projectsRef, technologiesRef, contactRef }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavigation = (ref) => {
        scrollToSection(ref);
        setIsMenuOpen(false); // Close mobile menu
    };

    return (
        <nav className="sticky top-0 bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-blue-600">Eliud Obure</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8"> {/* Desktop Navigation */}
                        <button onClick={() => handleNavigation(homeRef)} className="text-gray-600 hover:text-blue-600">Home</button>
                        <button onClick={() => handleNavigation(projectsRef)} className="text-gray-600 hover:text-blue-600">Projects</button>
                        <button onClick={() => handleNavigation(technologiesRef)} className="text-gray-600 hover:text-blue-600">Technologies</button>
                        <button onClick={() => handleNavigation(contactRef)} className="text-gray-600 hover:text-blue-600">Contact</button>
                    </div>

                    <div className="md:hidden flex items-center"> {/* Mobile Menu Button */}
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-blue-600">
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && ( // Mobile Navigation
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <button onClick={() => handleNavigation(homeRef)} className="block px-3 py-2 text-gray-600 hover:text-blue-600">Home</button>
                        <button onClick={() => handleNavigation(projectsRef)} className="block px-3 py-2 text-gray-600 hover:text-blue-600">Projects</button>
                        <button onClick={() => handleNavigation(technologiesRef)} className="block px-3 py-2 text-gray-600 hover:text-blue-600">Technologies</button>
                        <button onClick={() => handleNavigation(contactRef)} className="block px-3 py-2 text-gray-600 hover:text-blue-600">Contact</button>
                    </div>in
                </div>
            )}
        </nav>
    );
};