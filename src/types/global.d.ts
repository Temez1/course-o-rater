import type { Timestamp, CollectionReference } from "@firebase/firestore-types"

declare global {
  type Course = {
    id?: string
    name: string
    avgRating: number | undefined
    description: string
    code: string
    ratings?: CollectionReference<CourseRating>
  }

  type CourseRating = {
    id?: string
    total: number
    feedback: string
    createdAt: Timestamp
  }
}

export {}
