import React from "react"
import MainLayout from "./layouts/MainLayout"
import Courses from "./pages/Courses"
import RateCourse from "./pages/RateCourse"

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
        element: <Courses />,
      },
      {
        path: "/rate-course",
        element: <RateCourse />,
      },
    ],
  },
]

export default routes
