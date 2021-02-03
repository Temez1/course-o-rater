import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Rating from "@material-ui/lab/Rating"
import { Link } from "react-router-dom"
import Button from "@material-ui/core/Button"
import CourseDetailedRatings from "../components/CourseDetailedRatings"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    courseNameItem: {
      display: "flex",
      justifyContent: "center",
    },
    courseCodeItem: {
      display: "flex",
      justifyContent: "center",
    },
    slider: {
      width: 300,
    },
    feedbackContainer: {
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
  const CHARACTER_LIMIT = 2400

  const [feedback, setFeedback] = React.useState("")

  return (
    <>
      <Grid container spacing={1} justify="center">
        <Grid item xs={12} className={classes.courseNameItem}>
          <Typography>Course name</Typography>
        </Grid>
        <Grid item xs={12} className={classes.courseCodeItem}>
          <Typography variant="subtitle2">Course code</Typography>
        </Grid>
      </Grid>
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
          className={classes.starsAndRateButtonContainer}
          justify="center"
        >
          <Grid item className={classes.totalRateItem}>
            <Rating readOnly precision={0.1} defaultValue={3.3} />
          </Grid>
          <Grid item xs={12} className={classes.rateButtonItem}>
            <Button
              component={Link}
              to="/rate-course"
              variant="contained"
              color="primary"
              size="large"
              className={classes.rateButton}
            >
              Rate
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}
