/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse {
    onCreateCourse {
      id
      name
      code
      location
      sisuId
      createdAt
      updatedAt
      courseRatings {
        items {
          id
          courseID
          totalRating
          qualityOfLectures
          qualityOfExercises
          amountOfWork
          support
          happiness
          feedback
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse {
    onUpdateCourse {
      id
      name
      code
      location
      sisuId
      createdAt
      updatedAt
      courseRatings {
        items {
          id
          courseID
          totalRating
          qualityOfLectures
          qualityOfExercises
          amountOfWork
          support
          happiness
          feedback
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse {
    onDeleteCourse {
      id
      name
      code
      location
      sisuId
      createdAt
      updatedAt
      courseRatings {
        items {
          id
          courseID
          totalRating
          qualityOfLectures
          qualityOfExercises
          amountOfWork
          support
          happiness
          feedback
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`
export const onCreateCourseRating = /* GraphQL */ `
  subscription OnCreateCourseRating($owner: String) {
    onCreateCourseRating(owner: $owner) {
      id
      courseID
      totalRating
      qualityOfLectures
      qualityOfExercises
      amountOfWork
      support
      happiness
      feedback
      createdAt
      updatedAt
      course {
        id
        name
        code
        location
        sisuId
        createdAt
        updatedAt
        courseRatings {
          nextToken
        }
      }
      owner
    }
  }
`
export const onUpdateCourseRating = /* GraphQL */ `
  subscription OnUpdateCourseRating($owner: String) {
    onUpdateCourseRating(owner: $owner) {
      id
      courseID
      totalRating
      qualityOfLectures
      qualityOfExercises
      amountOfWork
      support
      happiness
      feedback
      createdAt
      updatedAt
      course {
        id
        name
        code
        location
        sisuId
        createdAt
        updatedAt
        courseRatings {
          nextToken
        }
      }
      owner
    }
  }
`
export const onDeleteCourseRating = /* GraphQL */ `
  subscription OnDeleteCourseRating($owner: String) {
    onDeleteCourseRating(owner: $owner) {
      id
      courseID
      totalRating
      qualityOfLectures
      qualityOfExercises
      amountOfWork
      support
      happiness
      feedback
      createdAt
      updatedAt
      course {
        id
        name
        code
        location
        sisuId
        createdAt
        updatedAt
        courseRatings {
          nextToken
        }
      }
      owner
    }
  }
`
