import React from "react";
import { useState } from "react";
import {HiSun, HiMoon } from 'react-icons/hi'

const CambioTema = () => {
    const [ModoOscuro, setModoOscuro] = useState(false);

    const Tema = () => {
        const html = document.documentElement;
        const nModoOscuro = !ModoOscuro;
        html.classList.toggle("dark", nModoOscuro);
        setModoOscuro(nModoOscuro);
    };

    return (
        <button onClick={Tema} className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300" title={ModoOscuro ? "Modo claro" : "Modo oscuro"}>
            {ModoOscuro ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
        </button>
    );
};

export default CambioTema;
