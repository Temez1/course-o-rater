/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
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
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
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
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
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
export const createCourseRating = /* GraphQL */ `
  mutation CreateCourseRating(
    $input: CreateCourseRatingInput!
    $condition: ModelCourseRatingConditionInput
  ) {
    createCourseRating(input: $input, condition: $condition) {
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
export const updateCourseRating = /* GraphQL */ `
  mutation UpdateCourseRating(
    $input: UpdateCourseRatingInput!
    $condition: ModelCourseRatingConditionInput
  ) {
    updateCourseRating(input: $input, condition: $condition) {
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
export const deleteCourseRating = /* GraphQL */ `
  mutation DeleteCourseRating(
    $input: DeleteCourseRatingInput!
    $condition: ModelCourseRatingConditionInput
  ) {
    deleteCourseRating(input: $input, condition: $condition) {
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
