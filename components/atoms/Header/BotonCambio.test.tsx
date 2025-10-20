import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import CambioTema from './BotonCambio';

describe('CambioTema', () => {
    beforeEach(() => {
        document.documentElement.classList.remove('dark');
    });

    it('debe renderizar el botón correctamente', () => {
        render(<CambioTema />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    it('debe mostrar el ícono de luna (HiMoon) inicialmente', () => {
        const { container } = render(<CambioTema />);
        const button = screen.getByRole('button');
        const icon = container.querySelector('svg');

        expect(icon).toBeInTheDocument();
        expect(button).toHaveAttribute('title', 'Modo oscuro');
    });

    it('debe cambiar el ícono al hacer clic', () => {
        const { container } = render(<CambioTema />);
        const button = screen.getByRole('button');

        fireEvent.click(button);
        expect(button).toHaveAttribute('title', 'Modo claro');

        fireEvent.click(button);
        expect(button).toHaveAttribute('title', 'Modo oscuro');
    });

    it('debe agregar la clase "dark" al documentElement al activar modo oscuro', () => {
        render(<CambioTema />);
        const button = screen.getByRole('button');

        fireEvent.click(button);
        expect(document.documentElement.classList.contains('dark')).toBe(true);
    });

    it('debe remover la clase "dark" al desactivar modo oscuro', () => {
        render(<CambioTema />);
        const button = screen.getByRole('button');

        fireEvent.click(button);
        expect(document.documentElement.classList.contains('dark')).toBe(true);

        fireEvent.click(button);
        expect(document.documentElement.classList.contains('dark')).toBe(false);
    });

    it('debe alternar entre modo claro y oscuro múltiples veces', () => {
        render(<CambioTema />);
        const button = screen.getByRole('button');

        fireEvent.click(button);
        expect(document.documentElement.classList.contains('dark')).toBe(true);

        fireEvent.click(button);
        expect(document.documentElement.classList.contains('dark')).toBe(false);

        fireEvent.click(button);
        expect(document.documentElement.classList.contains('dark')).toBe(true);
    });

    it('debe aplicar las clases de Tailwind correctamente al botón', () => {
        render(<CambioTema />);
        const button = screen.getByRole('button');

        expect(button).toHaveClass('p-2', 'rounded-lg');
        expect(button).toHaveClass('bg-gray-200', 'dark:bg-gray-700');
        expect(button).toHaveClass('hover:bg-gray-300', 'dark:hover:bg-gray-600');
        expect(button).toHaveClass('transition', 'duration-300');
    });

    it('debe renderizar el ícono con las clases correctas', () => {
        const { container } = render(<CambioTema />);
        const icon = container.querySelector('svg');

        expect(icon).toHaveClass('w-5', 'h-5');
    });
});
