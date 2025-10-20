import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ConocimientosLenguajes from './ConocimientosLenguajes';
import { FaReact } from 'react-icons/fa';

describe('ConocimientosLenguajes', () => {
    const mockProps = {
        Icon: FaReact,
        label: 'React',
        isHovered: false,
        onHover: vi.fn(),
        onLeave: vi.fn(),
    };

    it('debe renderizar el label correctamente', () => {
        render(<ConocimientosLenguajes {...mockProps} />);
        expect(screen.getByText('React')).toBeInTheDocument();
    });

    it('debe renderizar el icono proporcionado', () => {
        const { container } = render(<ConocimientosLenguajes {...mockProps} />);
        const icon = container.querySelector('svg');
        expect(icon).toBeInTheDocument();
    });

    it('debe llamar a onHover cuando el mouse pasa por encima del icono', () => {
        const { container } = render(<ConocimientosLenguajes {...mockProps} />);
        const wrapper = container.firstChild as HTMLElement;

        fireEvent.mouseEnter(wrapper);
        expect(mockProps.onHover).toHaveBeenCalledTimes(1);
    });

    it('debe llamar a onLeave cuando el mouse sale del icono', () => {
        const { container } = render(<ConocimientosLenguajes {...mockProps} />);
        const wrapper = container.firstChild as HTMLElement;

        fireEvent.mouseLeave(wrapper);
        expect(mockProps.onLeave).toHaveBeenCalledTimes(1);
    });

    it('debe aplicar scale-100 cuando isHovered es false', () => {
        const { container } = render(<ConocimientosLenguajes {...mockProps} />);
        const iconContainer = container.querySelectorAll('div')[1]; // Segundo div
        expect(iconContainer).toHaveClass('scale-100');
        expect(iconContainer).not.toHaveClass('scale-125');
    });

    it('debe aplicar scale-125 cuando isHovered es true', () => {
        const { container } = render(<ConocimientosLenguajes {...mockProps} isHovered={true} />);
        const iconContainer = container.querySelectorAll('div')[1]; // Segundo div
        expect(iconContainer).toHaveClass('scale-125');
    });

    it('debe ocultar el label cuando isHovered es false', () => {
        render(<ConocimientosLenguajes {...mockProps} />);
        const label = screen.getByText('React');
        expect(label).toHaveClass('opacity-0', '-translate-y-2');
    });

    it('debe mostrar el label cuando isHovered es true', () => {
        render(<ConocimientosLenguajes {...mockProps} isHovered={true} />);
        const label = screen.getByText('React');
        expect(label).toHaveClass('opacity-100', 'translate-y-0');
    });

    it('debe aceptar diferentes iconos y labels como props', () => {
        const customProps = {
            ...mockProps,
            label: 'TypeScript',
        };
        render(<ConocimientosLenguajes {...customProps} />);
        expect(screen.getByText('TypeScript')).toBeInTheDocument();
    });
});
