import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import DisplayCourseTotalRating from "../../components/DisplayCourseTotalRating"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    courseCode: {
      paddingLeft: theme.spacing(1),
      display: "inline",
    },
  })
)

export interface TitleProps {
  course: Course
}

export default (props: TitleProps): JSX.Element => {
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
        <DisplayCourseTotalRating totalRating={course.totalRating} />
      </Grid>
    </Grid>
  )
}
