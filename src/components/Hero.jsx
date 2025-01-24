import React from 'react';
import { ChevronRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-50 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Eliud Obure
            </h1>
            <h2 className="text-2xl text-blue-600 mb-4">
            Software Engineer
            </h2>
            <p className="text-gray-600 mb-6">
            Results-driven Software Engineer passionate about crafting innovative
             and efficient solutions to complex problems. Proven ability to design,
              develop, and deploy high-quality software applications.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md flex items-center hover:bg-blue-700">
              Projects
              <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gray-200 overflow-hidden">
              <img
                src="./eliud.jpg"
                alt="Dr. Sarah Chen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
