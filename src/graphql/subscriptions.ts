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
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        nextToken
      }
      createdAt
      updatedAt
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`
export const onCreateCourseRating = /* GraphQL */ `
  subscription OnCreateCourseRating {
    onCreateCourseRating {
      id
      courseID
      course {
        id
        name
        code
        location
        sisuId
        courseRatings {
          nextToken
        }
        createdAt
        updatedAt
      }
      totalRating
      qualityOfLectures
      qualityOfExercises
      amountOfWork
      support
      happiness
      feedback
      createdAt
      updatedAt
    }
  }
`
export const onUpdateCourseRating = /* GraphQL */ `
  subscription OnUpdateCourseRating {
    onUpdateCourseRating {
      id
      courseID
      course {
        id
        name
        code
        location
        sisuId
        courseRatings {
          nextToken
        }
        createdAt
        updatedAt
      }
      totalRating
      qualityOfLectures
      qualityOfExercises
      amountOfWork
      support
      happiness
      feedback
      createdAt
      updatedAt
    }
  }
`
export const onDeleteCourseRating = /* GraphQL */ `
  subscription OnDeleteCourseRating {
    onDeleteCourseRating {
      id
      courseID
      course {
        id
        name
        code
        location
        sisuId
        courseRatings {
          nextToken
        }
        createdAt
        updatedAt
      }
      totalRating
      qualityOfLectures
      qualityOfExercises
      amountOfWork
      support
      happiness
      feedback
      createdAt
      updatedAt
    }
  }
`
