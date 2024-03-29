import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"
import { Button } from "@material-ui/core"
import firebase from "firebase/app"
import "firebase/auth"
import { useSnackbar } from "notistack"
import { useAuth, useUser } from "reactfire"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("lg")]: {
        display: "none",
      },
    },
    appBar: {
      [theme.breakpoints.up("lg")]: {
        width: (drawerWidth) => `calc(100% - ${drawerWidth}px)`,
        marginLeft: (drawerWidth) => drawerWidth,
      },
    },
    title: {
      flexGrow: 1,
    },
  })
)

type AppBarProps = {
  handleDrawerToggle: () => void
  drawerWidth: number
}

export default ({
  handleDrawerToggle,
  drawerWidth,
}: AppBarProps): JSX.Element => {
  const classes = useStyles(drawerWidth)
  const auth = useAuth()
  const user = useUser()
  const { enqueueSnackbar } = useSnackbar()

  const signIn = async () => {
    try {
      const result = await auth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      )
      enqueueSnackbar(`Welcome ${result.user?.displayName}!`, {
        variant: "success",
      })
    } catch (error) {
      enqueueSnackbar("Failed to sign in", { variant: "error" })
    }
  }

  const signOut = async () => {
    try {
      await auth.signOut()
      enqueueSnackbar(`Good bye ${user.data.displayName}`, {
        variant: "success",
      })
    } catch (error) {
      enqueueSnackbar("Failed to sign out", { variant: "error" })
    }
  }

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton
          onClick={handleDrawerToggle}
          className={classes.menuButton}
          edge="start"
          color="inherit"
          aria-label="open drawer"
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6" noWrap>
          Course-O-Rater
        </Typography>
        {user.data ? (
          <Button onClick={signOut} variant="contained">
            Sign out
          </Button>
        ) : (
          <Button onClick={signIn} variant="contained">
            Sign in
          </Button>
        )}
      </Toolbar>
    </AppBar>
  )
}
