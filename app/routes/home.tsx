import type { Route } from "./+types/home";
import Welcome from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SJ Travels" },
    { name: "description", content: "Welcome to SJ Travels!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
