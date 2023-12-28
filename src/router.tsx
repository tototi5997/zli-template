import { HashRouter, BrowserRouter, RouteObject, Navigate } from "react-router-dom"
import Home from "./pages/home"
import NotFoundPage from "./pages/404"

export type RouterType = "hash" | "browser"

const ROUTER_TYPE: RouterType = "hash"

// 路由类型
const routerMap = {
  hash: HashRouter,
  browser: BrowserRouter,
}

export const RouterComponent = routerMap[ROUTER_TYPE]

// 路由配置
export const routerConfig: RouteObject[] = [
  { path: "/", element: <Navigate to="/home" replace /> },
  {
    path: "/home",
    element: <Home />,
  },
  // 404 约定放在最下面
  {
    path: "*",
    element: <NotFoundPage />,
  },
]
