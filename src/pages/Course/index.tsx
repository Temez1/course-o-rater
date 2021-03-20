import React, { useEffect, useState } from "react"
import { Grid, Divider } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { useParams } from "react-router-dom"
import Title from "./CourseTitle"
import CourseRatings from "./CourseRatings"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divider: {
      padding: `${theme.spacing(3)}px 0px`,
    },
  })
)

export interface CoursePageProps {
  courses: Courses
}

export default (props: CoursePageProps): JSX.Element => {
  const { courses } = props
  const classes = useStyles()
  const { courseId } = useParams()

  const [course, setCourse] = useState<Course | undefined>(undefined)

  useEffect(() => {
    if (courses) {
      const courseToFind = courses.find((courseD) => courseD.id === courseId)

      if (courseToFind === undefined) {
        console.error("Course data not found at Course page with id", courseId)
      }
      setCourse(courseToFind)
    }
  }, [courseId, courses])

  console.log(course)

  if (course === undefined) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Title course={course} />

      <Grid container className={classes.divider}>
        <Grid item xs={12}>
          <Divider />
        </Grid>
      </Grid>

      <CourseRatings />
    </>
  )
}
