import React from "react"
import { Navigate } from "react-router-dom"
import firebase from "firebase/app"
import MainLayout from "./layout/MainLayout"
import CoursePage from "./pages/Course"
import CoursesPage from "./pages/Courses"
import FindCourseToRatePage from "./pages/FindCourseToRate"
import RateCoursePage from "./pages/RateCourse"
import ThanksForRatingPage from "./pages/ThanksForRating"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const routes = (
  darkMode: boolean,
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>,
  user: firebase.User
) => [
  {
    path: "/",
    element: <MainLayout darkMode={darkMode} setDarkMode={setDarkMode} />,
    children: [
      {
        path: "/",
        element: <CoursesPage />,
      },
      {
        path: "find-course-to-rate",
        element: <FindCourseToRatePage />,
      },
      {
        path: "course/:courseId",
        element: <CoursePage />,
      },
      {
        path: "rate-course/:courseId",
        element: user ? <RateCoursePage /> : <Navigate to="/" />,
      },
      {
        path: "thanks-for-rating/:courseId",
        element: <ThanksForRatingPage />,
      },
    ],
  },
]

export default routes
