import { Button, Grid, Typography } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import * as React from "react"
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    thanksForRatingTextItem: {
      display: "flex",
      justifyContent: "center",
    },
    quoteItem: {
      display: "flex",
      justifyContent: "center",
    },
    seeRatingButtonItem: {
      marginTop: theme.spacing(4),
    },
  })
)

export default (): JSX.Element => {
  const classes = useStyles()

  return (
    <Grid container spacing={2} justify="center">
      <Grid item xs={12} className={classes.thanksForRatingTextItem}>
        <Typography>Thanks for rating!</Typography>
      </Grid>
      <Grid item xs={12} className={classes.quoteItem}>
        <Typography variant="subtitle2">
          “The only real mistake is the one from which we learn nothing.” ―
          Henry Ford
        </Typography>
      </Grid>
      <Grid item className={classes.seeRatingButtonItem}>
        <Button
          component={Link}
          to="/course/Coursecode"
          variant="contained"
          color="primary"
          size="large"
        >
          See rating
        </Button>
      </Grid>
      <Grid item className={classes.seeRatingButtonItem}>
        <Button
          component={Link}
          to="/course/Coursecode"
          variant="contained"
          color="primary"
          size="large"
        >
          Rate More
        </Button>
      </Grid>
    </Grid>
  )
}
