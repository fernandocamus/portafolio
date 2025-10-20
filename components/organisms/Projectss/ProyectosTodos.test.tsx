import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TodosLosProyectos from './ProyectosTodos';

describe('TodosLosProyectos', () => {
    it('debe renderizar la seccion correctamente', () => {
        const { container } = render(<TodosLosProyectos />);
        const section = container.querySelector('section');
        expect(section).toBeInTheDocument();
    });

    it('debe aplicar las clases de Tailwind correctamente a la seccion', () => {
        const { container } = render(<TodosLosProyectos />);
        const section = container.querySelector('section');
        expect(section).toHaveClass('w-full', 'pt-10', 'pb-16');
        expect(section).toHaveClass('flex', 'flex-col', 'items-center');
    });

    it('debe renderizar el titulo "Todos los Proyectos"', () => {
        render(<TodosLosProyectos />);
        expect(screen.getByText('Todos los Proyectos')).toBeInTheDocument();
    });

    it('debe renderizar el titulo como h2', () => {
        render(<TodosLosProyectos />);
        const heading = screen.getByRole('heading', { level: 2, name: 'Todos los Proyectos' });
        expect(heading).toBeInTheDocument();
    });

    it('debe aplicar las clases correctas al titulo', () => {
        render(<TodosLosProyectos />);
        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading).toHaveClass('text-fuchsia-600', 'text-4xl', 'font-bold', 'mb-10');
    });

    it('debe renderizar el componente ProyectosGrilla', () => {
        const { container } = render(<TodosLosProyectos />);
        const grid = container.querySelector('.grid');
        expect(grid).toBeInTheDocument();
    });

    it('debe renderizar todos los proyectos', () => {
        render(<TodosLosProyectos />);
        expect(screen.getByText('Tienda - Huerto Hogar')).toBeInTheDocument();
        expect(screen.getByText('Juego - MPINGU')).toBeInTheDocument();
        expect(screen.getByText('Pagina Web - Portafolio')).toBeInTheDocument();
        expect(screen.getByText('Pagina Web - Sistema de Microservicios')).toBeInTheDocument();
    });

    it('debe renderizar exactamente 4 proyectos', () => {
        render(<TodosLosProyectos />);
        const githubLinks = screen.getAllByRole('link', { name: 'Ver en GitHub' });
        expect(githubLinks.length).toBe(4);
    });

    it('debe renderizar las descripciones de los proyectos', () => {
        render(<TodosLosProyectos />);
        expect(screen.getByText(/Web app para una tienda con sistema de registro/i)).toBeInTheDocument();
        expect(screen.getByText(/Juego 2D tipo endless runner creado en Unity/i)).toBeInTheDocument();
        expect(screen.getByText(/Portafolio personal creado en React y Tailwind CSS/i)).toBeInTheDocument();
    });

    it('debe renderizar todas las tecnologías de los proyectos', () => {
        render(<TodosLosProyectos />);

        expect(screen.getByText('HTML')).toBeInTheDocument();
        expect(screen.getByText('JavaScript')).toBeInTheDocument();
        expect(screen.getByText('Bootstrap')).toBeInTheDocument();
        expect(screen.getByText('Unity')).toBeInTheDocument();
        expect(screen.getByText('C#')).toBeInTheDocument();
        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getByText('TypeScript')).toBeInTheDocument();
        expect(screen.getByText('Tailwind CSS')).toBeInTheDocument();
        expect(screen.getByText('Java')).toBeInTheDocument();
        expect(screen.getByText('Spring Boot')).toBeInTheDocument();
        expect(screen.getByText('Swagger')).toBeInTheDocument();

        const cssElements = screen.getAllByText('CSS');
        expect(cssElements.length).toBe(2);
    });

    it('debe pasar el array completo de proyectos a ProyectosGrilla', () => {
        render(<TodosLosProyectos />);

        const projectTitles = [
            'Tienda - Huerto Hogar',
            'Juego - MPINGU',
            'Pagina Web - Portafolio',
            'Pagina Web - Sistema de Microservicios'
        ];

        projectTitles.forEach(title => {
            expect(screen.getByText(title)).toBeInTheDocument();
        });
    });

    it('debe renderizar las imagenes de los proyectos', () => {
        render(<TodosLosProyectos />);
        const images = screen.getAllByRole('img');
        expect(images.length).toBe(4);
    });

    it('debe tener la estructura correcta: titulo y grilla', () => {
        const { container } = render(<TodosLosProyectos />);
        const section = container.querySelector('section');

        expect(section?.children.length).toBeGreaterThanOrEqual(2);
    });

    it('debe renderizar cada proyecto con su enlace correcto', () => {
        render(<TodosLosProyectos />);
        const links = screen.getAllByRole('link', { name: 'Ver en GitHub' });

        expect(links[0]).toHaveAttribute('href', 'https://github.com/fernandocamus/FSII-EP-1.git');
        expect(links[1]).toHaveAttribute('href', 'https://github.com/fernandocamusr/MPINGU');
        expect(links[2]).toHaveAttribute('href', 'https://github.com/fernandocamus/portafolio');
        expect(links[3]).toHaveAttribute('href', 'https://github.com/fernandocamus/portafolio');
    });
});
