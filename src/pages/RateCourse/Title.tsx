import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles, createStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() =>
  createStyles({
    courseNameItem: {
      display: "flex",
      justifyContent: "center",
    },
    courseCodeItem: {
      display: "flex",
      justifyContent: "center",
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
    <Grid container spacing={1} justify="center">
      <Grid item xs={12} className={classes.courseNameItem}>
        <Typography variant="h5"> {course.name} </Typography>
      </Grid>
      <Grid item xs={12} className={classes.courseCodeItem}>
        <Typography>{course.code}</Typography>
      </Grid>
    </Grid>
  )
}
