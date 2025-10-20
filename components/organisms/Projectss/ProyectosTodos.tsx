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
            "Proyecto personal: Juego 2D tipo endless runner inspirado en el clásico Dino de Chrome, desarrollado en Unity con mecánicas de salto, esquive de obstáculos, sistema de puntuación y dificultad progresiva.",
        technologies: ["Unity", "C#"],
        projectLink: "https://github.com/fernandocamusr/MPINGU",
    },
    {
        image: "../assets/images/PortafolioProyecto.png",
        title: "Pagina Web - Portafolio",
        description:
            "Proyecto universitario: Portafolio personal creado en React y Tailwind CSS, aplicando atom design y componentes reutilizables.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "CSS"],
        projectLink: "https://github.com/fernandocamus/portafolio",
    },
    {
        image: "../assets/images/SistemaDeMicroservicios.png",
        title: "Pagina Web - Sistema de Microservicios",
        description:
            "Proyecto universitario: Sistema de gestión de clientes desarrollado con arquitectura de microservicios, implementando operaciones CRUD completas, documentación de API con Swagger y comunicación entre servicios..",
        technologies: ["Java", "Spring Boot", "Swagger"],
        projectLink: "https://github.com/fernandocamus/perfulandiaSPA-EF1",
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
