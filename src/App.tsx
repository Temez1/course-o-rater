import React from "react"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import ResponsiveDrawer from "./components/ResponsiveDrawer"
import Home from "./pages/Home"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
)

export default function App(): JSX.Element {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <ResponsiveDrawer />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Home />
      </main>
    </div>
  )
}
