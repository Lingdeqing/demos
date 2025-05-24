import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import BlockEditor from "../editor/editor";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <div>
    <div>2323</div>
    <Welcome></Welcome>
    <BlockEditor/>
  </div>;
}
