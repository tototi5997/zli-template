import { HashRouter, BrowserRouter } from "react-router-dom"
import Foo from "./layout/foo"

export type RouterType = "hash" | "browser"

// 路由类型
const ROUTER_TYPE = "hash"

// 路由配置
const routerConfig = [
  {
    path: "/",
    element: <Foo />,
  },
]

export const RouterComponent = ROUTER_TYPE === "hash" ? HashRouter : BrowserRouter

export { routerConfig }
