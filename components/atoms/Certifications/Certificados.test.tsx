import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Certificacion from './Certificados';

describe('Certificacion', () => {
    const mockProps = {
        title: 'Certificación React Developer',
        link: 'https://example.com/certificacion',
    };

    it('debe renderizar el titulo correctamente', () => {
        render(<Certificacion {...mockProps} />);
        expect(screen.getByText('Certificación React Developer')).toBeInTheDocument();
    });

    it('debe renderizar un enlace con el href correcto', () => {
        render(<Certificacion {...mockProps} />);
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', 'https://example.com/certificacion');
    });

    it('debe abrir el enlace en una nueva pestaña', () => {
        render(<Certificacion {...mockProps} />);
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('target', '_blank');
    });

    it('debe tener los atributos de seguridad para enlaces externos', () => {
        render(<Certificacion {...mockProps} />);
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('debe renderizar el titulo dentro de un h3', () => {
        render(<Certificacion {...mockProps} />);
        const heading = screen.getByRole('heading', { level: 3 });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Certificación React Developer');
    });

    it('debe aceptar diferentes titulos y enlaces', () => {
        const customProps = {
            title: 'Certificación AWS',
            link: 'https://aws.amazon.com/certification',
        };
        render(<Certificacion {...customProps} />);

        expect(screen.getByText('Certificación AWS')).toBeInTheDocument();
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', 'https://aws.amazon.com/certification');
    });
});
