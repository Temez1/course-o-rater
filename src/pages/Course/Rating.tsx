import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import Rating from "@material-ui/lab/Rating"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ratingContainer: {
      marginBottom: theme.spacing(2),
    },
    ratingDate: {
      paddingLeft: theme.spacing(1),
      display: "inline",
    },
  })
)

export interface CourseRatingProps {
  courseRating: CourseRating
}

export default (props: CourseRatingProps): JSX.Element => {
  const { courseRating } = props
  const classes = useStyles()

  return (
    <Grid
      container
      spacing={1}
      justify="space-between"
      alignItems="center"
      className={classes.ratingContainer}
    >
      <Grid item>
        <Typography display="inline"> Name of Rater</Typography>
        <Typography variant="subtitle2" className={classes.ratingDate}>
          {courseRating.createdAt.toDate().toLocaleDateString()}
        </Typography>
      </Grid>
      <Grid item>
        <Rating
          readOnly
          size="small"
          precision={0.5}
          defaultValue={courseRating.total}
        />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="body2">{courseRating.feedback}</Typography>
      </Grid>
    </Grid>
  )
}
