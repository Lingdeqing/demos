import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('react-flow', './pages/react-flow/react-flow.tsx'),
    route('react-flow-layout', './pages/react-flow/react-flow-layout.tsx')
] satisfies RouteConfig;
