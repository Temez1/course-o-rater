import React, { useEffect, useState } from "react"
import { useRoutes } from "react-router-dom"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core"
import lightBlue from "@material-ui/core/colors/lightBlue"
import { useFirestore } from "reactfire"
import routes from "./routes"

export default (): JSX.Element => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)", {
    noSsr: true,
  })
  const [courses, setCourses] = useState<Courses>(null)
  const [darkMode, setDarkMode] = React.useState(prefersDarkMode)
  const firestore = useFirestore()

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: lightBlue,
    },
    props: {
      MuiUseMediaQuery: {
        noSsr: true,
      },
    },
  })

  const lightTheme = createMuiTheme({
    props: {
      MuiUseMediaQuery: {
        noSsr: true,
      },
    },
  })

  useEffect(() => {
    async function fetchData() {
      try {
        const coursesQuery = await firestore.collection("courses").get()

        if (coursesQuery.empty) {
          // eslint-disable-next-line @typescript-eslint/no-throw-literal
          throw "Courses not found."
        }
        setCourses(
          coursesQuery.docs.map((doc) => {
            const courseData = doc.data() as CourseQuery

            let courseTotalRating: undefined | number

            if (courseData.ratings) {
              courseTotalRating =
                courseData.ratings.reduce(
                  (accumulator, courseRating) =>
                    accumulator + courseRating.totalRating,
                  0
                ) / courseData.ratings.length
            }
            return {
              id: doc.id,
              totalRating: courseTotalRating,
              ...courseData,
            } as Course
          })
        )
      } catch (err) {
        alert(err)
      }
    }

    fetchData()
  }, [firestore])

  console.log(courses)

  const routing = useRoutes(routes(darkMode, setDarkMode, courses))

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {routing}
    </ThemeProvider>
  )
}
