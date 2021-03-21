import React from "react"
import { CircularProgress, List } from "@material-ui/core"
import "firebase/firestore"
import { useFirestore, useFirestoreCollection } from "reactfire"
import type { QuerySnapshot } from "@firebase/firestore-types"
import CourseListItem from "./CourseListItem"

export default (): JSX.Element => {
  const coursesRef = useFirestore().collection("courses")
  const { status, data } = useFirestoreCollection(coursesRef)

  console.log("Status", status)

  switch (status) {
    case "loading":
      return <CircularProgress />
    case "error":
      throw new Error("Cannot fetch courses")
    case "success": {
      return (
        <List aria-label="List of courses">
          {((data as unknown) as QuerySnapshot).docs.map((course) => (
            <CourseListItem
              key={course.id}
              to={`course/${course.id}`}
              course={course.data() as Course}
            />
          ))}
        </List>
      )
    }
    default:
      throw new Error("Cannot fetch courses")
  }
}
