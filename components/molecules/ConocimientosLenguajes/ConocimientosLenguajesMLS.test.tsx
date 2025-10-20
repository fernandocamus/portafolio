import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ConocimientosLenguajes from './ConocimientosLenguajesMLS';

describe('ConocimientosLenguajes', () => {
    const expectedLabels = [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'Java',
        'C#',
        'Python',
        'React',
        'Spring Boot',
        'Unity',
        'MySql',
        'Git/GitHub',
        'Tailwind CSS',
        'Swagger',
    ];

    it('debe renderizar el contenedor principal', () => {
        const { container } = render(<ConocimientosLenguajes />);
        const mainDiv = container.firstChild as HTMLElement;
        expect(mainDiv).toBeInTheDocument();
    });

    it('debe aplicar las clases de Tailwind correctamente al contenedor', () => {
        const { container } = render(<ConocimientosLenguajes />);
        const mainDiv = container.firstChild as HTMLElement;
        expect(mainDiv).toHaveClass('flex', 'flex-col', 'md:flex-row', 'flex-wrap');
        expect(mainDiv).toHaveClass('justify-center', 'items-center', 'py-8');
    });

    it('debe renderizar todos los iconos de conocimientos', () => {
        const { container } = render(<ConocimientosLenguajes />);
        const icons = container.querySelectorAll('svg');
        expect(icons.length).toBeGreaterThanOrEqual(14);
    });

    it('debe renderizar todos los labels', () => {
        render(<ConocimientosLenguajes />);

        expectedLabels.forEach((label) => {
            expect(screen.getByText(label)).toBeInTheDocument();
        });
    });

    it('debe renderizar 14 elementos de conocimientos', () => {
        const { container } = render(<ConocimientosLenguajes />);
        const mainDiv = container.firstChild as HTMLElement;

        expect(mainDiv.children.length).toBe(14);
    });

    it('debe aplicar clases de transicion a los elementos wrapper', () => {
        const { container } = render(<ConocimientosLenguajes />);
        const mainDiv = container.firstChild as HTMLElement;
        const firstChild = mainDiv.children[0] as HTMLElement;
        expect(firstChild).toHaveClass('transition-all', 'duration-300', 'ease-out');
    });

    it('debe renderizar ConocimientosLenguajesIcon para cada conocimiento', () => {
        const { container } = render(<ConocimientosLenguajes />);
        const icons = container.querySelectorAll('svg');

        expect(icons.length).toBeGreaterThanOrEqual(14);
    });

    it('debe pasar las props correctas a ConocimientosLenguajesIcon', () => {
        render(<ConocimientosLenguajes />);

        expectedLabels.forEach((label) => {
            expect(screen.getByText(label)).toBeInTheDocument();
        });
    });

    it('debe aplicar scale-100 y opacity-100 inicialmente', () => {
        const { container } = render(<ConocimientosLenguajes />);
        const mainDiv = container.firstChild as HTMLElement;
        const firstWrapper = mainDiv.children[0] as HTMLElement;
        expect(firstWrapper).toHaveClass('scale-100', 'opacity-100');
    });
});
