import React from 'react';

export const Education = ({ education }) => {
  return (
    <section id="education" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Technologies</h1>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution}</p>
              </div>
              <p className="text-blue-600 font-semibold mt-2 md:mt-0">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
