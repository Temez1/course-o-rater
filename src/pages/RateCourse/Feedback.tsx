import React from "react"
import { Grid, TextField } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { FEEDBACK_CHARACTER_LIMIT } from "../../constants"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    feedbackContainer: {
      marginTop: theme.spacing(4),
    },
  })
)

interface FeedbackProps {
  feedback: string
  setFeedback: (text: string) => void
}

export default (props: FeedbackProps): JSX.Element => {
  const { feedback, setFeedback } = props

  const classes = useStyles()
  return (
    <Grid container className={classes.feedbackContainer}>
      <Grid item xs={12}>
        <TextField
          id="feedback-textarea"
          label="Feedback"
          placeholder="Don’t find fault, find a remedy; 
anybody can complain.
- Henry Ford"
          error={feedback.length === FEEDBACK_CHARACTER_LIMIT}
          helperText={
            feedback.length === FEEDBACK_CHARACTER_LIMIT
              ? "Hold your horses! Please contact the teacher directly."
              : ""
          }
          multiline
          fullWidth
          variant="outlined"
          value={feedback}
          onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
            setFeedback(event.target.value as string)
          }}
          inputProps={{ maxLength: FEEDBACK_CHARACTER_LIMIT }}
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
    </Grid>
  )
}
