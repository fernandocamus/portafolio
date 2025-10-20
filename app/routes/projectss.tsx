import type { Route } from "./+types/projectss";
import ProjectsLayout from "../../components/layouts/projectss/ProjectsLayout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Proyectos | Fernando Camus" },
    { name: "description", content: "Todos los proyectos desarrollados por mi" },
  ];
}

export default function ProjectsRoute() {
  return <ProjectsLayout />;
}
