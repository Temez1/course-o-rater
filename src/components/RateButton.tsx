import Button from "@material-ui/core/Button"
import * as React from "react"
import { Link } from "react-router-dom"

interface RateButtonProps {
  // eslint-disable-next-line react/require-default-props
  size?: "medium" | "large"
}

export default ({ size = "medium" }: RateButtonProps): JSX.Element => {
  return (
    <Button
      component={Link}
      to="/rate-course"
      variant="contained"
      color="primary"
      size={size}
    >
      Rate
    </Button>
  )
}
