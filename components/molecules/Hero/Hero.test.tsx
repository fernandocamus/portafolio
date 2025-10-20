import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from './Hero';

describe('Hero', () => {
    it('debe renderizar el titulo principal correctamente', () => {
        render(<Hero />);
        expect(screen.getByText(/Hola, mi nombre es/i)).toBeInTheDocument();
    });

    it('debe renderizar el nombre "Fernando Camus" destacado', () => {
        render(<Hero />);
        expect(screen.getByText('Fernando Camus')).toBeInTheDocument();
    });

    it('debe renderizar el subtitulo correctamente', () => {
        render(<Hero />);
        expect(screen.getByText(/Actualmente curso el 4º semestre de/i)).toBeInTheDocument();
    });

    it('debe renderizar "Ingenieria en Informatica" destacado', () => {
        render(<Hero />);
        expect(screen.getByText('Ingeniería en Informática')).toBeInTheDocument();
    });

    it('debe renderizar el h1 con las clases correctas', () => {
        render(<Hero />);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toHaveClass('text-7xl', 'md:text-8xl', 'font-bold');
        expect(heading).toHaveClass('text-gray-900', 'dark:text-white');
        expect(heading).toHaveClass('mb-0', 'mt-24', 'md:mt-28');
    });

    it('debe renderizar el h5 con las clases correctas', () => {
        render(<Hero />);
        const subheading = screen.getByRole('heading', { level: 5 });
        expect(subheading).toHaveClass('text-base', 'md:text-lg', 'font-normal');
        expect(subheading).toHaveClass('text-gray-800', 'dark:text-white', 'text-center');
        expect(subheading).toHaveClass('mt-0', 'mb-0');
    });

    it('debe aplicar la clase text-fuchsia-600 al nombre', () => {
        const { container } = render(<Hero />);
        const nameSpan = screen.getByText('Fernando Camus');
        expect(nameSpan).toHaveClass('text-fuchsia-600');
    });

    it('debe aplicar la clase text-fuchsia-600 a la carrera', () => {
        const { container } = render(<Hero />);
        const careerSpan = screen.getByText('Ingeniería en Informática');
        expect(careerSpan).toHaveClass('text-fuchsia-600');
    });

    it('debe renderizar un h1 como titulo principal', () => {
        render(<Hero />);
        const h1 = screen.getByRole('heading', { level: 1 });
        expect(h1).toBeInTheDocument();
    });

    it('debe renderizar un h5 como subtitulo', () => {
        render(<Hero />);
        const h5 = screen.getByRole('heading', { level: 5 });
        expect(h5).toBeInTheDocument();
    });

    it('debe renderizar los elementos dentro de un Fragment', () => {
        const { container } = render(<Hero />);

        const headings = container.querySelectorAll('h1, h5');
        expect(headings.length).toBe(2);
    });
});
