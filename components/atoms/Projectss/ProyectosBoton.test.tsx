import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router';
import { ProyectosBoton } from './ProyectosBoton';

describe('ProyectosBoton', () => {
    it('debe renderizar el componente Link', () => {
        const { container } = render(
            <BrowserRouter>
                <ProyectosBoton />
            </BrowserRouter>
        );
        const link = container.querySelector('a');
        expect(link).toBeInTheDocument();
    });

    it('debe tener el atributo href correcto', () => {
        const { container } = render(
            <BrowserRouter>
                <ProyectosBoton />
            </BrowserRouter>
        );
        const link = container.querySelector('a');
        expect(link).toHaveAttribute('href', '/proyectos');
    });

    it('debe renderizar un enlace de React Router', () => {
        const { container } = render(
            <BrowserRouter>
                <ProyectosBoton />
            </BrowserRouter>
        );
        const link = container.querySelector('a');
        expect(link).toBeInTheDocument();
        expect(link?.getAttribute('href')).toBe('/proyectos');
    });
});
