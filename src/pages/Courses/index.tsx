import React from "react"
import { CircularProgress, List } from "@material-ui/core"
import "firebase/firestore"
import { useFirestore, useFirestoreCollection } from "reactfire"
import type { QuerySnapshot } from "@firebase/firestore-types"
import { useSnackbar } from "notistack"

import CourseListItem from "./CourseListItem"

export default (): JSX.Element => {
  const coursesRef = useFirestore().collection("courses")
  const { status, data } = useFirestoreCollection(coursesRef)
  const { enqueueSnackbar } = useSnackbar()

  switch (status) {
    case "loading":
      return <CircularProgress />
    case "error":
      enqueueSnackbar("Failed to get courses! Please try to refresh page.", {
        variant: "error",
      })
      return <></>
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
      enqueueSnackbar("Unknown error.", {
        variant: "error",
      })
      return <></>
  }
}
