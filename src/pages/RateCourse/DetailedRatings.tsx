import React from "react"
import { Slider, Typography, Grid } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Rating from "@material-ui/lab/Rating"
import { amountOfWork } from "../../constants"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    detailedRatingsContainer: {
      marginTop: theme.spacing(3),
    },
    qualitySubsection: {
      marginLeft: theme.spacing(4),
    },
    amountOfWorkSlider: {
      width: 350,
    },
    amountOfWorkSliderItem: {
      display: "flex",
      justifyContent: "center",
      marginBottom: theme.spacing(2),
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
        <Rating
          name="LecturesAndMaterialRating"
          precision={0.5}
          defaultValue={3.3}
        />{" "}
      </Grid>
      <Grid item xs={6}>
        <Typography variant="subtitle2" className={classes.qualitySubsection}>
          Exercises
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Rating name="ExercisesRating" precision={0.5} defaultValue={3.3} />{" "}
      </Grid>
      <>
        <Grid item xs={12}>
          <Typography>Amount of work</Typography>
        </Grid>
        <Grid item xs={12} className={classes.amountOfWorkSliderItem}>
          <Slider
            defaultValue={0}
            aria-labelledby="discrete-slider-restrict"
            valueLabelDisplay="auto"
            step={1}
            min={-2}
            max={2}
            marks={Object.entries(amountOfWork).map(
              ([rating, description]) => ({
                value: Number(rating),
                label: description,
              })
            )}
            className={classes.amountOfWorkSlider}
          />
        </Grid>
      </>

      <Grid item xs={6}>
        <Typography>Support</Typography>
      </Grid>
      <Grid item xs={6}>
        <Rating name="SupportRating" precision={0.5} defaultValue={3.3} />{" "}
      </Grid>
      <Grid item xs={6}>
        <Typography>Happiness</Typography>
      </Grid>
      <Grid item xs={6}>
        <Rating name="HappinessRating" precision={0.5} defaultValue={3.3} />{" "}
      </Grid>
    </Grid>
  )
}
