import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Rating from "@material-ui/lab/Rating"
import CourseDetailedRatings from "../components/CourseDetailedRatings"
import RateButton from "../components/RateButton"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    slider: {
      width: 300,
    },
    feedbackContainer: {
      marginTop: theme.spacing(4),
    },
    rateContainer: {
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
  })
)

export default (): JSX.Element => {
  const classes = useStyles()
  const CHARACTER_LIMIT = 2400

  const [feedback, setFeedback] = React.useState("")

  return (
    <form>
      <CourseDetailedRatings rateCourse />
      <Grid container className={classes.feedbackContainer}>
        <Grid item xs={12}>
          <TextField
            id="feedback-textarea"
            label="Feedback"
            placeholder="Don’t find fault, find a remedy; 
anybody can complain.
- Henry Ford"
            error={feedback.length === CHARACTER_LIMIT}
            helperText={
              feedback.length === CHARACTER_LIMIT
                ? "Hold your horses! Please contact the teacher directly."
                : ""
            }
            multiline
            fullWidth
            variant="outlined"
            value={feedback}
            onChange={(event) => setFeedback(event.target.value)}
            inputProps={{ maxLength: CHARACTER_LIMIT }}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        className={classes.rateContainer}
        justify="center"
      >
        <Grid item className={classes.totalRateItem}>
          <Rating readOnly precision={0.1} defaultValue={3.3} />
        </Grid>
        <Grid item xs={12} className={classes.rateButtonItem}>
          <RateButton size="large" />
        </Grid>
      </Grid>
    </form>
  )
}
