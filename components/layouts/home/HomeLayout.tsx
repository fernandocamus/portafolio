import React from "react";
import Footer from "../../organisms/Footer/Footer";
import SobreMiSeccion from "../../organisms/AboutMe/SobreMiSeccion";
import ConocimientosLenguajes from "../../molecules/ConocimientosLenguajes/ConocimientosLenguajesMLS";
import HeaderSeccion from "../../organisms/Header/HeaderSeccion";
import CertificacionesSeccion from "../../organisms/Certifications/CertificationsSeccion";
import ProyectosSeccion from "../../organisms/Projectss/ProyectosSeccion";
import HeroSeccion from "../../organisms/Hero/HeroSeccion"

const HomeLayout = ()=> {
    return (
        <div className="flex flex-col items-center min-h-screen bg-white dark:bg-gray-950">
            <header className="fixed top-0 left-0 w-full z-50 border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 shadow-sm">
                <HeaderSeccion/>
            </header>

            <section id="hero" className="flex flex-col items-center">
                <HeroSeccion/>
            </section>

            <section id="sobre-mi" className="flex flex-col items-center scroll-mt-7">
                <SobreMiSeccion/>
            </section>

            <section id="conocimientos" className="flex flex-col items-center mt-10 scroll-mt-24">
                <h2 className="text-fuchsia-600 text-4xl font-bold mb-2">Conocimientos y Lenguajes</h2>
                <ConocimientosLenguajes/>
            </section>

            <section id="proyectos" className="flex flex-col items-center mt-10 scroll-mt-10">
                <ProyectosSeccion/>
            </section>

            <section id="certificaciones" className="flex flex-col items-center mt-10 scroll-mt-24">
                <CertificacionesSeccion/>
            </section>

            <footer className="w-full py-6 flex justify-center border-t border-gray-300 dark:border-gray-700 shadow-md bg-white dark:bg-gray-950">
                <Footer />
            </footer>
        </div>
    )
}

export default HomeLayout;

