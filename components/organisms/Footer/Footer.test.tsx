import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from './Footer';

describe('Footer', () => {
    it('debe renderizar el footer correctamente', () => {
        const { container } = render(<Footer />);
        const footer = container.querySelector('footer');
        expect(footer).toBeInTheDocument();
    });

    it('debe renderizar el nombre "Fernando Camus"', () => {
        render(<Footer />);
        expect(screen.getByText('Fernando Camus')).toBeInTheDocument();
    });

    it('debe renderizar el titulo profesional', () => {
        render(<Footer />);
        expect(screen.getByText('Estudiante Ingenieria en Informatica')).toBeInTheDocument();
    });

    it('debe renderizar la ubicacion', () => {
        render(<Footer />);
        expect(screen.getByText('📍 Santiago, Chile')).toBeInTheDocument();
    });

    it('debe renderizar el h3 con el nombre', () => {
        render(<Footer />);
        const heading = screen.getByRole('heading', { level: 3, name: 'Fernando Camus' });
        expect(heading).toBeInTheDocument();
    });

    it('debe renderizar el titulo "Contacta conmigo"', () => {
        render(<Footer />);
        expect(screen.getByText('Contacta conmigo')).toBeInTheDocument();
    });

    it('debe renderizar el h4 con "Contacta conmigo"', () => {
        render(<Footer />);
        const heading = screen.getByRole('heading', { level: 4, name: 'Contacta conmigo' });
        expect(heading).toBeInTheDocument();
    });

    it('debe renderizar el email', () => {
        render(<Footer />);
        expect(screen.getByText('📧 fernando.camusr@gmail.com')).toBeInTheDocument();
    });

    it('debe renderizar los iconos de redes sociales', () => {
        const { container } = render(<Footer />);
        const icons = container.querySelectorAll('svg');
        expect(icons.length).toBe(3); // 1 LinkedIn + 2 GitHub
    });

    it('debe renderizar exactamente 3 enlaces de redes sociales', () => {
        const { container } = render(<Footer />);
        const links = container.querySelectorAll('a');
        expect(links.length).toBe(3);
    });

    it('debe renderizar el enlace de LinkedIn con el href correcto', () => {
        const { container } = render(<Footer />);
        const links = container.querySelectorAll('a');
        const linkedinLink = Array.from(links).find(link =>
            link.getAttribute('href')?.includes('linkedin.com')
        );
        expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/fernando-camus-rojas-3513a1307');
    });

    it('debe renderizar los enlaces de GitHub con los href correctos', () => {
        const { container } = render(<Footer />);
        const links = container.querySelectorAll('a');
        const githubLinks = Array.from(links).filter(link =>
            link.getAttribute('href')?.includes('github.com')
        );

        expect(githubLinks.length).toBe(2);
        expect(githubLinks[0]).toHaveAttribute('href', 'https://github.com/fernandocamusr');
        expect(githubLinks[1]).toHaveAttribute('href', 'https://github.com/fernandocamus');
    });

    it('debe renderizar el copyright', () => {
        render(<Footer />);
        expect(screen.getByText('© 2025 Fernando Camus.')).toBeInTheDocument();
    });

    it('debe renderizar el texto de tecnologias usadas', () => {
        render(<Footer />);
        expect(screen.getByText('Hecho con React, TypeScript y Tailwind CSS')).toBeInTheDocument();
    });

    it('debe aplicar las clases correctas al grid', () => {
        const { container } = render(<Footer />);
        const grid = container.querySelector('.grid');
        expect(grid).toHaveClass('grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-8', 'mb-8');
    });

    it('debe aplicar las clases correctas al h3', () => {
        render(<Footer />);
        const heading = screen.getByRole('heading', { level: 3 });
        expect(heading).toHaveClass('text-gray-800', 'dark:text-gray-100', 'text-xl', 'font-bold', 'mb-2');
    });

    it('debe aplicar las clases correctas al h4', () => {
        render(<Footer />);
        const heading = screen.getByRole('heading', { level: 4 });
        expect(heading).toHaveClass('text-gray-800', 'dark:text-gray-100', 'font-semibold', 'mb-4');
    });

    it('debe tener estructura de dos columnas en el grid', () => {
        const { container } = render(<Footer />);
        const grid = container.querySelector('.grid');
        expect(grid?.children.length).toBe(2);
    });

    it('debe pasar las props correctas a SocialIcon', () => {
        const { container } = render(<Footer />);
        const links = container.querySelectorAll('a');

        links.forEach(link => {
            expect(link).toHaveAttribute('target', '_blank');
            expect(link).toHaveAttribute('rel', 'noopener noreferrer');
        });
    });
});
