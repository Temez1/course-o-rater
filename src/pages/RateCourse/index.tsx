import React from "react"
import { Grid, Button } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Rating from "@material-ui/lab/Rating"
import { Link } from "react-router-dom"

import { withAuthenticator } from "@aws-amplify/ui-react"

import Title from "./Title"
import DetailedRatings from "./DetailedRatings"
import Feedback from "./Feedback"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    starsAndRateButtonContainer: {
      marginTop: theme.spacing(4),
    },
    totalRateItem: {
      display: "flex",
      justifyContent: "center",
    },
    rateButtonItem: {
      display: "flex",
      justifyContent: "center",
    },
    rateButton: {
      width: 120,
    },
  })
)

export default withAuthenticator(
  (): JSX.Element => {
    const classes = useStyles()

    const [feedback, setFeedback] = React.useState("")

    return (
      <>
        <Title />

        <form>
          <DetailedRatings />

          <Feedback feedback={feedback} setFeedback={setFeedback} />

          <Grid
            container
            spacing={2}
            className={classes.starsAndRateButtonContainer}
            justify="center"
          >
            <Grid item className={classes.totalRateItem}>
              <Rating readOnly precision={0.1} defaultValue={3.3} />
            </Grid>
            <Grid item xs={12} className={classes.rateButtonItem}>
              <Button
                component={Link}
                to="/thanks-for-rating"
                variant="contained"
                color="primary"
                size="large"
                className={classes.rateButton}
              >
                Rate
              </Button>
            </Grid>
          </Grid>
        </form>
      </>
    )
  }
)
