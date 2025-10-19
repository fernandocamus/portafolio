import React from "react";
import ProjectsGrid from "../../molecules/Projectss/ProyectosGrilla";

const projects = [
  {
    image: "../assets/images/HuertoHogarProyecto.png",
    title: "Tienda - Huerto Hogar",
    description:
      "Proyecto universitario: Web app para una tienda con sistema de registro en LocalStorage, visualización de productos y sistema de compras con su respectivo seguimiento y calificacion de compra.",
    technologies: ["HTML", "CSS", "JS", "Bootstrap"],
    projectLink: "https://github.com/fernandocamus/FSII-EP-1.git",
  },
  {
    image: "../assets/images/MPINGUProyecto.png",
    title: "Juego - MPINGU",
    description:
      "Proyecto personal: Juego 2D tipo endless runner creado en Unity.",
    technologies: ["Unity", "C#"],
    projectLink: "https://github.com/fernandocamusr/MPINGU",
  },
  {
    image: "../assets/images/MPINGUProyecto.png",
    title: "Juego - MPINGU",
    description:
      "Proyecto personal: Juego 2D tipo endless runner creado en Unity.",
    technologies: ["Unity", "C#"],
    projectLink: "https://github.com/fernandocamusr/MPINGU",
  },

];

const ProjectsSection = () => {
  return (
    <section className="w-full pt-10 pb-16 flex flex-col items-center">
      <h2 className="text-gray-800 dark:text-gray-100 text-4xl font-bold mb-2">
        Proyectos desarrollados
      </h2>
      <p className="text-gray-500 dark:text-gray-300 mb-10 text-center max-w-xl">
        Explora los proyectos que he desarrollado, transformando ideas en
        soluciones temporales mediante la tecnologia y el diseño
      </p>
      <ProjectsGrid projects={projects} />
    </section>
  );
};

export default ProjectsSection;
