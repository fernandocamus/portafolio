import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HeaderSeccion from './HeaderSeccion';

describe('HeaderSeccion', () => {
    it('debe renderizar el header correctamente', () => {
        const { container } = render(<HeaderSeccion />);
        const header = container.querySelector('header');
        expect(header).toBeInTheDocument();
    });

    it('debe aplicar las clases de Tailwind correctamente al header', () => {
        const { container } = render(<HeaderSeccion />);
        const header = container.querySelector('header');
        expect(header).toHaveClass('w-full', 'flex', 'justify-between', 'items-center', 'p-4');
        expect(header).toHaveClass('sticky', 'top-0');
        expect(header).toHaveClass('bg-white', 'dark:bg-gray-950', 'shadow-md', 'z-50');
    });

    it('debe renderizar el logo "FC"', () => {
        render(<HeaderSeccion />);

        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toBe('FC');
    });

    it('debe renderizar el h1 con las clases correctas', () => {
        render(<HeaderSeccion />);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toHaveClass('text-xl', 'font-bold', 'text-gray-800', 'dark:text-gray-100');
    });

    it('debe aplicar la clase text-fuchsia-600 a la letra "C"', () => {
        render(<HeaderSeccion />);
        const heading = screen.getByRole('heading', { level: 1 });
        const span = heading.querySelector('span');
        expect(span).toHaveClass('text-fuchsia-600');
        expect(span?.textContent).toBe('C');
    });

    it('debe renderizar el componente MenuNavegacion', () => {
        render(<HeaderSeccion />);

        expect(screen.getByRole('button', { name: 'Sobre mi' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Conocimientos' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Proyectos' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Certificaciones' })).toBeInTheDocument();
    });

    it('debe renderizar el componente CambioTema', () => {
        render(<HeaderSeccion />);

        const themeButton = screen.getByRole('button', { name: /Modo/i });
        expect(themeButton).toBeInTheDocument();
    });

    it('debe tener un contenedor flex para MenuNavegacion y CambioTema', () => {
        const { container } = render(<HeaderSeccion />);
        const flexContainer = container.querySelector('.flex.items-center.gap-4');
        expect(flexContainer).toBeInTheDocument();
    });

    it('debe aplicar las clases correctas al contenedor de navegacion', () => {
        const { container } = render(<HeaderSeccion />);
        const flexContainer = container.querySelector('.flex.items-center.gap-4');
        expect(flexContainer).toHaveClass('flex', 'items-center', 'gap-4');
    });

    it('debe tener la estructura correcta: logo, navegacion y tema', () => {
        const { container } = render(<HeaderSeccion />);
        const header = container.querySelector('header');

        expect(header?.children.length).toBe(2);
    });

    it('debe renderizar el logo como primer elemento', () => {
        const { container } = render(<HeaderSeccion />);
        const header = container.querySelector('header');
        const firstChild = header?.children[0];

        expect(firstChild?.tagName).toBe('H1');
    });

    it('debe ser un header sticky en la parte superior', () => {
        const { container } = render(<HeaderSeccion />);
        const header = container.querySelector('header');
        expect(header).toHaveClass('sticky', 'top-0');
    });

    it('debe tener z-index alto para estar sobre otros elementos', () => {
        const { container } = render(<HeaderSeccion />);
        const header = container.querySelector('header');
        expect(header).toHaveClass('z-50');
    });
});
