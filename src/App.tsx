import React from "react"
import { useRoutes } from "react-router-dom"

import routes from "./routes"

export default (): JSX.Element => {
  const routing = useRoutes(routes)
  return <> {routing} </>
}
