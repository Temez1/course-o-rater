import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Rating from "@material-ui/lab/Rating"
import { AMOUNT_OF_WORK } from "../../constants"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    detailedRatingsContainer: {
      marginTop: theme.spacing(3),
    },
    qualitySubsection: {
      marginLeft: theme.spacing(4),
    },
  })
)

export default (): JSX.Element => {
  const classes = useStyles()

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      className={classes.detailedRatingsContainer}
    >
      <Grid item xs={12}>
        <Typography>Quality of</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography variant="subtitle2" className={classes.qualitySubsection}>
          Lectures / material
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Rating readOnly precision={0.5} defaultValue={3.3} />
      </Grid>

      <Grid item xs={6}>
        <Typography variant="subtitle2" className={classes.qualitySubsection}>
          Exercises
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Rating readOnly precision={0.5} defaultValue={3.3} />
      </Grid>

      <Grid item xs={6}>
        <Typography>Amount of work</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography> {AMOUNT_OF_WORK[0]} </Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>Support</Typography>
      </Grid>
      <Grid item xs={6}>
        <Rating readOnly precision={0.5} defaultValue={3.3} />
      </Grid>

      <Grid item xs={6}>
        <Typography>Happiness</Typography>
      </Grid>
      <Grid item xs={6}>
        <Rating readOnly precision={0.5} defaultValue={3.3} />
      </Grid>
    </Grid>
  )
}
