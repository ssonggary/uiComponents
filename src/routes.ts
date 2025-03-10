import Accordions from "./components/accotdion";
import Test1 from "./components/test1";
import Test2_react from "./components/test2/react";
import Test2_vanilla from "./components/test2/vanilla";

const routePaths = [
  "/",
  "/accotdion",
  "/test2",
  "/test2/vanilla",
  "/test2/react",
] as const;
export type ROUTE_PATH = (typeof routePaths)[number];

type BaseRoute = {
  key: ROUTE_PATH;
  link: ROUTE_PATH;
  name: string;
};

export type ParentRoute = BaseRoute & {
  children: ROUTE_PATH[];
};
export type ChildRoute = BaseRoute & {
  children: ((props: unknown) => JSX.Element) | null;
};
export type ROUTE = ParentRoute | ChildRoute;

export const routes: Record<ROUTE_PATH, ROUTE> = {
  "/": {
    key: "/",
    link: "/",
    name: "root",
    children: ["/accotdion", "/test2"],
  },
  "/accotdion": {
    key: "/accotdion",
    link: "/accotdion",
    name: "아코디언",
    children: Accordions,
  },
  "/test2": {
    key: "/test2",
    link: "/test2/vanilla",
    name: "테스트2",
    children: ["/test2/vanilla", "/test2/react"],
  },
  "/test2/vanilla": {
    key: "/test2/vanilla",
    link: "/test2/vanilla",
    name: "vanilla",
    children: Test2_vanilla,
  },
  "/test2/react": {
    key: "/test2/react",
    link: "/test2/react",
    name: "react",
    children: Test2_react,
  },
};

export const isParentRoute = (route: ROUTE): route is ParentRoute =>
  Array.isArray(route.children);

export const gnbRootList = (routes["/"] as ParentRoute).children.map(
  (r) => routes[r]
);
