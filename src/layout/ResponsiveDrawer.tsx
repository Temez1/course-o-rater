import React, { useState } from "react"
import Divider from "@material-ui/core/Divider"
import Drawer from "@material-ui/core/Drawer"
import Hidden from "@material-ui/core/Hidden"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { RateReview, School } from "@material-ui/icons"
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles"
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom"

import AppBar from "./AppBar"

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up("lg")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    signInSignOutDiv: { textAlign: "center" },
  })
)

type ListItemLinkProps = {
  // eslint-disable-next-line react/require-default-props
  icon?: React.ReactElement
  primary: string
  to: string
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ListItemLink = (props: ListItemLinkProps) => {
  const { icon, primary, to, setMobileOpen } = props

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
      <ListItem
        button
        component={renderLink}
        onClick={() => setMobileOpen(false)}
      >
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  )
}

type ResponsiveDrawerProps = {
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export default ({
  darkMode,
  setDarkMode,
}: ResponsiveDrawerProps): JSX.Element => {
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode)
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItemLink
          to="/"
          primary="Courses"
          icon={<School />}
          setMobileOpen={setMobileOpen}
        />
      </List>
      <List>
        <ListItemLink
          to="course/course-o-rater"
          primary="Give Feedback!"
          icon={<RateReview />}
          setMobileOpen={setMobileOpen}
        />
      </List>
      <Divider />
      {/* {<List>
        <ListItem>
          <ListItemIcon>
            <LightBulbIcon />
          </ListItemIcon>
          <ListItemText primary="Dark Mode" />
          <ListItemSecondaryAction>
            <Switch
              edge="end"
              onChange={handleDarkModeToggle}
              checked={darkMode}
              inputProps={{ "aria-labelledby": "switch-list-label-wifi" }}
            />
          </ListItemSecondaryAction>
        </ListItem>
      </List>} */}
    </div>
  )

  return (
    <>
      <AppBar
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
      />
      <nav className={classes.drawer} aria-label="Main Navigation">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden lgUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden mdDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </>
  )
}
