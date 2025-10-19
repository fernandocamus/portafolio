import React from "react";
import type {IconType} from "react-icons";

interface RedesSocialesProps {
  Icon: IconType;
  href: string;
  label: string;
}

const RedesSociales: React.FC<RedesSocialesProps> = ({ Icon, href, label }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
            <Icon/>
        </a>
    )
}

export default RedesSociales;
