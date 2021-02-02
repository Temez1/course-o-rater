import React from "react"
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Rating from "@material-ui/lab/Rating"
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    courseList: {
      width: "100%",
      maxWidth: 1000,
      backgroundColor: theme.palette.background.paper,
    },
  })
)

type ListItemLinkProps = {
  courseName: string
  courseCode: string
  to: string
}

const ListItemLink = (props: ListItemLinkProps) => {
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
        <Rating readOnly precision={0.5} defaultValue={3.3} />
      </ListItem>
    </li>
  )
}

export default (): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={classes.courseList}>
      <List aria-label="List of courses">
        <ListItemLink
          courseName="Course name"
          courseCode="Course code"
          to="course/courseCode"
        />
        <ListItemLink
          courseName="Course name"
          courseCode="Course code"
          to="course/courseCode"
        />
        <ListItemLink
          courseName="Course name"
          courseCode="Course code"
          to="course/courseCode"
        />
        <ListItemLink
          courseName="Course name"
          courseCode="Course code"
          to="course/courseCode"
        />
      </List>
    </div>
  )
}
