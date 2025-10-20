import React from "react";
import Footer from "../../organisms/Footer/Footer";
import TodosLosProyectos from "../../organisms/Projectss/ProyectosTodos";
import HeaderSeccionProjectss from "../../organisms/Header/HeaderSeccionProjectss";


const ProjectsLayout = ()=> {
    return (
        <div className="flex flex-col items-center min-h-screen bg-white dark:bg-gray-950">
            <header className="fixed top-0 left-0 w-full z-50 border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 shadow-sm">
                <HeaderSeccionProjectss/>
            </header>

            <section id="conocimientos" className="flex flex-col items-center mt-30 ">
                <TodosLosProyectos/>
            </section>


            <footer className="w-full py-6 flex justify-center border-t border-gray-300 dark:border-gray-700 shadow-md bg-white dark:bg-gray-950">
                <Footer />
            </footer>
        </div>
    )
}

export default ProjectsLayout;

