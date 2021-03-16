import React from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Rating from "@material-ui/lab/Rating"
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom"

interface CourseListItemProps {
  to: string
}

export default (props: CourseListItemProps): JSX.Element => {
  const { to } = props

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
        <ListItemText primary="Course name" />
        <ListItemText primary="Course code" />
        <Rating readOnly precision={0.5} defaultValue={3.3} />
      </ListItem>
    </li>
  )
}
