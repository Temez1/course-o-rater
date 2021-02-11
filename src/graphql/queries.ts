/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
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
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`
export const getCourseRating = /* GraphQL */ `
  query GetCourseRating($id: ID!) {
    getCourseRating(id: $id) {
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
export const listCourseRatings = /* GraphQL */ `
  query ListCourseRatings(
    $filter: ModelCourseRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        courseID
        course {
          id
          name
          code
          location
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
      nextToken
    }
  }
`
