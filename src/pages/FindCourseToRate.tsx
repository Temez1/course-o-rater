import * as React from "react"
import { Grid, List, TextField } from "@material-ui/core"
import CourseListItemLink from "../components/CourseListItemLink"

export default (): JSX.Element => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="search-course-to-rate-text-field"
            label="Search course to rate"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
      <List aria-label="List of courses to rate">
        <CourseListItemLink
          courseName="Course name"
          courseCode="Course code"
          to="/rate-course/courseCode"
          findCourseToRate
        />
        <CourseListItemLink
          courseName="Course name"
          courseCode="Course code"
          to="/rate-course/courseCode"
          findCourseToRate
        />
        <CourseListItemLink
          courseName="Course name"
          courseCode="Course code"
          to="/rate-course/courseCode"
          findCourseToRate
        />
      </List>
    </>
  )
}
