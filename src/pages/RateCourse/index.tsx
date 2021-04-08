import React, { useState } from "react"
import { Grid, Button, CircularProgress, Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Rating } from "@material-ui/lab"
import { useNavigate, useParams } from "react-router-dom"
import type { Timestamp } from "@firebase/firestore-types"
import { useFirestore, useFirestoreDocDataOnce, useUser } from "reactfire"
import { useSnackbar } from "notistack"

import Title from "./Title"
import Feedback from "./Feedback"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    courseDescriptionText: {
      marginTop: theme.spacing(4),
    },
    starsAndRateButtonContainer: {
      marginTop: theme.spacing(4),
    },
    totalRateItem: {
      display: "flex",
      justifyContent: "center",
    },
    rateButtonItem: {
      display: "flex",
      justifyContent: "center",
    },
    rateButton: {
      width: 120,
    },
  })
)

export default (): JSX.Element => {
  const classes = useStyles()
  const { courseId } = useParams()
  const firestore = useFirestore()
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  const fieldValue = useFirestore.FieldValue
  const { data: user } = useUser()

  const [feedback, setFeedback] = useState("")
  const [totalRating, setTotalRating] = useState<number | null>(null)

  const { status, data: course } = useFirestoreDocDataOnce<Course>(
    firestore.collection("courses").doc(courseId)
  )

  const createReview = async (event: React.FormEvent) => {
    event.preventDefault()

    if (totalRating === null) {
      enqueueSnackbar("Please give a rating", {
        variant: "error",
      })
      return
    }

    const courseRating: CourseRating = {
      total: totalRating,
      feedback,
      createdAt: fieldValue.serverTimestamp() as Timestamp,
      userId: user.uid,
    }

    try {
      await firestore
        .collection("courses")
        .doc(courseId)
        .collection("ratings")
        .add(courseRating)

      navigate(`/thanks-for-rating/${courseId}`)
    } catch (err) {
      enqueueSnackbar("Failed to submit the review! Please try again.", {
        variant: "error",
      })
    }
  }

  switch (status) {
    case "loading":
      return <CircularProgress />
    case "error":
      enqueueSnackbar(
        "Failed to get the course name! Please try to refresh page.",
        {
          variant: "error",
        }
      )
      return <></>
    case "success": {
      return (
        <>
          <Title course={course} />

          <Typography align="center" className={classes.courseDescriptionText}>
            {course.description}
          </Typography>

          <form onSubmit={createReview}>
            <Feedback feedback={feedback} setFeedback={setFeedback} />

            <Grid
              container
              spacing={2}
              className={classes.starsAndRateButtonContainer}
              justify="center"
            >
              <Grid item className={classes.totalRateItem}>
                <Rating
                  name="total-rating"
                  precision={0.5}
                  value={totalRating}
                  onChange={(e, value) => {
                    return value ? setTotalRating(value) : setTotalRating(0)
                  }}
                />
              </Grid>
              <Grid item xs={12} className={classes.rateButtonItem}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.rateButton}
                  type="submit"
                >
                  Rate
                </Button>
              </Grid>
            </Grid>
          </form>
        </>
      )
    }

    default:
      enqueueSnackbar("Unknown error.", {
        variant: "error",
      })
      return <></>
  }
}
