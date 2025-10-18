import React from "react";

interface BotonNavegacionProps {
    label: string;
    targetId: string;
}

const BotonNavegacion: React.FC<BotonNavegacionProps> = ({ label, targetId }) => {
    const Click = () => {
        const section = document.getElementById(targetId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <button onClick={Click} className="bg-transparent text-gray-600 dark:text-gray-200 px-2 py-1 md:px-4 md:py-2 rounded text-sm md:text-base hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors whitespace-nowrap">
            {label}
        </button>
    );
};

export default BotonNavegacion;
