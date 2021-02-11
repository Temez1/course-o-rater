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
export const createCourseRating = /* GraphQL */ `
  mutation CreateCourseRating(
    $input: CreateCourseRatingInput!
    $condition: ModelCourseRatingConditionInput
  ) {
    createCourseRating(input: $input, condition: $condition) {
      id
      courseID
      course {
        id
        name
        code
        location
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
export const updateCourseRating = /* GraphQL */ `
  mutation UpdateCourseRating(
    $input: UpdateCourseRatingInput!
    $condition: ModelCourseRatingConditionInput
  ) {
    updateCourseRating(input: $input, condition: $condition) {
      id
      courseID
      course {
        id
        name
        code
        location
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
export const deleteCourseRating = /* GraphQL */ `
  mutation DeleteCourseRating(
    $input: DeleteCourseRatingInput!
    $condition: ModelCourseRatingConditionInput
  ) {
    deleteCourseRating(input: $input, condition: $condition) {
      id
      courseID
      course {
        id
        name
        code
        location
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
