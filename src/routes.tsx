import React from "react"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const routes = (
  darkMode: boolean,
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
) => [
  {
    path: "/",
    element: <MainLayout darkMode={darkMode} setDarkMode={setDarkMode} />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]

export default routes
