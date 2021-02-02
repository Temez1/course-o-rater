import React from "react"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import { Outlet } from "react-router-dom"
import ResponsiveDrawer from "./ResponsiveDrawer"

type MainLayoutProps = {
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
  })
)
export default ({ darkMode, setDarkMode }: MainLayoutProps): JSX.Element => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <ResponsiveDrawer darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Outlet />
      </main>
    </div>
  )
}
