import React from "react"
import Divider from "@material-ui/core/Divider"
import Drawer from "@material-ui/core/Drawer"
import Hidden from "@material-ui/core/Hidden"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import ListItemText from "@material-ui/core/ListItemText"
import SchoolIcon from "@material-ui/icons/School"
import StarIcon from "@material-ui/icons/Star"
import LightBulbIcon from "@material-ui/icons/WbIncandescent"
import Switch from "@material-ui/core/Switch"
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
import { AmplifySignOut } from "@aws-amplify/ui-react"
import AppBar from "./AppBar"

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
  })
)

type ListItemLinkProps = {
  // eslint-disable-next-line react/require-default-props
  icon?: React.ReactElement
  primary: string
  to: string
}

const ListItemLink = (props: ListItemLinkProps) => {
  const { icon, primary, to } = props

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
  const [mobileOpen, setMobileOpen] = React.useState(false)

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
        <ListItemLink to="/" primary="Courses" icon={<SchoolIcon />} />
        <ListItemLink
          to="/find-course-to-rate"
          primary="Rate Course"
          icon={<StarIcon />}
        />
      </List>
      <Divider />
      <List>
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
        <ListItem>
          <AmplifySignOut />
        </ListItem>
      </List>
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
        <Hidden smUp implementation="css">
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
        <Hidden xsDown implementation="css">
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
