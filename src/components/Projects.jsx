import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, technologies, link, image, category, index }) => {
    // Vary card styles for visual interest
    const cardStyles = [
        { border: "border border-gray-200", shadow: "shadow-sm" },
        { border: "border-l-4 border-blue-500 border-t border-r border-b border-gray-200", shadow: "shadow" },
        { border: "border-2 border-green-200", shadow: "shadow-sm" },
        { border: "border border-gray-200", shadow: "shadow-sm" },
        { border: "border-t-4 border-blue-500 border-l border-r border-b border-gray-200", shadow: "shadow" },
        { border: "border border-gray-200", shadow: "shadow-sm" }
    ];
    
    const style = cardStyles[index % cardStyles.length];
    
    return (
        <div className={`bg-white ${style.border} ${style.shadow} rounded-lg overflow-hidden flex flex-col transition-all duration-200 hover:shadow-md h-full`}>
            {image && (
                <div className="relative h-44 md:h-48 overflow-hidden bg-gray-100">
                    <img 
                        src={image.startsWith('/') ? image : `/${image}`} 
                        alt={title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                    />
                    {category && (
                        <span className="absolute top-2 right-2 px-2.5 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-medium rounded">
                            {category}
                        </span>
                    )}
                </div>
            )}
            <div className="p-4 sm:p-5 flex-grow flex flex-col">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2.5 break-words">{title}</h3>
                <p className="text-sm text-gray-700 flex-grow mb-4 leading-relaxed break-words">{description}</p>
                <div className="mb-4">
                    <ul className="flex flex-wrap gap-1.5">
                        {technologies.map((tech) => (
                            <li key={tech} className="px-2 py-0.5 rounded bg-gray-100 text-gray-700 text-xs break-words">
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
                {link && (
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="mt-auto inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors group"
                    >
                        View Project 
                        <ExternalLink className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                )}
            </div>
        </div>
    );
};

export const Projects = ({ projects }) => {
    return (
        <section id="projects" className="py-16 md:py-20 bg-gray-50 overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="text-center mb-10 md:mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h1>
                    <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-4">
                        A selection of projects I've built from the ground up, translating concepts into products people can actually use.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} {...project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectCard;

