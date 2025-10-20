import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MenuNavegacion from './MenuNavegacion';

describe('MenuNavegacion', () => {
    const expectedSections = [
        { label: 'Sobre mi', id: 'sobre-mi' },
        { label: 'Conocimientos', id: 'conocimientos' },
        { label: 'Proyectos', id: 'proyectos' },
        { label: 'Certificaciones', id: 'certificaciones' },
    ];

    it('debe renderizar el nav correctamente', () => {
        const { container } = render(<MenuNavegacion />);
        const nav = container.querySelector('nav');
        expect(nav).toBeInTheDocument();
    });

    it('debe aplicar las clases de Tailwind correctamente al nav', () => {
        const { container } = render(<MenuNavegacion />);
        const nav = container.querySelector('nav');
        expect(nav).toHaveClass('flex', 'gap-4');
    });

    it('debe renderizar todos los botones de navegacion', () => {
        render(<MenuNavegacion />);

        expectedSections.forEach((section) => {
            const button = screen.getByRole('button', { name: section.label });
            expect(button).toBeInTheDocument();
        });
    });

    it('debe renderizar exactamente 4 botones', () => {
        render(<MenuNavegacion />);
        const buttons = screen.getAllByRole('button');
        expect(buttons.length).toBe(4);
    });

    it('debe renderizar los botones con los labels correctos', () => {
        render(<MenuNavegacion />);

        expect(screen.getByText('Sobre mi')).toBeInTheDocument();
        expect(screen.getByText('Conocimientos')).toBeInTheDocument();
        expect(screen.getByText('Proyectos')).toBeInTheDocument();
        expect(screen.getByText('Certificaciones')).toBeInTheDocument();
    });

    it('debe pasar las props correctas a BotonNavegacion', () => {
        render(<MenuNavegacion />);

        expectedSections.forEach((section) => {
            expect(screen.getByRole('button', { name: section.label })).toBeInTheDocument();
        });
    });

    it('debe usar el id como key para cada BotonNavegacion', () => {
        const { container } = render(<MenuNavegacion />);
        const nav = container.querySelector('nav');

        expect(nav?.children.length).toBe(4);
    });

    it('debe renderizar los botones en el orden correcto', () => {
        render(<MenuNavegacion />);
        const buttons = screen.getAllByRole('button');

        expect(buttons[0]).toHaveTextContent('Sobre mi');
        expect(buttons[1]).toHaveTextContent('Conocimientos');
        expect(buttons[2]).toHaveTextContent('Proyectos');
        expect(buttons[3]).toHaveTextContent('Certificaciones');
    });
});
