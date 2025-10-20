import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CertificacionesGrilla from './CertificadosGrilla';

describe('CertificacionesGrilla', () => {
    const mockCertificaciones = [
        {
            title: 'Certificación React Developer',
            link: 'https://example.com/react',
        },
        {
            title: 'Certificación AWS Cloud Practitioner',
            link: 'https://example.com/aws',
        },
        {
            title: 'Certificación Python Expert',
            link: 'https://example.com/python',
        },
    ];

    it('debe renderizar el contenedor de la grilla', () => {
        const { container } = render(<CertificacionesGrilla certificaciones={mockCertificaciones} />);
        const grid = container.firstChild as HTMLElement;
        expect(grid).toBeInTheDocument();
    });

    it('debe aplicar las clases de Tailwind correctamente al contenedor', () => {
        const { container } = render(<CertificacionesGrilla certificaciones={mockCertificaciones} />);
        const grid = container.firstChild as HTMLElement;
        expect(grid).toHaveClass('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-6', 'justify-items-center');
    });

    it('debe renderizar todas las certificaciones', () => {
        render(<CertificacionesGrilla certificaciones={mockCertificaciones} />);
        expect(screen.getByText('Certificación React Developer')).toBeInTheDocument();
        expect(screen.getByText('Certificación AWS Cloud Practitioner')).toBeInTheDocument();
        expect(screen.getByText('Certificación Python Expert')).toBeInTheDocument();
    });

    it('debe renderizar el numero correcto de certificaciones', () => {
        render(<CertificacionesGrilla certificaciones={mockCertificaciones} />);
        const links = screen.getAllByRole('link');
        expect(links.length).toBe(3);
    });

    it('debe renderizar cada certificacion con su enlace correcto', () => {
        render(<CertificacionesGrilla certificaciones={mockCertificaciones} />);

        const reactLink = screen.getByRole('link', { name: /Certificación React Developer/i });
        expect(reactLink).toHaveAttribute('href', 'https://example.com/react');

        const awsLink = screen.getByRole('link', { name: /Certificación AWS Cloud Practitioner/i });
        expect(awsLink).toHaveAttribute('href', 'https://example.com/aws');

        const pythonLink = screen.getByRole('link', { name: /Certificación Python Expert/i });
        expect(pythonLink).toHaveAttribute('href', 'https://example.com/python');
    });

    it('debe renderizar correctamente con un array vacio', () => {
        const { container } = render(<CertificacionesGrilla certificaciones={[]} />);
        const grid = container.firstChild as HTMLElement;
        expect(grid).toBeInTheDocument();
        expect(grid.children.length).toBe(0);
    });

    it('debe renderizar correctamente con una sola certificacion', () => {
        const singleCert = [
            {
                title: 'Certificación Única',
                link: 'https://example.com/unica',
            },
        ];

        render(<CertificacionesGrilla certificaciones={singleCert} />);
        expect(screen.getByText('Certificación Única')).toBeInTheDocument();

        const links = screen.getAllByRole('link');
        expect(links.length).toBe(1);
    });

    it('debe pasar las props correctas a CertificacionCard', () => {
        render(<CertificacionesGrilla certificaciones={mockCertificaciones} />);

        mockCertificaciones.forEach((cert) => {
            expect(screen.getByText(cert.title)).toBeInTheDocument();
        });
    });

    it('debe usar el indice como key para cada certificacion', () => {
        const { container } = render(<CertificacionesGrilla certificaciones={mockCertificaciones} />);
        const grid = container.firstChild as HTMLElement;

        expect(grid.children.length).toBe(mockCertificaciones.length);
    });

    it('debe aceptar diferentes certificaciones como props', () => {
        const customCertificaciones = [
            {
                title: 'Certificación Node.js',
                link: 'https://nodejs.org/cert',
            },
            {
                title: 'Certificación Docker',
                link: 'https://docker.com/cert',
            },
        ];

        render(<CertificacionesGrilla certificaciones={customCertificaciones} />);

        expect(screen.getByText('Certificación Node.js')).toBeInTheDocument();
        expect(screen.getByText('Certificación Docker')).toBeInTheDocument();

        const links = screen.getAllByRole('link');
        expect(links.length).toBe(2);
    });
});
