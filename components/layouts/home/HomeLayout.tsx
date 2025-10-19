import React from "react";
import Footer from "../../organisms/Footer/Footer";
import SobreMiBanner from "../../organisms/AboutMe/SobreMiBanner";
import ConocimientosLenguajes from "../../molecules/ConocimientosLenguajes/ConocimientosLenguajesMLS";
import Header from "../../organisms/Header/Header";
import CertificacionesSeccion from "../../organisms/Certifications/CertificationsSection";

const HomeLayout = ()=> {
    return (
        <div className="flex flex-col items-center min-h-screen bg-white dark:bg-gray-950 transition-colors">
            <Header/>

            <section id="sobre-mi" className="flex flex-col items-center mt-10">
                <h1 className="text-gray-600 dark:text-gray-200 text-6xl font-bold mb-2">Hola, mi nombre es Fernando Camus</h1>
                <SobreMiBanner/>
            </section>

            <section id="conocimientos" className="flex flex-col items-center mt-10">
                <h2 className="text-gray-600 dark:text-gray-200 text-4xl font-bold mb-2">Conocimientos y Lenguajes</h2>
                <ConocimientosLenguajes/>
            </section>

            <section id="proyectos" className="flex flex-col items-center mt-10">
                <h2 className="text-gray-600 dark:text-gray-200 text-4xl font-bold mb-2">Proyectos</h2>

            </section>

            <section id="certificaciones" className="flex flex-col items-center mt-10">
                <h2 className="text-gray-600 dark:text-gray-200 text-4xl font-bold mb-2">Certificaciones</h2>
                <CertificacionesSeccion/>
            </section>

            <section className="flex flex-col items-center mt-10">
                <h2 className="text-gray-600 dark:text-gray-200 text-4xl font-bold mb-2">Genera tu QR</h2>

            </section>

            <footer className="w-full py-6 flex justify-center shadow-md bg-white dark:bg-gray-950">
                <Footer />
            </footer>
        </div>
    )
}

export default HomeLayout;

