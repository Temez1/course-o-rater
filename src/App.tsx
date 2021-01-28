import React from "react"
import { useRoutes } from "react-router-dom"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core"
import routes from "./routes"

export default (): JSX.Element => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)", {
    noSsr: true,
  })
  const [darkMode, setDarkMode] = React.useState(prefersDarkMode)
  const routing = useRoutes(routes(darkMode, setDarkMode))

  const darkThemeBackgroundColorPaper = "#424242"
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      background: { paper: darkThemeBackgroundColorPaper },
    },
    props: {
      MuiUseMediaQuery: {
        noSsr: true,
      },
    },
    overrides: {
      MuiAppBar: {
        colorPrimary: { backgroundColor: darkThemeBackgroundColorPaper },
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
