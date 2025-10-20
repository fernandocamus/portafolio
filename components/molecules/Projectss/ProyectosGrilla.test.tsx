import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProjectsGrid from './ProyectosGrilla';

describe('ProjectsGrid', () => {
    const mockProjects = [
        {
            image: 'https://example.com/project1.jpg',
            title: 'Proyecto React',
            description: 'Una aplicación web con React y TypeScript',
            technologies: ['React', 'TypeScript', 'Tailwind'],
            projectLink: 'https://github.com/usuario/proyecto1',
        },
        {
            image: 'https://example.com/project2.jpg',
            title: 'Proyecto Node.js',
            description: 'Una API REST con Node.js y Express',
            technologies: ['Node.js', 'Express', 'MongoDB'],
            projectLink: 'https://github.com/usuario/proyecto2',
        },
        {
            image: 'https://example.com/project3.jpg',
            title: 'Proyecto Python',
            description: 'Una aplicación de Machine Learning',
            technologies: ['Python', 'TensorFlow', 'Pandas'],
            projectLink: 'https://github.com/usuario/proyecto3',
        },
    ];

    it('debe renderizar el contenedor de la grilla', () => {
        const { container } = render(<ProjectsGrid projects={mockProjects} />);
        const grid = container.firstChild as HTMLElement;
        expect(grid).toBeInTheDocument();
    });

    it('debe aplicar las clases de Tailwind correctamente al contenedor', () => {
        const { container } = render(<ProjectsGrid projects={mockProjects} />);
        const grid = container.firstChild as HTMLElement;
        expect(grid).toHaveClass('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-8', 'justify-items-center');
    });

    it('debe renderizar todos los proyectos', () => {
        render(<ProjectsGrid projects={mockProjects} />);
        expect(screen.getByText('Proyecto React')).toBeInTheDocument();
        expect(screen.getByText('Proyecto Node.js')).toBeInTheDocument();
        expect(screen.getByText('Proyecto Python')).toBeInTheDocument();
    });

    it('debe renderizar el numero correcto de proyectos', () => {
        render(<ProjectsGrid projects={mockProjects} />);
        const links = screen.getAllByRole('link', { name: 'Ver en GitHub' });
        expect(links.length).toBe(3);
    });

    it('debe renderizar cada proyecto con su titulo correcto', () => {
        render(<ProjectsGrid projects={mockProjects} />);

        mockProjects.forEach((project) => {
            expect(screen.getByText(project.title)).toBeInTheDocument();
        });
    });

    it('debe renderizar cada proyecto con su descripcion correcta', () => {
        render(<ProjectsGrid projects={mockProjects} />);

        mockProjects.forEach((project) => {
            expect(screen.getByText(project.description)).toBeInTheDocument();
        });
    });

    it('debe renderizar correctamente con un array vacio', () => {
        const { container } = render(<ProjectsGrid projects={[]} />);
        const grid = container.firstChild as HTMLElement;
        expect(grid).toBeInTheDocument();
        expect(grid.children.length).toBe(0);
    });

    it('debe renderizar correctamente con un solo proyecto', () => {
        const singleProject = [mockProjects[0]];

        render(<ProjectsGrid projects={singleProject} />);
        expect(screen.getByText('Proyecto React')).toBeInTheDocument();

        const links = screen.getAllByRole('link', { name: 'Ver en GitHub' });
        expect(links.length).toBe(1);
    });

    it('debe pasar las props correctas a ProjectCard', () => {
        render(<ProjectsGrid projects={mockProjects} />);

        const images = screen.getAllByRole('img');
        expect(images[0]).toHaveAttribute('alt', 'Proyecto React');
        expect(images[1]).toHaveAttribute('alt', 'Proyecto Node.js');
        expect(images[2]).toHaveAttribute('alt', 'Proyecto Python');
    });

    it('debe renderizar las tecnologias de cada proyecto', () => {
        render(<ProjectsGrid projects={mockProjects} />);

        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getByText('TypeScript')).toBeInTheDocument();
        expect(screen.getByText('Node.js')).toBeInTheDocument();
        expect(screen.getByText('Python')).toBeInTheDocument();
    });

    it('debe usar el indice como key para cada proyecto', () => {
        const { container } = render(<ProjectsGrid projects={mockProjects} />);
        const grid = container.firstChild as HTMLElement;

        expect(grid.children.length).toBe(mockProjects.length);
    });

    it('debe aceptar diferentes proyectos como props', () => {
        const customProjects = [
            {
                image: 'https://otro.com/imagen.png',
                title: 'Proyecto Vue',
                description: 'Una app con Vue 3',
                technologies: ['Vue', 'Vite'],
                projectLink: 'https://github.com/otro/vue',
            },
        ];

        render(<ProjectsGrid projects={customProjects} />);

        expect(screen.getByText('Proyecto Vue')).toBeInTheDocument();
        expect(screen.getByText('Una app con Vue 3')).toBeInTheDocument();
        expect(screen.getByText('Vue')).toBeInTheDocument();
    });
});
