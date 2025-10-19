import React from "react";
import ProjectCard from "../../atoms/Projectss/Proyectos";

interface Project {
    image: string;
    title: string;
    description: string;
    technologies: string[];
    projectLink: string;
}

interface ProjectsGridProps {
    projects: Project[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    );
};

export default ProjectsGrid;
