import React from 'react';

export const Technologies = () => {
    const languages = {
        proficient: ["JavaScript", "TypeScript", "Python"],
        intermediate: ["Golang", "C"],
        beginner: ["Ruby"]
    };

    const frameworks = ["React", "Next.js", "Tailwind", "Node", "Express", "Django", "TensorFlow"];
    
    const databases = ["MongoDB", "MySQL", "PostgreSQL", "Firebase"];
    
    const developerTools = ["Git", "Docker", "Jest", "AWS", "Google Cloud", "Postman"];

    const aiTools = [
        "OpenAI API", 
        "Anthropic Claude", 
        "LangChain", 
        "Hugging Face", 
        "PyTorch", 
        "Scikit-learn",
        "Gemini API",
        "Stable Diffusion",
        "Pinecone",
        "Vector DBs"
    ];

    const ProficiencyBadge = ({ level, tech }) => {
        const styles = {
            proficient: "bg-blue-600 text-white",
            intermediate: "bg-blue-100 text-blue-700 border border-blue-300",
            beginner: "bg-gray-100 text-gray-600 border border-gray-300"
        };
        
        return (
            <span className={`px-2 py-0.5 rounded text-xs font-medium ${styles[level]}`}>
                {tech}
            </span>
        );
    };

    return (
        <section id="technologies" className="py-12 md:py-16 bg-white overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="text-center mb-8 md:mb-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">Technologies & Tools</h1>
                    <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg px-4">
                        A comprehensive toolkit for building modern, scalable applications
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                    {/* Languages */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-5 hover:shadow-md transition-shadow">
                        <h2 className="text-base font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-300">
                            Languages
                        </h2>
                        <div className="space-y-2.5">
                            <div>
                                <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Proficient</span>
                                <div className="flex flex-wrap gap-1.5 mt-1.5">
                                    {languages.proficient.map(tech => (
                                        <ProficiencyBadge key={tech} level="proficient" tech={tech} />
                                    ))}
                                </div>
                            </div>
                            <div>
                                <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Intermediate</span>
                                <div className="flex flex-wrap gap-1.5 mt-1.5">
                                    {languages.intermediate.map(tech => (
                                        <ProficiencyBadge key={tech} level="intermediate" tech={tech} />
                                    ))}
                                </div>
                            </div>
                            <div>
                                <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Beginner</span>
                                <div className="flex flex-wrap gap-1.5 mt-1.5">
                                    {languages.beginner.map(tech => (
                                        <ProficiencyBadge key={tech} level="beginner" tech={tech} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Frameworks & Tools */}
                    <div className="bg-white border-l-4 border-blue-500 border-t border-r border-b border-gray-200 rounded-lg p-4 md:p-5 hover:shadow-md transition-shadow">
                        <h2 className="text-base font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-300">
                            Frameworks & Tools
                        </h2>
                        <div className="flex flex-wrap gap-1.5">
                            {frameworks.map(tech => (
                                <span 
                                    key={tech} 
                                    className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs font-medium border border-gray-200"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Databases */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-5 hover:shadow-md transition-shadow">
                        <h2 className="text-base font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-300">
                            Databases
                        </h2>
                        <div className="flex flex-wrap gap-1.5">
                            {databases.map(tech => (
                                <span 
                                    key={tech} 
                                    className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs font-medium border border-gray-200"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* AI/ML Tools */}
                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-lg p-4 md:p-5 hover:shadow-md transition-shadow lg:col-span-1">
                        <h2 className="text-base font-semibold text-gray-900 mb-3 pb-2 border-b border-purple-200">
                            AI/ML
                        </h2>
                        <div className="flex flex-wrap gap-1.5">
                            {aiTools.map(tech => (
                                <span 
                                    key={tech} 
                                    className="px-2 py-0.5 bg-white text-gray-700 rounded text-xs font-medium border border-purple-200 shadow-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Developer Tools */}
                    <div className="bg-white border-t-4 border-green-500 border-l border-r border-b border-gray-200 rounded-lg p-4 md:p-5 hover:shadow-md transition-shadow">
                        <h2 className="text-base font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-300">
                            Developer Tools
                        </h2>
                        <div className="flex flex-wrap gap-1.5">
                            {developerTools.map(tech => (
                                <span 
                                    key={tech} 
                                    className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs font-medium border border-gray-200"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};