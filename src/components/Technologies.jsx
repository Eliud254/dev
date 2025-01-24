import React from 'react';

const technologiesData = [
    { category: "Frontend", name: "JavaScript" },
    { category: "Frontend", name: "TypeScript" },
    { category: "Frontend", name: "React" },
    { category: "Frontend", name: "Next.js" },
    { category: "Frontend", name: "Tailwind CSS" },
    { category: "Backend", name: "Node.js" },
    { category: "Backend", name: "Express" },
    { category: "Backend", name: "Python" },
    { category: "Backend", name: "Django" },
    { category: "Database", name: "MySql" },
    { category: "Database", name: "PostgreSQL" },
    { category: "Database", name: "MongoDB" },
    {category: "Database", name: "Firebase"},
    { category: "Other", name: "Git" },
    { category: "Other", name: "AWS" },
    { category: "Other", name: "Docker" },
];

export const Technologies = () => {
    const categories = [...new Set(technologiesData.map(tech => tech.category))];

    return (
        <section id="technologies" className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-8 text-center tracking-tight">Technologies</h1>
                {categories.map(category => (
                    <div key={category} className="mb-10">
                        <div className="border-b border-gray-300 pb-2 mb-4">
                            <h2 className="text-xl font-semibold text-gray-800 tracking-wide">{category}</h2>
                        </div>
                        <div className="flex flex-wrap gap-2"> {/* Use flexbox for wrapping */}
                            {technologiesData.filter(tech => tech.category === category).map(tech => (
                                <span key={tech.name} className="px-3 py-1 bg-white rounded-full text-gray-800 text-sm font-medium shadow-sm hover:bg-gray-200 transition duration-200">
                                    {tech.name}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};