import React from 'react'
import {Typography} from "antd";

const { Title, Paragraph } = Typography;
const SobreMi = () => {
    return (
        <>
            <Title level={1} style={{ fontWeight: "bold", color:"white", marginBottom: 0, marginTop: 0 }}>
              Hola, mi nombre es Fernando Camus
            </Title>

            <Title level={5} style={{ fontWeight: "normal", color:"white", textAlign: "center", marginTop: 4, marginBottom: 16 }}>
                Actualmente curso el 4º semestre de Ingeniería en Informática
            </Title>

            <Paragraph style={{ fontSize: "16px", maxWidth: "600px", margin: "60px auto 10px auto", color:"white", textAlign: "justify" }}>
                Soy estudiante de Ingeniería en Informática, apasionado por la tecnología y la programación.
            </Paragraph>

            <Paragraph style={{ fontSize: "16px", maxWidth: "600px", margin: "10px auto 20px auto", color:"white", textAlign: "justify" }}>
                Estoy enfocado en fortalecer mis habilidades técnicas y contribuir a proyectos que promuevan el desarrollo.
                Busco aprender y crecer tanto a nivel profesional como personal, aplicando y expandiendo mis conocimientos en programación y en la creación de soluciones tecnológicas seguras y efectivas.
            </Paragraph>
        </>
    )
}

export default SobreMi
