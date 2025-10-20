import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import SocialIcon from "../../atoms/RedesSociales/RedesSociales";

export default function Footer() {
    const Contacto = [
        { Icon: FaLinkedin, href: "https://www.linkedin.com/in/fernando-camus-rojas-3513a1307", label: "LinkedIn" },
        { Icon: FaGithubSquare, href: "https://github.com/fernandocamusr", label: "GitHub U" },
        { Icon: FaGithubSquare, href: "https://github.com/fernandocamus", label: "GitHub Personal" }
    ];

    return (
        <footer>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

                    <div className="text-center md:text-left">
                        <h3 className="text-gray-800 dark:text-gray-100 text-xl font-bold mb-2">Fernando Camus</h3>
                        <p className="text-gray-600 dark:text-gray-400">Estudiante Ingenieria en Informatica</p>
                        <p className="text-gray-600 dark:text-gray-400">📍 Santiago, Chile</p>
                    </div>


                    <div className="text-center md:text-right">
                        <h4 className="text-gray-800 dark:text-gray-100 font-semibold mb-4">Contacta conmigo</h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">📧 fernando.camusr@gmail.com</p>
                        <div className="flex gap-4 justify-center md:justify-end">
                            {Contacto.map((social) => (
                                <SocialIcon
                                    key={social.label}
                                    Icon={social.Icon}
                                    href={social.href}
                                    label={social.label}
                                />
                            ))}
                        </div>
                    </div>
                  </div>


                <div className="text-center">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">© 2025 Fernando Camus. </p>
                    <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">Hecho con React, TypeScript y Tailwind CSS</p>
                </div>

            </div>
        </footer>
    );
}
