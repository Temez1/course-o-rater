import React from "react"
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core"
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
  })
)

export default (): JSX.Element => {
  const classes = useStyles()

  const [sortBy, setSortBy] = React.useState("newest")

  const handleSortByChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSortBy(event.target.value as string)
  }

  return (
    <>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        className={classes.ratingsContainer}
      >
        <Grid item>
          <Typography display="inline"> Ratings </Typography>
        </Grid>

        <Grid item>
          <Button
            component={Link}
            to="/rate-course/CourseIdOrCode"
            variant="contained"
            color="primary"
          >
            Rate
          </Button>
        </Grid>

        <Grid item>
          <FormControl variant="outlined" className={classes.sortBySelect}>
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

      <Rating />
    </>
  )
}
