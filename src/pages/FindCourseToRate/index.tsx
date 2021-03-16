import * as React from "react"
import { Grid, List, TextField } from "@material-ui/core"
import CourseListItem from "./CourseListItem"

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
        <CourseListItem
          courseName="Course name"
          courseCode="Course code"
          to="/rate-course/courseCode"
        />
        <CourseListItem
          courseName="Course name"
          courseCode="Course code"
          to="/rate-course/courseCode"
        />
        <CourseListItem
          courseName="Course name"
          courseCode="Course code"
          to="/rate-course/courseCode"
        />
      </List>
    </>
  )
}
