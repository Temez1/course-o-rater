import { CourseTotalRating } from "./notGlobal"

declare global {
  type CourseRating = {
    totalRating: number
    feedback: string
  }

  type CourseRatings = Array<CourseRating> | null

  type Course = {
    id: string
    name: string
    totalRating: CourseTotalRating
    description: string
    code: string
    ratings: CourseRatings
  }

  type Courses = Array<Course> | null

  type CourseData = {
    name: string
    description: string
    code: string
    ratings: CourseRatings
  }
}

export {}
