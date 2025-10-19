import React from "react";
import NavMenu from "../../molecules/Header/MenuNavegacion";

const Header: React.FC = () => {
    return (
        <header className="w-full flex justify-between items-center p-4 sticky top-0 bg-white dark:bg-gray-950 shadow-md z-50">
            <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">FC</h1>
            <div className="flex items-center gap-4">
                <NavMenu />
            </div>
        </header>
    );
};

export default Header;
