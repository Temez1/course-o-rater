import React, { useEffect } from "react"
import { useRoutes, useLocation } from "react-router-dom"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core"
import lightBlue from "@material-ui/core/colors/lightBlue"
import { useUser, useAnalytics } from "reactfire"
import "firebase/analytics"

import routes from "./routes"

const PageViewLogger = () => {
  const analytics = useAnalytics()
  const loc: Location = (useLocation() as unknown) as Location

  useEffect(() => {
    analytics.logEvent("page-view", { path_name: loc.pathname })
  }, [loc.pathname, analytics])

  return null
}

export default (): JSX.Element => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)", {
    noSsr: true,
  })
  const [darkMode, setDarkMode] = React.useState(prefersDarkMode)

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

  const { data: user } = useUser()
  const routing = useRoutes(routes(darkMode, setDarkMode, user))

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      {routing}
      <PageViewLogger />
    </ThemeProvider>
  )
}
