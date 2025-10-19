import React from "react";

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    technologies: string[];
    projectLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({image, title, description, technologies, projectLink,}) => {
    return (
        <div className="flex flex-col bg-white dark:bg-gray-900 shadow-md rounded-2xl overflow-hidden w-80 hover:shadow-lg transition-shadow duration-300">
            <img src={image} alt={title} className="w-full h-40 object-cover"/>

            <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                        {title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 text-justify">
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {technologies.map((tech, i) => (
                            <span
                                key={i}
                                className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-md text-gray-800 dark:text-gray-100"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex justify-between mt-auto">
                    <a
                        href={projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 text-sm bg-fuchsia-600 dark:bg-fuchsia-600 text-white rounded-md hover:opacity-80"
                    >
                        Ver en GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
