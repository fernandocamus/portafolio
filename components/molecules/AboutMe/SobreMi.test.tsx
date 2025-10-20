import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SobreMi from './SobreMi';

describe('SobreMi', () => {
    it('debe renderizar el titulo "Sobre mí"', () => {
        render(<SobreMi />);
        expect(screen.getByText('Sobre mí')).toBeInTheDocument();
    });

    it('debe renderizar el titulo como h2', () => {
        render(<SobreMi />);
        const heading = screen.getByRole('heading', { level: 2, name: 'Sobre mí' });
        expect(heading).toBeInTheDocument();
    });

    it('debe renderizar el primer parrafo con las tecnologias mencionadas', () => {
        render(<SobreMi />);
        expect(screen.getByText(/Apasionado por la tecnología y la programación/i)).toBeInTheDocument();
    });

    it('debe renderizar las tecnologias destacadas en el primer parrafo', () => {
        render(<SobreMi />);
        expect(screen.getByText('HTML')).toBeInTheDocument();
        expect(screen.getByText('JavaScript')).toBeInTheDocument();
        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getByText('Python')).toBeInTheDocument();
        expect(screen.getByText('SQL')).toBeInTheDocument();
    });

    it('debe renderizar el segundo parrafo con informacion profesional', () => {
        render(<SobreMi />);
        expect(screen.getByText(/Soy una persona profesional/i)).toBeInTheDocument();
    });

    it('debe renderizar las frases destacadas en el segundo parrafo', () => {
        render(<SobreMi />);
        expect(screen.getByText('fortalecer mis habilidades')).toBeInTheDocument();
        expect(screen.getByText('soluciones tecnológicas seguras y efectivas')).toBeInTheDocument();
    });

    it('debe aplicar las clases de Tailwind correctamente al contenedor', () => {
        const { container } = render(<SobreMi />);
        const mainDiv = container.firstChild as HTMLElement;
        expect(mainDiv).toHaveClass('w-full', 'max-w-4xl');
        expect(mainDiv).toHaveClass('border', 'border-gray-400', 'dark:border-gray-700');
        expect(mainDiv).toHaveClass('rounded-2xl', 'p-10');
        expect(mainDiv).toHaveClass('bg-gray-100', 'dark:bg-gray-900', 'backdrop-blur-sm');
    });

    it('debe aplicar las clases correctas al titulo', () => {
        render(<SobreMi />);
        const title = screen.getByRole('heading', { level: 2 });
        expect(title).toHaveClass('!text-fuchsia-600', '!text-4xl', 'font-bold', 'mb-6', 'text-left');
    });

    it('debe aplicar la clase text-fuchsia-600 a los spans de tecnologias', () => {
        const { container } = render(<SobreMi />);
        const techSpans = container.querySelectorAll('.text-fuchsia-600');
        expect(techSpans.length).toBeGreaterThanOrEqual(7);
    });

    it('debe renderizar dos parrafos de Typography', () => {
        const { container } = render(<SobreMi />);
        const paragraphs = container.querySelectorAll('.ant-typography');
        expect(paragraphs.length).toBeGreaterThanOrEqual(2);
    });

    it('debe aplicar las clases correctas a los parrafos', () => {
        const { container } = render(<SobreMi />);
        const firstParagraph = container.querySelectorAll('.ant-typography')[1]; // Primer Paragraph
        expect(firstParagraph).toHaveClass('!text-gray-800', 'dark:!text-gray-200', '!text-lg');
    });

    it('debe renderizar el contenido completo del primer parrafo', () => {
        render(<SobreMi />);
        const text = screen.getByText(/diversas tecnologías y lenguajes de programación/i);
        expect(text).toBeInTheDocument();
    });

    it('debe renderizar el contenido completo del segundo parrafo', () => {
        render(<SobreMi />);
        const text = screen.getByText(/aplicando y expandiendo mis conocimientos/i);
        expect(text).toBeInTheDocument();
    });
});
