/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        sisuId
        createdAt
        updatedAt
        courseRatings {
          nextToken
        }
      }
      nextToken
    }
  }
`
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
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
export const getCourseRating = /* GraphQL */ `
  query GetCourseRating($id: ID!) {
    getCourseRating(id: $id) {
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
        }
        owner
      }
      nextToken
    }
  }
`
