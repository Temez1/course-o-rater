import React from "react"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

export default (): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper>
          <Grid item xs={12}>
            Course info
          </Grid>
          <Grid item xs={12}>
            Rating
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}
