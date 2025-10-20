import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router';
import ProyectosSeccion from './ProyectosSeccion';

describe('ProyectosSeccion', () => {
    it('debe renderizar la seccion correctamente', () => {
        const { container } = render(
            <BrowserRouter>
              <ProyectosSeccion />
            </BrowserRouter>
        );
        const section = container.querySelector('section');
        expect(section).toBeInTheDocument();
    });

    it('debe aplicar las clases de Tailwind correctamente a la seccion', () => {
        const { container } = render(
            <BrowserRouter>
                <ProyectosSeccion />
            </BrowserRouter>
        );
        const section = container.querySelector('section');
        expect(section).toHaveClass('w-full', 'pt-10', 'pb-16');
        expect(section).toHaveClass('flex', 'flex-col', 'items-center');
    });

    it('debe renderizar el titulo "Proyectos desarrollados"', () => {
        render(
            <BrowserRouter>
                <ProyectosSeccion />
            </BrowserRouter>
        );
        expect(screen.getByText('Proyectos desarrollados')).toBeInTheDocument();
    });

    it('debe renderizar el titulo como h2', () => {
        render(
            <BrowserRouter>
                <ProyectosSeccion />
            </BrowserRouter>
        );
        const heading = screen.getByRole('heading', { level: 2, name: 'Proyectos desarrollados' });
        expect(heading).toBeInTheDocument();
    });

    it('debe aplicar las clases correctas al titulo', () => {
        render(
            <BrowserRouter>
                <ProyectosSeccion />
            </BrowserRouter>
        );
        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading).toHaveClass('text-fuchsia-600', 'text-4xl', 'font-bold', 'mb-2');
    });

    it('debe renderizar el parrafo descriptivo', () => {
        render(
            <BrowserRouter>
                <ProyectosSeccion />
            </BrowserRouter>
        );
        expect(screen.getByText(/Explora los proyectos que he desarrollado/i)).toBeInTheDocument();
    });

    it('debe aplicar las clases correctas al parrafo', () => {
        const { container } = render(
            <BrowserRouter>
                <ProyectosSeccion />
            </BrowserRouter>
        );
        const paragraph = container.querySelector('p');
        expect(paragraph).toHaveClass('text-gray-500', 'dark:text-gray-300', 'mb-10', 'text-center', 'max-w-xl');
    });

    it('debe renderizar el componente ProyectosGrilla', () => {
        const { container } = render(
            <BrowserRouter>
                <ProyectosSeccion />
            </BrowserRouter>
        );
        const grid = container.querySelector('.grid');
        expect(grid).toBeInTheDocument();
    });

    it('debe renderizar todos los proyectos', () => {
        render(
            <BrowserRouter>
                <ProyectosSeccion />
            </BrowserRouter>
        );
        expect(screen.getByText('Tienda - Huerto Hogar')).toBeInTheDocument();
        expect(screen.getByText('Pagina Web - Portafolio')).toBeInTheDocument();
    });

    it('debe renderizar exactamente 2 proyectos', () => {
        render(
            <BrowserRouter>
                <ProyectosSeccion />
            </BrowserRouter>
        );
        const githubLinks = screen.getAllByRole('link', { name: 'Ver en GitHub' });
        expect(githubLinks.length).toBe(2);
    });

    it('debe renderizar el enlace "Ver más proyectos"', () => {
        render(
            <BrowserRouter>
                <ProyectosSeccion />
            </BrowserRouter>
        );
        expect(screen.getByRole('link', { name: 'Ver más proyectos' })).toBeInTheDocument();
    });

    it('debe tener el href correcto en el enlace "Ver más proyectos"', () => {
        render(
            <BrowserRouter>
                <ProyectosSeccion />
            </BrowserRouter>
        );
        const link = screen.getByRole('link', { name: 'Ver más proyectos' });
        expect(link).toHaveAttribute('href', '/proyectos');
    });

    it('debe aplicar las clases correctas al enlace "Ver más proyectos"', () => {
        render(
            <BrowserRouter>
                <ProyectosSeccion />
            </BrowserRouter>
        );
        const link = screen.getByRole('link', { name: 'Ver más proyectos' });
        expect(link).toHaveClass('mt-8', 'px-6', 'py-3');
        expect(link).toHaveClass('bg-fuchsia-600', 'text-white', 'font-semibold', 'rounded-lg');
        expect(link).toHaveClass('hover:bg-fuchsia-700', 'transition');
    });

    it('debe renderizar las tecnologias de cada proyecto', () => {
        render(
            <BrowserRouter>
                <ProyectosSeccion />
            </BrowserRouter>
        );
        expect(screen.getByText('HTML')).toBeInTheDocument();
        expect(screen.getByText('JavaScript')).toBeInTheDocument();
        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getByText('TypeScript')).toBeInTheDocument();
    });

    it('debe pasar el array de proyectos correcto a ProyectosGrilla', () => {
        render(
            <BrowserRouter>
                <ProyectosSeccion />
            </BrowserRouter>
        );

        expect(screen.getByText('Tienda - Huerto Hogar')).toBeInTheDocument();
        expect(screen.getByText('Pagina Web - Portafolio')).toBeInTheDocument();
    });

    it('debe tener la estructura correcta: titulo, descripcion, grilla y enlace', () => {
        const { container } = render(
            <BrowserRouter>
                <ProyectosSeccion />
            </BrowserRouter>
        );
        const section = container.querySelector('section');

        expect(section?.children.length).toBeGreaterThanOrEqual(3);
    });
});
