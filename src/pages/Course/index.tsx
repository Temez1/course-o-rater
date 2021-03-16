import React from "react"
import { Grid, Divider } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { useParams } from "react-router-dom"
import { API } from "aws-amplify"
// eslint-disable-next-line import/no-extraneous-dependencies
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql/lib/types"
import Title from "./CourseTitle"
import CourseInfo from "./CourseInfo"
import CourseRatings from "./CourseRatings"
import { getCourse } from "../../graphql/queries"
import { Course, GetCourseQuery } from "../../API"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divider: {
      padding: `${theme.spacing(3)}px 0px`,
    },
  })
)

export default (): JSX.Element => {
  const classes = useStyles()
  const { courseId } = useParams()

  const [course, setCourse] = React.useState<GetCourseQuery | undefined>(
    undefined
  )

  React.useEffect(() => {
    async function fetchCourse() {
      const response = (await API.graphql({
        query: getCourse,
        variables: { id: courseId },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      })) as { data: GetCourseQuery }
      console.log(response.data.getCourse)
      setCourse(response.data)
    }

    fetchCourse()
  }, [courseId])

  return course?.getCourse ? (
    <>
      <Title course={course.getCourse as Course} />

      <CourseInfo />

      <Grid container className={classes.divider}>
        <Grid item xs={12}>
          <Divider />
        </Grid>
      </Grid>

      <CourseRatings />
    </>
  ) : (
    <> </>
  )
}
