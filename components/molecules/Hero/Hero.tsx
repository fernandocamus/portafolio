import React from 'react'
import {Typography} from "antd";

const { Title, Paragraph } = Typography;
const Hero = () => {
    return (
        <>
            <Title level={1} style={{ fontSize: "5rem", fontWeight: "bold", color:"white", marginBottom: 0, marginTop: 100 }}>
                Hola, mi nombre es <span className="text-fuchsia-600">Fernando Camus</span>
            </Title>

            <Title level={5} style={{ fontWeight: "normal", color:"white", textAlign: "center", marginTop: 0, marginBottom: 0 }}>
                Actualmente curso el 4º semestre de <span className="text-fuchsia-600">Ingeniería en Informática</span>
            </Title>
        </>
    )
}

export default Hero
