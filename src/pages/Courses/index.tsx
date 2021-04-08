import React from "react"
import {
  CircularProgress,
  createStyles,
  Divider,
  List,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core"
import "firebase/firestore"
import { useFirestore, useFirestoreCollection } from "reactfire"
import type { QuerySnapshot } from "@firebase/firestore-types"
import { useSnackbar } from "notistack"

import CourseListItem from "./CourseListItem"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divider: {
      margin: `${theme.spacing(3)}px 0px`,
    },
    welcomeTextENG: {
      marginTop: theme.spacing(3),
    },
  })
)

export default (): JSX.Element => {
  const classes = useStyles()
  const coursesRef = useFirestore()
    .collection("courses")
    .orderBy("createdAt", "desc")
  const { status, data } = useFirestoreCollection(coursesRef)
  const { enqueueSnackbar } = useSnackbar()

  switch (status) {
    case "loading":
      return <CircularProgress />
    case "error":
      enqueueSnackbar("Failed to get courses! Please try to refresh page.", {
        variant: "error",
      })
      return <></>
    case "success": {
      return (
        <>
          <Typography>
            Tervetuloa Course-O-Raterin demoon! Täällä voit antaa palautetta
            aina kun siltä tuntuu. Tulevaisuudessa sovellusta kehitetään siten,
            että arvostelujen avulla voit vertailla kursseja ja valita niistä
            itsellesi parhaat.
          </Typography>

          <Typography className={classes.welcomeTextENG}>
            Welcome to the Course-O-Rater demo! Here you can give feedback
            whenever you feel like it! In the future, the application will be
            developed so that you can compare the courses and pick the best ones
            for you.
          </Typography>
          <Divider className={classes.divider} />
          <List aria-label="List of courses">
            {((data as unknown) as QuerySnapshot).docs.map((course) => (
              <CourseListItem
                key={course.id}
                to={`course/${course.id}`}
                course={course.data() as Course}
              />
            ))}
          </List>
        </>
      )
    }
    default:
      enqueueSnackbar("Unknown error.", {
        variant: "error",
      })
      return <></>
  }
}
