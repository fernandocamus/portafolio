import React from "react";

interface CertificacionProps {
    title: string;
    link: string;
}

const Certificacion: React.FC<CertificacionProps> = ({ title, link }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl p-8 w-64 h-32 cursor-pointer"
        >
            <h3 className="text-center text-lg font-semibold text-gray-700 dark:text-gray-200">
              {title}
            </h3>
        </a>
    );
};

export default Certificacion;
