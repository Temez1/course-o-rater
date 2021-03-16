import React from "react"
import { Grid, Divider } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Title from "./CourseTitle"
import CourseInfo from "./CourseInfo"
import CourseRatings from "./CourseRatings"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divider: {
      padding: `${theme.spacing(3)}px 0px`,
    },
  })
)

export default (): JSX.Element => {
  const classes = useStyles()

  return (
    <>
      <Title />

      <CourseInfo />

      <Grid container className={classes.divider}>
        <Grid item xs={12}>
          <Divider />
        </Grid>
      </Grid>

      <CourseRatings />
    </>
  )
}
