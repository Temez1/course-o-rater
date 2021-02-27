import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Rating from "@material-ui/lab/Rating"
import { Course } from "../../API"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    courseCode: {
      paddingLeft: theme.spacing(1),
      display: "inline",
    },
  })
)

export interface CourseTitleProps {
  course: Course
}

export default (props: CourseTitleProps): JSX.Element => {
  const { course } = props
  const classes = useStyles()

  return (
    <Grid container spacing={2} justify="space-between" alignItems="center">
      <Grid item>
        <Typography display="inline"> {course.name} </Typography>
        <Typography variant="subtitle2" className={classes.courseCode}>
          {course.code}
        </Typography>
      </Grid>
      <Grid item>
        <Rating readOnly precision={0.5} defaultValue={3.3} />
      </Grid>
    </Grid>
  )
}
