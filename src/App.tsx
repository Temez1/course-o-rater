import React from "react"
import { useRoutes } from "react-router-dom"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core"
import lightBlue from "@material-ui/core/colors/lightBlue"
import routes from "./routes"

export default (): JSX.Element => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)", {
    noSsr: true,
  })
  const [darkMode, setDarkMode] = React.useState(prefersDarkMode)
  const routing = useRoutes(routes(darkMode, setDarkMode))

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: lightBlue,
    },
    props: {
      MuiUseMediaQuery: {
        noSsr: true,
      },
    },
  })

  const lightTheme = createMuiTheme({
    props: {
      MuiUseMediaQuery: {
        noSsr: true,
      },
    },
  })

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {routing}
    </ThemeProvider>
  )
}
