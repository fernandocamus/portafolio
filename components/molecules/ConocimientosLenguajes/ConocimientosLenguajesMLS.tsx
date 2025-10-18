import {FaHtml5, FaCss3Alt, FaUnity, FaPython, FaJsSquare, FaJava, FaReact, FaGithubSquare} from "react-icons/fa";
import { SiMysql, SiSpringboot, SiTypescript} from "react-icons/si";
import { PiFileCSharp } from "react-icons/pi";
import ConocimientosLenguajesIcon from "../../atoms/ConocimientosLenguajes/ConocimientosLenguajes";
import { useState } from "react";


const ConocimientosLenguajes = ()=> {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const conocimientosData  = [
        {Icon: FaHtml5, label: "HTML"},
        {Icon: FaCss3Alt, label: "CSS"},
        {Icon: FaJsSquare, label: "JavaScript"},
        {Icon: SiTypescript, label: "TypeScript"},
        {Icon: FaJava, label: "Java"},
        {Icon: PiFileCSharp, label: "C#"},
        {Icon: FaPython, label: "Python"},
        {Icon: FaReact, label: "React"},
        {Icon: SiSpringboot, label: "Spring Boot"},
        {Icon: FaUnity, label: "Unity"},
        {Icon: SiMysql, label: "MySql"},
        {Icon: FaGithubSquare, label: "Git/GitHub"}
    ];

    return (
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center py-8">
            {conocimientosData .map((conocimiento, index) => (
                <div key={index} className={`transition-all duration-300 ease-out ${hoveredIndex !== null && hoveredIndex !== index ? 'scale-90 opacity-70' : 'scale-100 opacity-100'}`}>
                    <ConocimientosLenguajesIcon
                        Icon={conocimiento.Icon}
                        label={conocimiento.label}
                        isHovered={hoveredIndex === index}
                        onHover={() => setHoveredIndex(index)}
                        onLeave={() => setHoveredIndex(null)}
                    />
                </div>
            ))}
        </div>
    )
}

export default ConocimientosLenguajes;


