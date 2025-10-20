import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router';
import HeaderSeccionProjectss from './HeaderSeccionProjectss';

describe('HeaderSeccionProjectss', () => {
    it('debe renderizar el header correctamente', () => {
        const { container } = render(
            <BrowserRouter>
                <HeaderSeccionProjectss />
            </BrowserRouter>
        );
        const header = container.querySelector('header');
        expect(header).toBeInTheDocument();
    });

    it('debe aplicar las clases de Tailwind correctamente al header', () => {
        const { container } = render(
            <BrowserRouter>
                <HeaderSeccionProjectss />
            </BrowserRouter>
        );
        const header = container.querySelector('header');
        expect(header).toHaveClass('w-full', 'flex', 'justify-between', 'items-center', 'p-4');
        expect(header).toHaveClass('sticky', 'top-0');
        expect(header).toHaveClass('bg-white', 'dark:bg-gray-950', 'shadow-md', 'z-50');
    });

    it('debe renderizar el logo "FC"', () => {
        render(
            <BrowserRouter>
                <HeaderSeccionProjectss />
            </BrowserRouter>
        );
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toBe('FC');
    });

    it('debe renderizar el h1 con las clases correctas', () => {
        render(
            <BrowserRouter>
                <HeaderSeccionProjectss />
            </BrowserRouter>
        );
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toHaveClass('text-xl', 'font-bold', 'text-gray-800', 'dark:text-gray-100');
    });

    it('debe aplicar la clase text-fuchsia-600 a la letra "C"', () => {
        render(
            <BrowserRouter>
                <HeaderSeccionProjectss />
            </BrowserRouter>
        );
        const heading = screen.getByRole('heading', { level: 1 });
        const span = heading.querySelector('span');
        expect(span).toHaveClass('text-fuchsia-600');
        expect(span?.textContent).toBe('C');
    });

    it('debe renderizar el componente MenuNavegacionProjectss', () => {
        render(
            <BrowserRouter>
                <HeaderSeccionProjectss />
            </BrowserRouter>
        );

        expect(screen.getByRole('link', { name: 'Inicio' })).toBeInTheDocument();
    });

    it('debe renderizar el enlace "Inicio" con href correcto', () => {
        render(
            <BrowserRouter>
                <HeaderSeccionProjectss />
            </BrowserRouter>
        );
        const link = screen.getByRole('link', { name: 'Inicio' });
        expect(link).toHaveAttribute('href', '/');
    });

    it('debe renderizar el componente CambioTema', () => {
        render(
            <BrowserRouter>
                <HeaderSeccionProjectss />
            </BrowserRouter>
        );

        const themeButton = screen.getByRole('button', { name: /Modo/i });
        expect(themeButton).toBeInTheDocument();
    });

    it('debe tener un contenedor flex para MenuNavegacionProjectss y CambioTema', () => {
        const { container } = render(
            <BrowserRouter>
                <HeaderSeccionProjectss />
            </BrowserRouter>
        );
        const flexContainer = container.querySelector('.flex.items-center.gap-4');
        expect(flexContainer).toBeInTheDocument();
    });

    it('debe aplicar las clases correctas al contenedor de navegacion', () => {
        const { container } = render(
            <BrowserRouter>
                <HeaderSeccionProjectss />
            </BrowserRouter>
        );
        const flexContainer = container.querySelector('.flex.items-center.gap-4');
        expect(flexContainer).toHaveClass('flex', 'items-center', 'gap-4');
    });

    it('debe tener la estructura correcta: logo, navegacion y tema', () => {
        const { container } = render(
            <BrowserRouter>
                <HeaderSeccionProjectss />
            </BrowserRouter>
        );
        const header = container.querySelector('header');

        expect(header?.children.length).toBe(2);
    });

    it('debe renderizar el logo como primer elemento', () => {
        const { container } = render(
            <BrowserRouter>
                <HeaderSeccionProjectss />
            </BrowserRouter>
        );
        const header = container.querySelector('header');
        const firstChild = header?.children[0];

        expect(firstChild?.tagName).toBe('H1');
    });

    it('debe ser un header sticky en la parte superior', () => {
        const { container } = render(
            <BrowserRouter>
                <HeaderSeccionProjectss />
            </BrowserRouter>
        );
        const header = container.querySelector('header');
        expect(header).toHaveClass('sticky', 'top-0');
    });

    it('debe tener z-index alto para estar sobre otros elementos', () => {
        const { container } = render(
            <BrowserRouter>
                <HeaderSeccionProjectss />
            </BrowserRouter>
        );
        const header = container.querySelector('header');
        expect(header).toHaveClass('z-50');
    });
});
