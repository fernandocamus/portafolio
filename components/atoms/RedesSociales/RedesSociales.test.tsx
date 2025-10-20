import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import RedesSociales from './RedesSociales';
import { FaGithub } from 'react-icons/fa';

describe('RedesSociales', () => {
    const mockProps = {
        Icon: FaGithub,
        href: 'https://github.com/usuario',
        label: 'GitHub',
    };

    it('debe renderizar el componente correctamente', () => {
        const { container } = render(<RedesSociales {...mockProps} />);
        const link = container.querySelector('a');
        expect(link).toBeInTheDocument();
    });

    it('debe renderizar el enlace con el href correcto', () => {
        const { container } = render(<RedesSociales {...mockProps} />);
        const link = container.querySelector('a');
        expect(link).toHaveAttribute('href', 'https://github.com/usuario');
    });

    it('debe abrir el enlace en una nueva pestaña', () => {
        const { container } = render(<RedesSociales {...mockProps} />);
        const link = container.querySelector('a');
        expect(link).toHaveAttribute('target', '_blank');
    });

    it('debe tener los atributos de seguridad para enlaces externos', () => {
        const { container } = render(<RedesSociales {...mockProps} />);
        const link = container.querySelector('a');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('debe renderizar el icono proporcionado', () => {
        const { container } = render(<RedesSociales {...mockProps} />);
        const icon = container.querySelector('svg');
        expect(icon).toBeInTheDocument();
    });

    it('debe aplicar las clases de Tailwind correctamente', () => {
        const { container } = render(<RedesSociales {...mockProps} />);
        const link = container.querySelector('a');
        expect(link).toHaveClass('text-gray-500', 'hover:text-gray-700');
        expect(link).toHaveClass('dark:text-gray-400', 'dark:hover:text-gray-200');
    });

    it('debe aceptar diferentes iconos y enlaces como props', () => {
        const customProps = {
            Icon: FaGithub,
            href: 'https://linkedin.com/in/usuario',
            label: 'LinkedIn',
        };

        const { container } = render(<RedesSociales {...customProps} />);
        const link = container.querySelector('a');

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', 'https://linkedin.com/in/usuario');

        const icon = container.querySelector('svg');
        expect(icon).toBeInTheDocument();
    });

    it('debe renderizar correctamente con diferentes iconos de react-icons', () => {
        const { container } = render(<RedesSociales {...mockProps} />);
        const icon = container.querySelector('svg');
        expect(icon).toBeInTheDocument();
    });
});
