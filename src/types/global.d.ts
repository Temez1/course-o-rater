import { TotalRating } from "./notGlobal"

declare global {
  type CourseRating = {
    totalRating: number
    feedback: string
  }

  type Course = {
    id: string
    name: string
    totalRating: TotalRating
    description: string
    code: string
    ratings: Array<CourseRating> | null
  }

  type CourseQuery = {
    name: string
    description: string
    code: string
    ratings: Array<CourseRating> | null
  }

  type Courses = Array<Course> | null
}

export {}
