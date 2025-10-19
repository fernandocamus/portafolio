import React from 'react'
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const SobreMi = () => {
    return (
        <div className="w-full max-w-4xl border border-gray-400 dark:border-gray-700 rounded-2xl p-10 bg-gray-100 dark:bg-gray-900 backdrop-blur-sm">
            <Title level={2} className="!text-fuchsia-600 !text-4xl font-bold mb-6 text-left">
                Sobre mí
            </Title>

            <Paragraph className="!text-gray-800 dark:!text-gray-200 !text-lg  text-justify mb-4">
                Apasionado por la tecnología y la programación. Poseo competencia en
                diversas tecnologías y lenguajes de programación, como
                <span className="text-fuchsia-600"> HTML</span>,
                <span className="text-fuchsia-600"> JavaScript</span>,
                <span className="text-fuchsia-600"> React</span>,
                <span className="text-fuchsia-600"> Python</span>,
                <span className="text-fuchsia-600"> SQL</span> y demás.
            </Paragraph>

            <Paragraph className="!text-gray-800 dark:!text-gray-200 !text-lg text-base text-justify">
                Soy una persona profesional, altamente motivado y comprometido con estar
                siempre a la vanguardia. Busco constantemente <span className="text-fuchsia-600"> fortalecer mis habilidades </span>
                técnicas y contribuir a proyectos que promuevan el desarrollo. Me
                esfuerzo por aprender y crecer tanto a nivel profesional como personal,
                aplicando y expandiendo mis conocimientos en programación y en la
                creación de <span className="text-fuchsia-600"> soluciones tecnológicas seguras y efectivas</span>.
            </Paragraph>
        </div>
    );
};

export default SobreMi;
