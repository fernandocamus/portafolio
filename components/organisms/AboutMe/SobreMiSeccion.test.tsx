import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SobreMiSeccion from './SobreMiSeccion';

describe('SobreMiSeccion', () => {
    it('debe renderizar el contenedor principal', () => {
        const { container } = render(<SobreMiSeccion />);
        const mainDiv = container.firstChild as HTMLElement;
        expect(mainDiv).toBeInTheDocument();
    });

    it('debe aplicar las clases de Tailwind correctamente al contenedor', () => {
        const { container } = render(<SobreMiSeccion />);
        const mainDiv = container.firstChild as HTMLElement;
        expect(mainDiv).toHaveClass('relative', 'rounded-lg');
        expect(mainDiv).toHaveClass('my-10', 'md:my-20');
        expect(mainDiv).toHaveClass('mx-4', 'md:mx-20');
        expect(mainDiv).toHaveClass('text-center', 'px-5', 'text-white');
    });

    it('debe renderizar el componente SobreMi', () => {
        render(<SobreMiSeccion />);

        expect(screen.getByText('Sobre mí')).toBeInTheDocument();
    });

    it('debe renderizar el contenido del componente SobreMi', () => {
        render(<SobreMiSeccion />);

        expect(screen.getByText(/Apasionado por la tecnología y la programación/i)).toBeInTheDocument();
    });

    it('debe renderizar las tecnologias mencionadas en SobreMi', () => {
        render(<SobreMiSeccion />);
        expect(screen.getByText('HTML')).toBeInTheDocument();
        expect(screen.getByText('JavaScript')).toBeInTheDocument();
        expect(screen.getByText('React')).toBeInTheDocument();
    });

    it('debe contener un solo hijo directo (SobreMi)', () => {
        const { container } = render(<SobreMiSeccion />);
        const mainDiv = container.firstChild as HTMLElement;
        expect(mainDiv.children.length).toBe(1);
    });
});
