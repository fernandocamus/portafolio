import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import BotonNavegacion from './BotonNavegacion';

describe('BotonNavegacion', () => {
    const mockProps = {
        label: 'Sobre mí',
        targetId: 'about-section',
    };

    beforeEach(() => {
        document.body.innerHTML = '';
    });

    it('debe renderizar el boton con el label correcto', () => {
        render(<BotonNavegacion {...mockProps} />);
        expect(screen.getByText('Sobre mí')).toBeInTheDocument();
    });

    it('debe renderizar un boton correctamente', () => {
        render(<BotonNavegacion {...mockProps} />);
        const button = screen.getByRole('button', { name: 'Sobre mí' });
        expect(button).toBeInTheDocument();
    });

    it('debe hacer scroll a la seccion cuando se hace click', () => {
        const targetSection = document.createElement('div');
        targetSection.id = 'about-section';
        document.body.appendChild(targetSection);

        const scrollIntoViewMock = vi.fn();
        targetSection.scrollIntoView = scrollIntoViewMock;

        render(<BotonNavegacion {...mockProps} />);
        const button = screen.getByRole('button', { name: 'Sobre mí' });

        fireEvent.click(button);

        expect(scrollIntoViewMock).toHaveBeenCalledTimes(1);
        expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' });
    });

    it('no debe fallar si el elemento de destino no existe', () => {
        render(<BotonNavegacion {...mockProps} />);
        const button = screen.getByRole('button', { name: 'Sobre mí' });

        expect(() => fireEvent.click(button)).not.toThrow();
    });

    it('debe aplicar las clases de Tailwind correctamente', () => {
        render(<BotonNavegacion {...mockProps} />);
        const button = screen.getByRole('button', { name: 'Sobre mí' });

        expect(button).toHaveClass('bg-transparent');
        expect(button).toHaveClass('text-gray-600', 'dark:text-gray-200');
        expect(button).toHaveClass('px-2', 'py-1', 'md:px-4', 'md:py-2');
        expect(button).toHaveClass('rounded');
        expect(button).toHaveClass('text-sm', 'md:text-base');
        expect(button).toHaveClass('hover:bg-gray-200', 'dark:hover:bg-gray-700');
        expect(button).toHaveClass('whitespace-nowrap');
    });

    it('debe aceptar diferentes labels y targetIds como props', () => {
        const customProps = {
            label: 'Proyectos',
            targetId: 'projects-section',
        };

        const targetSection = document.createElement('div');
        targetSection.id = 'projects-section';
        document.body.appendChild(targetSection);

        const scrollIntoViewMock = vi.fn();
        targetSection.scrollIntoView = scrollIntoViewMock;

        render(<BotonNavegacion {...customProps} />);
        const button = screen.getByRole('button', { name: 'Proyectos' });

        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' });
    });

    it('debe llamar a scrollIntoView con el ID correcto', () => {
        const targetSection = document.createElement('div');
        targetSection.id = 'about-section';
        document.body.appendChild(targetSection);

        const scrollIntoViewMock = vi.fn();
        targetSection.scrollIntoView = scrollIntoViewMock;

        render(<BotonNavegacion {...mockProps} />);
        const button = screen.getByRole('button');

        fireEvent.click(button);

        expect(document.getElementById('about-section')).toBe(targetSection);
        expect(scrollIntoViewMock).toHaveBeenCalled();
    });
});
