import React from "react"
import { ListItem, ListItemText } from "@material-ui/core"
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom"

interface CourseListItemProps {
  courseName: string
  courseCode: string
  to: string
}

export default (props: CourseListItemProps): JSX.Element => {
  const { courseName, courseCode, to } = props

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
        <ListItemText primary={courseName} />
        <ListItemText primary={courseCode} />
      </ListItem>
    </li>
  )
}
