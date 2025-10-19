import type { Route } from "./+types/home";
import HomeLayout from "../../components/layouts/home/HomeLayout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portafolio | Fernando Camus" },
    { name: "description", content: "Portafolio de Fernando Camus" },
  ];
}

export default function Home() {
  return <HomeLayout />;
}
