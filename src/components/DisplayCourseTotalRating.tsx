import React from "react"
import { Typography } from "@material-ui/core"
import { Rating } from "@material-ui/lab"
import { TotalRating } from "../types/notGlobal"

export interface DisplayCourseTotalRatingProps {
  totalRating: TotalRating
}

export default function DisplayCourseTotalRating(
  props: DisplayCourseTotalRatingProps
): JSX.Element {
  const { totalRating } = props
  return totalRating ? (
    <Rating readOnly precision={0.5} defaultValue={totalRating} />
  ) : (
    <Typography>No ratings yet!</Typography>
  )
}
