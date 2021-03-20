import React from "react"
import { List } from "@material-ui/core"
import "firebase/firestore"
import CourseListItem from "./CourseListItem"

export interface CoursesPageProps {
  courses: Courses
}

export default (props: CoursesPageProps): JSX.Element => {
  const { courses } = props

  return (
    <List aria-label="List of courses">
      {courses?.map((course) => (
        <CourseListItem
          key={course.id}
          to={`course/${course.id}`}
          course={course}
        />
      ))}
    </List>
  )
}
