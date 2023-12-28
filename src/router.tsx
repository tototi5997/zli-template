import Foo from "./layout/foo"
import { HashRouter, BrowserRouter } from "react-router-dom"

export type RouterType = "hash" | "browser"

const ROUTER_TYPE = "hash"

const routerConfig = [
  {
    path: "/",
    element: <Foo />,
  },
]

export const RouterComponent = ROUTER_TYPE === "hash" ? HashRouter : BrowserRouter

export { routerConfig }
