import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CertificacionesSeccion from './CertificationsSeccion';

describe('CertificacionesSeccion', () => {
    it('debe renderizar la sección correctamente', () => {
        const { container } = render(<CertificacionesSeccion />);
        const section = container.querySelector('section');
        expect(section).toBeInTheDocument();
    });

    it('debe aplicar las clases de Tailwind correctamente a la seccion', () => {
        const { container } = render(<CertificacionesSeccion />);
        const section = container.querySelector('section');
        expect(section).toHaveClass('w-full', 'pt-2', 'pb-8');
        expect(section).toHaveClass('flex', 'flex-col', 'items-center');
    });

    it('debe renderizar el titulo "Certificaciones"', () => {
        render(<CertificacionesSeccion />);
        expect(screen.getByText('Certificaciones')).toBeInTheDocument();
    });

    it('debe renderizar el titulo como h2', () => {
        render(<CertificacionesSeccion />);
        const heading = screen.getByRole('heading', { level: 2, name: 'Certificaciones' });
        expect(heading).toBeInTheDocument();
    });

    it('debe aplicar las clases correctas al titulo', () => {
        render(<CertificacionesSeccion />);
        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading).toHaveClass('text-fuchsia-600', 'text-4xl', 'font-bold', 'mb-4');
    });

    it('debe renderizar el componente CertificacionesGrilla', () => {
        const { container } = render(<CertificacionesSeccion />);
        const grid = container.querySelector('.grid');
        expect(grid).toBeInTheDocument();
    });

    it('debe renderizar todas las certificaciones', () => {
        render(<CertificacionesSeccion />);
        expect(screen.getByText('AWS Certified Cloud Practitioner')).toBeInTheDocument();
        expect(screen.getByText('Python Essentials 1')).toBeInTheDocument();
    });

    it('debe renderizar exactamente 2 certificaciones', () => {
        render(<CertificacionesSeccion />);
        const links = screen.getAllByRole('link');
        expect(links.length).toBe(2);
    });

    it('debe renderizar cada certificacion con su enlace correcto', () => {
        render(<CertificacionesSeccion />);

        const awsLink = screen.getByRole('link', { name: /AWS Certified Cloud Practitioner/i });
        expect(awsLink).toHaveAttribute('href', '#');

        const pythonLink = screen.getByRole('link', { name: /Python Essentials 1/i });
        expect(pythonLink).toHaveAttribute('href', 'https://www.credly.com/badges/00a55a4f-f93f-448b-8e7d-9be2e9469592/linked_in_profile');
    });

    it('debe pasar el array de certificaciones correcto a CertificacionesGrilla', () => {
        render(<CertificacionesSeccion />);

        expect(screen.getByText('AWS Certified Cloud Practitioner')).toBeInTheDocument();
        expect(screen.getByText('Python Essentials 1')).toBeInTheDocument();
    });

    it('debe tener la estructura correcta: titulo seguido de grilla', () => {
        const { container } = render(<CertificacionesSeccion />);
        const section = container.querySelector('section');

        expect(section?.children.length).toBeGreaterThanOrEqual(2);
    });
});
