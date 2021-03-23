import React from "react"
import { Typography } from "@material-ui/core"
import { Rating } from "@material-ui/lab"

export interface DisplayCourseTotalRatingProps {
  avgRating: number | undefined
}

export default function DisplayCourseTotalRating(
  props: DisplayCourseTotalRatingProps
): JSX.Element {
  const { avgRating } = props
  return avgRating ? (
    <Rating readOnly precision={0.1} value={avgRating} />
  ) : (
    <Typography>No ratings yet!</Typography>
  )
}
