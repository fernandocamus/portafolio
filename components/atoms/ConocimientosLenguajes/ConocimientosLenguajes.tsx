import React from "react";
import type {IconType} from "react-icons";

interface ConocimientosLenguajesProps {
    Icon: IconType;
    label: string;
    isHovered: boolean;
    onHover: () => void;
    onLeave: () => void;
}

const ConocimientosLenguajes: React.FC<ConocimientosLenguajesProps> = ({ Icon, label, isHovered, onHover, onLeave }) => {
    return (
        <div className={"flex flex-col items-center gap-2 transition-all duration-300 ease-out"} onMouseEnter={onHover} onMouseLeave={onLeave}>
            <div className={`text-grat-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-all duration-300 ease-out cursor-poiner ${isHovered ? 'scale-125' : 'scale-100'}`}>
                <Icon size={isHovered ? 64 : 48} />
            </div>
            <span className={`text-sm font-medium transition-all duration-300 ease-out text-gray-700 dark:text-gray-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                {label}
            </span>
        </div>
    );
};

export default ConocimientosLenguajes;
