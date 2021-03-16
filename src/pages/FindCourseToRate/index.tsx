import * as React from "react"
import { List } from "@material-ui/core"
import CourseListItem from "./CourseListItem"

export default (): JSX.Element => {
  return (
    <List aria-label="List of courses to rate">
      <CourseListItem to="/rate-course/courseID_Or_Name" />
      <CourseListItem to="/rate-course/courseID_Or_Name" />
      <CourseListItem to="/rate-course/courseID_Or_Name" />
    </List>
  )
}
