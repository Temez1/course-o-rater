import React from "react"
import MainLayout from "./layouts/MainLayout"
import Course from "./pages/Course"
import Courses from "./pages/Courses"
import FindCourseToRate from "./pages/FindCourseToRate"
import RateCourse from "./pages/RateCourse"
import ThanksForRating from "./pages/ThanksForRating"

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
        path: "find-course-to-rate",
        element: <FindCourseToRate />,
      },
      {
        path: "/course/:id",
        element: <Course />,
      },
      {
        path: "/rate-course/:id",
        element: <RateCourse />,
      },
      {
        path: "thanks-for-rating",
        element: <ThanksForRating />,
      },
    ],
  },
]

export default routes
