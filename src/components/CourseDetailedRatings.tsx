import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Rating from "@material-ui/lab/Rating"
import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { Slider } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    courseRatingsContainer: {
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

interface CourseDetailedRatingProps {
  rateCourse: boolean
}

export default ({ rateCourse }: CourseDetailedRatingProps): JSX.Element => {
  const classes = useStyles()

  const amountOfWork = {
    "-2": "Way too little",
    "-1": "Too little",
    "0": "Just right 👌",
    "1": "Too much",
    "2": "Way too much",
  }

  interface CourseStarsProps {
    UniqueNamePerForm: string
  }
  const CourseStars = ({ UniqueNamePerForm }: CourseStarsProps) =>
    rateCourse ? (
      <Rating name={UniqueNamePerForm} precision={0.5} defaultValue={3.3} />
    ) : (
      <Rating readOnly precision={0.5} defaultValue={3.3} />
    )

  const amountOfWorkElement = rateCourse ? (
    <Slider
      defaultValue={0}
      aria-labelledby="discrete-slider-restrict"
      valueLabelDisplay="auto"
      step={1}
      min={-2}
      max={2}
      marks={Object.entries(amountOfWork).map(([rating, description]) => ({
        value: Number(rating),
        label: description,
      }))}
      className={classes.amountOfWorkSlider}
    />
  ) : (
    <Typography> {amountOfWork[0]} </Typography>
  )
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      className={classes.courseRatingsContainer}
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
        <CourseStars UniqueNamePerForm="lectures/material" />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="subtitle2" className={classes.qualitySubsection}>
          Exercises
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <CourseStars UniqueNamePerForm="exercises" />
      </Grid>

      {rateCourse ? (
        <>
          <Grid item xs={12}>
            <Typography>Amount of work</Typography>
          </Grid>
          <Grid item xs={12} className={classes.amountOfWorkSliderItem}>
            {amountOfWorkElement}
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={6}>
            <Typography>Amount of work</Typography>
          </Grid>
          <Grid item xs={6}>
            {amountOfWorkElement}
          </Grid>
        </>
      )}

      <Grid item xs={6}>
        <Typography>Support</Typography>
      </Grid>
      <Grid item xs={6}>
        <CourseStars UniqueNamePerForm="support" />
      </Grid>
      <Grid item xs={6}>
        <Typography>Happiness</Typography>
      </Grid>
      <Grid item xs={6}>
        <CourseStars UniqueNamePerForm="Exercises" />
      </Grid>
    </Grid>
  )
}
