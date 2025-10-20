import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProjectCard from './Proyectos';

describe('ProjectCard', () => {
    const mockProps = {
        image: 'https://example.com/project.jpg',
        title: 'Mi Proyecto React',
        description: 'Una aplicación web increíble construida con React y TypeScript',
        technologies: ['React', 'TypeScript', 'Tailwind CSS'],
        projectLink: 'https://github.com/usuario/proyecto',
    };

    it('debe renderizar el titulo correctamente', () => {
        render(<ProjectCard {...mockProps} />);
        expect(screen.getByText('Mi Proyecto React')).toBeInTheDocument();
    });

    it('debe renderizar la descripcion correctamente', () => {
        render(<ProjectCard {...mockProps} />);
        expect(screen.getByText('Una aplicación web increíble construida con React y TypeScript')).toBeInTheDocument();
    });

    it('debe renderizar la imagen con src y alt correctos', () => {
        render(<ProjectCard {...mockProps} />);
        const image = screen.getByRole('img', { name: 'Mi Proyecto React' });
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', 'https://example.com/project.jpg');
        expect(image).toHaveAttribute('alt', 'Mi Proyecto React');
    });

    it('debe renderizar todas las tecnologias', () => {
        render(<ProjectCard {...mockProps} />);
        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getByText('TypeScript')).toBeInTheDocument();
        expect(screen.getByText('Tailwind CSS')).toBeInTheDocument();
    });

    it('debe renderizar el numero correcto de tecnologias', () => {
        const { container } = render(<ProjectCard {...mockProps} />);
        const techSpans = container.querySelectorAll('.text-xs.bg-gray-200');
        expect(techSpans.length).toBe(3);
    });

    it('debe renderizar el enlace a GitHub con el href correcto', () => {
        render(<ProjectCard {...mockProps} />);
        const link = screen.getByRole('link', { name: 'Ver en GitHub' });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', 'https://github.com/usuario/proyecto');
    });

    it('debe abrir el enlace en una nueva pestaña', () => {
        render(<ProjectCard {...mockProps} />);
        const link = screen.getByRole('link', { name: 'Ver en GitHub' });
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('debe renderizar el titulo dentro de un h3', () => {
        render(<ProjectCard {...mockProps} />);
        const heading = screen.getByRole('heading', { level: 3 });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Mi Proyecto React');
    });

    it('debe aplicar las clases de Tailwind correctamente al contenedor principal', () => {
        const { container } = render(<ProjectCard {...mockProps} />);
        const card = container.firstChild as HTMLElement;
        expect(card).toHaveClass('flex', 'flex-col');
        expect(card).toHaveClass('bg-white', 'dark:bg-gray-900');
        expect(card).toHaveClass('shadow-md', 'rounded-2xl', 'overflow-hidden');
        expect(card).toHaveClass('hover:shadow-lg', 'transition-shadow', 'duration-300');
    });

    it('debe aplicar las clases correctas a la imagen', () => {
        render(<ProjectCard {...mockProps} />);
        const image = screen.getByRole('img');
        expect(image).toHaveClass('w-full', 'h-40', 'object-cover');
    });

    it('debe aplicar las clases correctas al boton de GitHub', () => {
        render(<ProjectCard {...mockProps} />);
        const link = screen.getByRole('link', { name: 'Ver en GitHub' });
        expect(link).toHaveClass('px-3', 'py-2', 'text-sm');
        expect(link).toHaveClass('bg-fuchsia-600', 'dark:bg-fuchsia-600');
        expect(link).toHaveClass('text-white', 'rounded-md', 'hover:opacity-80');
    });

    it('debe aceptar diferentes props', () => {
        const customProps = {
            image: 'https://otro.com/imagen.png',
            title: 'Otro Proyecto',
            description: 'Descripción diferente',
            technologies: ['Vue', 'Node.js'],
            projectLink: 'https://github.com/otro/repo',
        };

        render(<ProjectCard {...customProps} />);

        expect(screen.getByText('Otro Proyecto')).toBeInTheDocument();
        expect(screen.getByText('Descripción diferente')).toBeInTheDocument();
        expect(screen.getByText('Vue')).toBeInTheDocument();
        expect(screen.getByText('Node.js')).toBeInTheDocument();

        const link = screen.getByRole('link', { name: 'Ver en GitHub' });
        expect(link).toHaveAttribute('href', 'https://github.com/otro/repo');
    });

    it('debe renderizar correctamente con un array vacio de tecnologias', () => {
        const propsWithoutTech = {
            ...mockProps,
            technologies: [],
        };

        const { container } = render(<ProjectCard {...propsWithoutTech} />);
        const techSpans = container.querySelectorAll('.text-xs.bg-gray-200');
        expect(techSpans.length).toBe(0);
    });
});
