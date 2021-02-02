import React from "react"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Rating from "@material-ui/lab/Rating"
import Divider from "@material-ui/core/Divider"
import Button from "@material-ui/core/Button"
import Select from "@material-ui/core/Select"
import InputLabel from "@material-ui/core/InputLabel"
import FormControl from "@material-ui/core/FormControl"
import MenuItem from "@material-ui/core/MenuItem"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    course: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: 500,
    },
    divider: {
      padding: `${theme.spacing(3)}px 0px`,
    },
    formControl: {
      minWidth: 120,
    },
    courseCode: {
      paddingLeft: theme.spacing(1),
      display: "inline",
    },
    ratingDate: {
      paddingLeft: theme.spacing(1),
      display: "inline",
    },
    courseRatingsContainer: {
      paddingTop: theme.spacing(3),
    },
    qualitySubsection: {
      paddingLeft: theme.spacing(4),
    },
    commentRatingsContainer: {
      marginBottom: theme.spacing(2),
    },
    raterContainer: {
      marginBottom: theme.spacing(2),
    },
  })
)

export default (): JSX.Element => {
  const classes = useStyles()
  const [sortBy, setSortBy] = React.useState("newest")

  const handleSortByChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSortBy(event.target.value as string)
  }
  const amountOfWork = {
    "-2": "Way too little",
    "-1": "Too little",
    "0": "Just right 👌",
    "1": "Too much",
    "2": "Way too much",
  }

  return (
    <div className={classes.course}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid
            container
            spacing={2}
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography display="inline"> Course name</Typography>
              <Typography variant="subtitle2" className={classes.courseCode}>
                Course code
              </Typography>
            </Grid>
            <Grid item>
              <Rating readOnly precision={0.5} defaultValue={3.3} />
            </Grid>
          </Grid>
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
              <Typography
                variant="subtitle2"
                className={classes.qualitySubsection}
              >
                Lectures / material
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Rating readOnly precision={0.5} defaultValue={3.3} />
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="subtitle2"
                className={classes.qualitySubsection}
              >
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
              <Typography> {amountOfWork[0]} </Typography>
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
          <Grid container className={classes.divider}>
            <Grid item xs={12}>
              <Divider />
            </Grid>
          </Grid>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            className={classes.commentRatingsContainer}
          >
            <Grid item>
              <Typography display="inline"> Ratings </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                Rate
              </Button>
            </Grid>
            <Grid item>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="sort-by-select-label">Sort by</InputLabel>
                <Select
                  id="sort-by-select"
                  labelId="sort-by-select-label"
                  value={sortBy}
                  onChange={handleSortByChange}
                >
                  <MenuItem value="newest">Newest</MenuItem>
                  <MenuItem value="oldest">Oldest</MenuItem>
                  <MenuItem value="best">Best</MenuItem>
                  <MenuItem value="worst">Worst</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            justify="space-between"
            alignItems="center"
            className={classes.raterContainer}
          >
            <Grid item>
              <Typography display="inline"> Name of Rater </Typography>
              <Typography variant="subtitle2" className={classes.ratingDate}>
                28.1.2021
              </Typography>
            </Grid>
            <Grid item>
              <Rating
                readOnly
                size="small"
                precision={0.5}
                defaultValue={3.3}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy
              </Typography>
            </Grid>
          </Grid>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Typography display="inline"> Name of Rater </Typography>
              <Typography variant="subtitle2" className={classes.ratingDate}>
                28.1.2021
              </Typography>
            </Grid>
            <Grid item>
              <Rating
                readOnly
                size="small"
                precision={0.5}
                defaultValue={3.3}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy
              </Typography>
            </Grid>
          </Grid>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Typography display="inline"> Name of Rater </Typography>
              <Typography variant="subtitle2" className={classes.ratingDate}>
                28.1.2021
              </Typography>
            </Grid>
            <Grid item>
              <Rating
                readOnly
                size="small"
                precision={0.5}
                defaultValue={3.3}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}
