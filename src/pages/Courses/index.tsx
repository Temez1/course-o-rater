import React, { useEffect, useState } from "react"
import { List } from "@material-ui/core"
import "firebase/firestore"
import { useFirestore } from "reactfire"
import CourseListItem from "./CourseListItem"

export default (): JSX.Element => {
  const firestore = useFirestore()

  const [courses, setCourses] = useState<Courses | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const coursesQuery = await firestore.collection("courses").get()

        if (coursesQuery.empty) {
          // eslint-disable-next-line @typescript-eslint/no-throw-literal
          throw "Courses not found"
        }
        setCourses(
          coursesQuery.docs.map((doc) => {
            return { id: doc.id, ...doc.data() } as Course
          })
        )
      } catch (err) {
        alert(err)
      }
    }

    fetchData()
  }, [firestore])

  console.log(courses)
  return (
    <List aria-label="List of courses">
      {courses?.map((course) => (
        <CourseListItem
          key={course.id}
          to="course/courseID_Or_Name"
          course={course}
        />
      ))}
    </List>
  )
}
