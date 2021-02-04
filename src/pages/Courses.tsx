import React from "react"
import List from "@material-ui/core/List"
import { Grid, TextField } from "@material-ui/core"
import CourseListItemLink from "../components/CourseListItemLink"

export default (): JSX.Element => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="search-course-text-field"
            label="Search course"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
      <List aria-label="List of courses">
        <CourseListItemLink
          courseName="Course name"
          courseCode="Course code"
          to="course/courseCode"
          findCourseToRate={false}
        />
        <CourseListItemLink
          courseName="Course name"
          courseCode="Course code"
          to="course/courseCode"
          findCourseToRate={false}
        />
        <CourseListItemLink
          courseName="Course name"
          courseCode="Course code"
          to="course/courseCode"
          findCourseToRate={false}
        />
        <CourseListItemLink
          courseName="Course name"
          courseCode="Course code"
          to="course/courseCode"
          findCourseToRate={false}
        />
      </List>
    </>
  )
}
