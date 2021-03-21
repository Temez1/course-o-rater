import React, { useState } from "react"
import { Grid, Button, CircularProgress } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Rating } from "@material-ui/lab"
import { useNavigate, useParams } from "react-router-dom"
import type { Timestamp } from "@firebase/firestore-types"
import { useFirestore, useFirestoreDocDataOnce } from "reactfire"

import Title from "./Title"
import Feedback from "./Feedback"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  const fieldValue = useFirestore.FieldValue

  const [feedback, setFeedback] = useState("")
  const [totalRating, setTotalRating] = useState<number | null>(null)

  const { status, data } = useFirestoreDocDataOnce<Course>(
    firestore.collection("courses").doc(courseId)
  )

  if (status === "loading") {
    return <CircularProgress />
  }

  const course = data

  const createReview = async (event: React.FormEvent) => {
    console.log("Hi trying to submit")
    event.preventDefault()

    const courseRating: Omit<CourseRating, "id"> = {
      total: totalRating || 0,
      feedback,
      createdAt: fieldValue.serverTimestamp() as Timestamp,
    }

    try {
      console.log(courseRating)
      await firestore
        .collection("courses")
        .doc(courseId)
        .collection("ratings")
        .add(courseRating)

      navigate(`/thanks-for-rating/${courseId}`)
    } catch (err) {
      alert(err)
    }
  }

  return (
    <>
      <Title course={course} />

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
