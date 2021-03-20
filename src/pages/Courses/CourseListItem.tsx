import React from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Rating from "@material-ui/lab/Rating"
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom"
import { Typography } from "@material-ui/core"

export interface CourseListItemProps {
  course: Course
  to: string
}

export default (props: CourseListItemProps): JSX.Element => {
  const { to, course } = props

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<never, Omit<RouterLinkProps, "to">>((itemProps, ref) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  )

  return (
    <li>
      <ListItem button component={renderLink}>
        <ListItemText primary={course.name} />
        <ListItemText primary={course.code} />
        {course.totalRating ? (
          <Rating readOnly precision={0.5} defaultValue={course.totalRating} />
        ) : (
          <Typography>No ratings yet!</Typography>
        )}
      </ListItem>
    </li>
  )
}
