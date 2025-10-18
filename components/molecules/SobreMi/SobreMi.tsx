import React from 'react'
import {Typography} from "antd";

const { Title, Paragraph } = Typography;
const SobreMi = () => {
    return (
        <>
            <Title level={1} style={{ fontWeight: "bold", color:"white" }}>
                Estudiante de Ingenieria en informatica
            </Title>
            <Paragraph style={{ fontSize: "16px", maxWidth: "600px", margin: "0 auto", color:"white" }}>
                Pipipipipi pipipipi pipipipipipipipipipipipi pipipipipipipipi pipipipi
                pipipipi pipipipi pipipipipipipipi pipipipipipipipi
            </Paragraph>
        </>
    )
}

export default SobreMi
