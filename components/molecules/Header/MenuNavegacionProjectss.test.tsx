import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router';
import MenuNavegacionProjectss from './MenuNavegacionProjectss';

describe('MenuNavegacionProjectss', () => {
    it('debe renderizar el nav correctamente', () => {
        const { container } = render(
            <BrowserRouter>
                <MenuNavegacionProjectss />
            </BrowserRouter>
        );
        const nav = container.querySelector('nav');
        expect(nav).toBeInTheDocument();
    });

    it('debe renderizar el enlace "Inicio"', () => {
        render(
            <BrowserRouter>
                <MenuNavegacionProjectss />
            </BrowserRouter>
        );
        expect(screen.getByText('Inicio')).toBeInTheDocument();
    });

    it('debe renderizar el enlace como un link accesible', () => {
        render(
            <BrowserRouter>
                <MenuNavegacionProjectss />
            </BrowserRouter>
        );
        const link = screen.getByRole('link', { name: 'Inicio' });
        expect(link).toBeInTheDocument();
    });

    it('debe tener el atributo href correcto', () => {
        render(
            <BrowserRouter>
                <MenuNavegacionProjectss />
            </BrowserRouter>
        );
        const link = screen.getByRole('link', { name: 'Inicio' });
        expect(link).toHaveAttribute('href', '/');
    });

    it('debe aplicar las clases de Tailwind correctamente al enlace', () => {
        render(
            <BrowserRouter>
                <MenuNavegacionProjectss />
            </BrowserRouter>
        );
        const link = screen.getByRole('link', { name: 'Inicio' });

        expect(link).toHaveClass('bg-transparent');
        expect(link).toHaveClass('text-gray-600', 'dark:text-gray-200');
        expect(link).toHaveClass('px-2', 'py-1', 'md:px-4', 'md:py-2');
        expect(link).toHaveClass('rounded');
        expect(link).toHaveClass('text-sm', 'md:text-base');
        expect(link).toHaveClass('hover:bg-gray-200', 'dark:hover:bg-gray-700');
        expect(link).toHaveClass('whitespace-nowrap');
    });

    it('debe ser un enlace de React Router', () => {
        const { container } = render(
            <BrowserRouter>
                <MenuNavegacionProjectss />
            </BrowserRouter>
        );
        const link = container.querySelector('a');
        expect(link).toBeInTheDocument();
        expect(link?.getAttribute('href')).toBe('/');
    });
});
