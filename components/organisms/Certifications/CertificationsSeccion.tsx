import React from "react";
import CertificacionesGrilla from "../../molecules/Certifications/CertificadosGrilla";

const certificaciones = [
    {title: "AWS Certified Cloud Practitioner", link: "#",},
    {title: "Python Essentials 1", link: "https://www.credly.com/badges/00a55a4f-f93f-448b-8e7d-9be2e9469592/linked_in_profile",}
];

const CertificacionesSeccion = () => {
    return (
        <section className="w-full pt-2 pb-8 flex flex-col items-center">
            <h2 className="text-fuchsia-600 text-4xl font-bold mb-4">Certificaciones</h2>
            <CertificacionesGrilla certificaciones={certificaciones} />
        </section>
    );
};

export default CertificacionesSeccion;
