import React from "react"
import { Button, Grid, Typography, CircularProgress } from "@material-ui/core"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import { Alert } from "@material-ui/lab/"
import { Link } from "react-router-dom"
import { useFirestoreCollection } from "reactfire"
import type {
  CollectionReference,
  QuerySnapshot,
  DocumentData,
} from "@firebase/firestore-types"
import Rating from "./Rating"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sortBySelect: {
      minWidth: 120,
    },
    ratingsContainer: {
      marginBottom: theme.spacing(2),
    },
    rateItem: {
      paddingLeft: 100,
    },
  })
)

export interface CourseRatingsProps {
  courseData: Course
  ratingsRef: CollectionReference<DocumentData>
}

export default (props: CourseRatingsProps): JSX.Element => {
  const { ratingsRef, courseData } = props
  const classes = useStyles()

  const { status, data } = useFirestoreCollection(ratingsRef)

  console.log("courseData", courseData)
  switch (status) {
    case "loading": {
      return <CircularProgress />
    }
    case "error": {
      return (
        <Alert severity="error">
          Error fetching data. Please refresh the page
        </Alert>
      )
    }
    case "success": {
      return (
        <>
          <Grid
            container
            alignItems="center"
            className={classes.ratingsContainer}
          >
            <Grid item>
              <Typography display="inline"> Ratings </Typography>
            </Grid>

            <Grid item className={classes.rateItem}>
              <Button
                component={Link}
                to={`/rate-course/${courseData.id}`}
                variant="contained"
                color="primary"
              >
                Rate
              </Button>
            </Grid>
          </Grid>

          {data ? (
            ((data as unknown) as QuerySnapshot).docs.map((doc) => (
              <Rating courseRating={doc.data() as CourseRating} key={doc.id} />
            ))
          ) : (
            <Typography> No Ratings yet!</Typography>
          )}
        </>
      )
    }
    default: {
      return <Alert severity="error">Unknown error occured.</Alert>
    }
  }
}
