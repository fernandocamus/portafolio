import React from "react";
import ProyectosGrilla from "../../molecules/Projectss/ProyectosGrilla";

const projects = [
    {
        image: "../assets/images/HuertoHogarProyecto.png",
        title: "Tienda - Huerto Hogar",
        description:
            "Proyecto universitario: Web app para una tienda con sistema de registro en LocalStorage, visualización de productos y sistema de compras con su respectivo seguimiento y calificacion de compra.",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
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
        image: "../assets/images/PortafolioProyecto.png",
        title: "Pagina Web - Portafolio",
        description:
            "Proyecto universitario: Portafolio personal creado en React y Tailwind CSS, aplicando atom design y componentes reutilizables.",
        technologies: ["React", "TypeScript"],
        projectLink: "https://github.com/fernandocamus/portafolio",
    },
];

const TodosLosProyectos = () => {
    return (
        <section className="w-full pt-10 pb-16 flex flex-col items-center">
            <h2 className="text-fuchsia-600 text-4xl font-bold mb-10">Todos los Proyectos</h2>
            <ProyectosGrilla projects={projects} />
        </section>
    );
};

export default TodosLosProyectos;
