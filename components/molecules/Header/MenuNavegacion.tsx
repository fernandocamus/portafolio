import React from "react";
import BotonNavegacion from "../../atoms/Header/BotonNavegacion";

const MenuNavegacion: React.FC = () => {
    const sections = [
        { label: "Sobre mi", id: "sobre-mi" },
        { label: "Conocimientos", id: "conocimientos" },
        { label: "Proyectos", id: "proyectos" },
        { label: "Certificaciones", id: "certificaciones" },
    ];

    return (
        <nav className="flex gap-4">
            {sections.map((section) => (
                <BotonNavegacion key={section.id} label={section.label} targetId={section.id} />
            ))}
        </nav>
    );
};

export default MenuNavegacion;
