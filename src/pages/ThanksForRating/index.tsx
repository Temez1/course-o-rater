import * as React from "react"
import { Button, Grid, Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Link, useParams } from "react-router-dom"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textsContainer: {
      marginTop: theme.spacing(4),
    },
    thanksForRatingTextItem: {
      display: "flex",
      justifyContent: "center",
    },
    quoteItem: {
      display: "flex",
      justifyContent: "center",
    },
    buttonsContainer: {
      marginTop: theme.spacing(4),
    },
    seeRatingButtonItem: {
      marginTop: theme.spacing(4),
      display: "flex",
      justifyContent: "center",
    },
    rateMoreButtonItem: {
      display: "flex",
      justifyContent: "center",
    },
  })
)

export default (): JSX.Element => {
  const classes = useStyles()
  const { courseId } = useParams()

  return (
    <>
      <Grid container spacing={2} className={classes.textsContainer}>
        <Grid item xs={12} className={classes.thanksForRatingTextItem}>
          <Typography variant="h5">Thanks for rating!</Typography>
        </Grid>
        <Grid item xs={12} className={classes.quoteItem}>
          <Typography>
            “The only real mistake is the one from which we learn nothing.” ―
            Henry Ford
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={4} className={classes.buttonsContainer}>
        <Grid item xs={12} className={classes.seeRatingButtonItem}>
          <Button
            component={Link}
            to={`/course/${courseId}`}
            variant="contained"
            color="primary"
            size="large"
          >
            See rating
          </Button>
        </Grid>
        <Grid item xs={12} className={classes.rateMoreButtonItem}>
          <Button
            component={Link}
            to="/"
            variant="contained"
            color="primary"
            size="large"
          >
            Rate More
          </Button>
        </Grid>
      </Grid>
    </>
  )
}
