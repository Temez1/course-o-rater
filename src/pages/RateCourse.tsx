import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Slider from "@material-ui/core/Slider"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    slider: {
      width: 300,
    },
  })
)

const marks = [
  {
    value: -2,
    label: "Way too little",
  },
  {
    value: -1,
    label: "Too little",
  },
  {
    value: 0,
    label: "Just right 👌",
  },
  {
    value: 1,
    label: "Too much",
  },
  {
    value: 2,
    label: "Way too much",
  },
]

export default (): JSX.Element => {
  const classes = useStyles()

  return (
    <Slider
      defaultValue={0}
      aria-labelledby="discrete-slider-restrict"
      valueLabelDisplay="auto"
      step={1}
      min={-2}
      max={2}
      marks={marks}
      className={classes.slider}
    />
  )
}
