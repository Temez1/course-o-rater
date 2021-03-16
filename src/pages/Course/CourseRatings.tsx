import React from "react"
import { Button, Grid, Typography } from "@material-ui/core"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"
import Rating from "./Rating"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sortBySelect: {
      minWidth: 120,
    },
    ratingsContainer: {
      marginBottom: theme.spacing(2),
    },
    rateItem: {
      paddingLeft: 100,
    },
  })
)

export default (): JSX.Element => {
  const classes = useStyles()
  return (
    <>
      <Grid container alignItems="center" className={classes.ratingsContainer}>
        <Grid item>
          <Typography display="inline"> Ratings </Typography>
        </Grid>

        <Grid item className={classes.rateItem}>
          <Button
            component={Link}
            to="/rate-course/CourseIdOrCode"
            variant="contained"
            color="primary"
          >
            Rate
          </Button>
        </Grid>
      </Grid>

      <Rating />
    </>
  )
}
