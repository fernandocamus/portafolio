import React from "react";
import CertificacionCard from "../../atoms/Certifications/Certificados";

interface Certificacion {
    title: string;
    link: string;
}

interface CertificacionesGrillaProps {
    certificaciones: Certificacion[];
}

const CertificacionesGrilla: React.FC<CertificacionesGrillaProps> = ({ certificaciones }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
            {certificaciones.map((cert, index) => (
                <CertificacionCard
                    key={index}
                    title={cert.title}
                    link={cert.link}
                />
            ))}
        </div>

    );
};

export default CertificacionesGrilla;
