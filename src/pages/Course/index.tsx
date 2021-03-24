import React from "react"
import { Grid, Divider, CircularProgress, Typography } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { useParams } from "react-router-dom"
import { useFirestoreDocData, useFirestore } from "reactfire"
import { useSnackbar } from "notistack"

import Title from "./CourseTitle"
import CourseRatings from "./CourseRatings"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divider: {
      padding: `${theme.spacing(3)}px 0px`,
    },
    courseDescription: {
      marginTop: theme.spacing(3),
    },
  })
)

export default (): JSX.Element => {
  const classes = useStyles()
  const { courseId } = useParams()
  const { enqueueSnackbar } = useSnackbar()

  const courseRef = useFirestore().collection("courses").doc(courseId)
  const courseRatingsRef = courseRef.collection("ratings")

  const courseObservable = useFirestoreDocData(courseRef, { idField: "id" })

  switch (courseObservable.status) {
    case "loading":
      return <CircularProgress />
    case "error":
      enqueueSnackbar("Failed to get the course! Please try to refresh page.", {
        variant: "error",
      })
      return <></>
    case "success":
      return (
        <>
          <Title course={courseObservable.data as Course} />

          <Typography className={classes.courseDescription}>
            {(courseObservable.data as Course).description}
          </Typography>

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

    default:
      enqueueSnackbar("Unknown error.", {
        variant: "error",
      })
      return <></>
  }
}
