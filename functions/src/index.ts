import * as functions from "firebase-functions"

import * as admin from "firebase-admin"

admin.initializeApp()

export const updateCourseAverageRating = functions
  .region("europe-west1")
  .firestore.document("/courses/{courseId}/ratings/{ratingId}")
  .onWrite(async (snap, context) => {
    const { courseId } = context.params
    const db = admin.firestore()
    const courseRatings = await db
      .doc(`/courses/${courseId}`)
      .collection("ratings")
      .get()

    const average =
      courseRatings.docs
        .map((rating) => rating.data().total)
        .reduce((accumulator, value) => accumulator + value, 0) /
      courseRatings.docs.length

    await db.doc(`/courses/${courseId}`).update({ avgRating: average })

    return "Updated successfully"
  })
