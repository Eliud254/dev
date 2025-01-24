import React from 'react';

const ProjectCard = ({ title, date, description, technologies, link, image }) => (
    <div className="w-64 h-auto bg-white rounded-lg shadow-md p-3 flex flex-col transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
        {image && (
            <div className="relative h-32 mb-2 overflow-hidden rounded-md">
                <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
        )}
        <h3 className="text-base font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-xs text-gray-500 mb-1">{date}</p>
        <p className="text-sm text-gray-600 flex-grow">{description}</p>
        <div className="mt-1">
            <ul className="flex flex-wrap gap-1">
                {technologies.map((tech) => (
                    <li key={tech} className="px-1 py-0.5 rounded-full bg-gray-200 text-gray-700 text-xs">
                        {tech}
                    </li>
                ))}
            </ul>
            {link && (
                <a href={link} target="_blank" rel="noopener noreferrer" className="mt-1 text-blue-600 hover:text-blue-700 block text-xs">
                    View Project
                </a>
            )}
        </div>
    </div>
);

export const Projects = ({ projects }) => {
    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Projects</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"> {/* Reduced grid gap here */}
                    {projects.map((project) => (
                        <div key={project.id} className="mx-2">
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectCard;