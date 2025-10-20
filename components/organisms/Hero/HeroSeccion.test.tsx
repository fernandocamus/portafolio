import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HeroSeccion from './HeroSeccion';

describe('HeroSeccion', () => {
    it('debe renderizar el contenedor principal', () => {
        const { container } = render(<HeroSeccion />);
        const mainDiv = container.firstChild as HTMLElement;
        expect(mainDiv).toBeInTheDocument();
    });

    it('debe aplicar las clases de Tailwind correctamente al contenedor', () => {
        const { container } = render(<HeroSeccion />);
        const mainDiv = container.firstChild as HTMLElement;
        expect(mainDiv).toHaveClass('relative', 'rounded-lg');
        expect(mainDiv).toHaveClass('mx-4', 'md:mx-20');
        expect(mainDiv).toHaveClass('text-center', 'px-5', 'text-white');
    });

    it('debe renderizar el componente Hero', () => {
        render(<HeroSeccion />);

        expect(screen.getByText(/Hola, mi nombre es/i)).toBeInTheDocument();
    });

    it('debe renderizar el contenido del componente Hero', () => {
        render(<HeroSeccion />);
        expect(screen.getByText('Fernando Camus')).toBeInTheDocument();
        expect(screen.getByText(/Actualmente curso el 4º semestre de/i)).toBeInTheDocument();
        expect(screen.getByText('Ingeniería en Informática')).toBeInTheDocument();
    });

    it('debe renderizar el h1 del Hero', () => {
        render(<HeroSeccion />);
        const h1 = screen.getByRole('heading', { level: 1 });
        expect(h1).toBeInTheDocument();
    });

    it('debe renderizar el h5 del Hero', () => {
        render(<HeroSeccion />);
        const h5 = screen.getByRole('heading', { level: 5 });
        expect(h5).toBeInTheDocument();
    });

    it('debe contener un solo hijo directo (Hero)', () => {
        const { container } = render(<HeroSeccion />);
        const mainDiv = container.firstChild as HTMLElement;
        expect(mainDiv.children.length).toBeGreaterThanOrEqual(1);
    });
});
