import React from "react"
import { Grid, Divider, CircularProgress } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { useParams } from "react-router-dom"
import { useFirestoreDocData, useFirestore } from "reactfire"
import Title from "./CourseTitle"
import CourseRatings from "./CourseRatings"

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

  const courseRef = useFirestore().collection("courses").doc(courseId)
  const courseRatingsRef = courseRef.collection("ratings")

  const courseObservable = useFirestoreDocData(courseRef, { idField: "id" })

  if (courseObservable.status === "loading") {
    return <CircularProgress />
  }

  return (
    <>
      <Title course={courseObservable.data as Course} />

      <Grid container className={classes.divider}>
        <Grid item xs={12}>
          <Divider />
        </Grid>
      </Grid>

      <CourseRatings
        courseData={courseObservable.data as Course}
        ratingsRef={courseRatingsRef}
      />
    </>
  )
}
