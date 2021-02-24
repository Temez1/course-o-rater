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
export default (): JSX.Element => {
  const classes = useStyles()
  return (
    <Grid container spacing={1} justify="center">
      <Grid item xs={12} className={classes.courseNameItem}>
        <Typography>Course name</Typography>
      </Grid>
      <Grid item xs={12} className={classes.courseCodeItem}>
        <Typography variant="subtitle2">Course code</Typography>
      </Grid>
    </Grid>
  )
}
