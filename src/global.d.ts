declare global {
  type CourseRating = {
    totalRating: number
    feedback: string
  }

  type Course = {
    id: string
    name: string
    description: string
    code: string
    ratings: Array<CourseRating> | null
  }

  type Courses = Array<Course>
}

export {}