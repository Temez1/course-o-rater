import React from "react"
import List from "@material-ui/core/List"
import CourseListItemLink from "../components/CourseListItemLink"

export default (): JSX.Element => {
  return (
    <>
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
