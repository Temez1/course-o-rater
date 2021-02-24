import React from "react"
import { Grid, TextField, List } from "@material-ui/core"
import { API } from "aws-amplify"
import CourseListItem from "./CourseListItem"
import { listCourses } from "../../graphql/queries"
import { ListCoursesQuery } from "../../API"

export default (): JSX.Element => {
  const [courses, setCourses] = React.useState<ListCoursesQuery | undefined>(
    undefined
  )

  React.useEffect(() => {
    async function fetchCourses() {
      const response = (await API.graphql({
        query: listCourses,
      })) as { data: ListCoursesQuery }
      console.log(response.data.listCourses?.items)
      setCourses(response.data)
    }

    fetchCourses()
  }, [])

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
        {courses?.listCourses?.items?.map(
          (course) =>
            course && (
              <CourseListItem
                key={course.id}
                courseName={course.name}
                courseCode={course.code}
                to={`course/${course.code}`}
              />
            )
        )}
      </List>
    </>
  )
}
