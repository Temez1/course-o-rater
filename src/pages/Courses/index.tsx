import React from "react"
import { List } from "@material-ui/core"
import CourseListItem from "./CourseListItem"

export default (): JSX.Element => {
  return (
    <List aria-label="List of courses">
      <CourseListItem to="course/courseID_Or_Name" />
    </List>
  )
}
