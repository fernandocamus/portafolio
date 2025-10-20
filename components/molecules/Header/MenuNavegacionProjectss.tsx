import React from "react";
import { Link } from "react-router";

const MenuNavegacionProjectss: React.FC = () => {
    return (
        <nav>
            <Link to="." className="bg-transparent text-gray-600 dark:text-gray-200 px-2 py-1 md:px-4 md:py-2 rounded text-sm md:text-base hover:bg-gray-200 dark:hover:bg-gray-700 whitespace-nowrap">
                Inicio
            </Link>
        </nav>
    );
};

export default MenuNavegacionProjectss;


