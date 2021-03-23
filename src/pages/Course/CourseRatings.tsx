import React from "react"
import { Button, Grid, Typography, CircularProgress } from "@material-ui/core"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import { useNavigate } from "react-router-dom"
import { useFirestoreCollection, useUser } from "reactfire"
import type {
  CollectionReference,
  QuerySnapshot,
  DocumentData,
} from "@firebase/firestore-types"
import { useSnackbar } from "notistack"
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
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()

  const { data: user } = useUser()
  const { status, data } = useFirestoreCollection(
    ratingsRef.orderBy("createdAt", "desc")
  )

  const handleRateButtonClick = () => {
    if (!user) {
      enqueueSnackbar("Please sign in to rate a course.", {
        variant: "info",
      })
    } else {
      navigate(`/rate-course/${courseData.id}`)
    }
  }

  switch (status) {
    case "loading": {
      return <CircularProgress />
    }
    case "error": {
      enqueueSnackbar(
        "Failed to get the course ratings! Please try to refresh page.",
        {
          variant: "error",
        }
      )
      return <></>
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
                onClick={handleRateButtonClick}
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
      enqueueSnackbar("Unknown error.", {
        variant: "error",
      })
      return <></>
    }
  }
}
