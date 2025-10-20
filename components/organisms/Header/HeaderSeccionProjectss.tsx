import React from "react";
import MenuNavegacionProjectss from "../../molecules/Header/MenuNavegacionProjectss";
import CambioTema from "../../atoms/Header/BotonCambio";

const HeaderSeccionProjectss: React.FC = () => {
    return (
        <header className="w-full flex justify-between items-center p-4 sticky top-0 bg-white dark:bg-gray-950 shadow-md z-50">
            <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">F<span className="text-fuchsia-600">C</span></h1>
            <div className="flex items-center gap-4">
                <MenuNavegacionProjectss/>
                <CambioTema/>
            </div>
        </header>
    );
};

export default HeaderSeccionProjectss;
