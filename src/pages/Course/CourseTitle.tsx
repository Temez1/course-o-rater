import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Rating from "@material-ui/lab/Rating"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    courseCode: {
      paddingLeft: theme.spacing(1),
      display: "inline",
    },
  })
)

export default (): JSX.Element => {
  const classes = useStyles()

  return (
    <Grid container spacing={2} justify="space-between" alignItems="center">
      <Grid item>
        <Typography display="inline"> Course Name </Typography>
        <Typography variant="subtitle2" className={classes.courseCode}>
          Course code
        </Typography>
      </Grid>
      <Grid item>
        <Rating readOnly precision={0.5} defaultValue={3.3} />
      </Grid>
    </Grid>
  )
}
