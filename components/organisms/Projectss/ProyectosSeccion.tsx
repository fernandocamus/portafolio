import React from "react";
import ProyectosGrilla from "../../molecules/Projectss/ProyectosGrilla";
import { Link } from "react-router";

const proyectos = [
    {
        image: "../assets/images/HuertoHogarProyecto.png",
        title: "Tienda - Huerto Hogar",
        description:
            "Proyecto universitario: Web app para una tienda con sistema de registro en LocalStorage, visualización de productos y sistema de compras con su respectivo seguimiento y calificacion de compra.",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        projectLink: "https://github.com/fernandocamus/FSII-EP-1.git",
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

const ProyectosSeccion = () => {
    return (
        <section className="w-full pt-10 pb-16 flex flex-col items-center">
            <h2 className="text-fuchsia-600 text-4xl font-bold mb-2">Proyectos desarrollados</h2>
            <p className="text-gray-500 dark:text-gray-300 mb-10 text-center max-w-xl">
                Explora los proyectos que he desarrollado, transformando ideas en
                soluciones temporales mediante la tecnologia y el diseño
            </p>
            <ProyectosGrilla projects={proyectos} />

            <Link to="/proyectos" className="mt-8 px-6 py-3 bg-fuchsia-600 text-white font-semibold rounded-lg hover:bg-fuchsia-700 transition">
                Ver más proyectos
            </Link>
        </section>
    );
};

export default ProyectosSeccion;
