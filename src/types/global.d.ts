import type { Timestamp } from "@firebase/firestore-types"

declare global {
  type Course = {
    id?: string
    name: string
    createdAt: Timestamp
    avgRating: number | undefined
    description: string
    code: string
  }

  type CourseRating = {
    id?: string
    total: number
    feedback: string
    createdAt: Timestamp
    userId: string
  }
}

export {}
