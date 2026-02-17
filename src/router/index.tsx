import { createBrowserRouter } from "react-router-dom"
import MainLayout from "@/layout/mainLayout"
import Home from "@/pages/home"
import Qa from "@/pages/qa"

export const router = createBrowserRouter([
  {
    element: <MainLayout />, // layout global
    children: [
      { path: "/", element: <Home /> },
      { path: "/qa", element: <Qa /> },
    ],
  },
])
