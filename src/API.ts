/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCourseInput = {
  id?: string | null
  name: string
  code: string
  location: string
  sisuId: string
}

export type ModelCourseConditionInput = {
  name?: ModelStringInput | null
  code?: ModelStringInput | null
  location?: ModelStringInput | null
  sisuId?: ModelStringInput | null
  and?: Array<ModelCourseConditionInput | null> | null
  or?: Array<ModelCourseConditionInput | null> | null
  not?: ModelCourseConditionInput | null
}

export type ModelStringInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
  size?: ModelSizeInput | null
}

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}

export type ModelSizeInput = {
  ne?: number | null
  eq?: number | null
  le?: number | null
  lt?: number | null
  ge?: number | null
  gt?: number | null
  between?: Array<number | null> | null
}

export type Course = {
  __typename: "Course"
  id?: string
  name?: string
  code?: string
  location?: string
  sisuId?: string
  courseRatings?: ModelCourseRatingConnection
  createdAt?: string
  updatedAt?: string
}

export type ModelCourseRatingConnection = {
  __typename: "ModelCourseRatingConnection"
  items?: Array<CourseRating | null> | null
  nextToken?: string | null
}

export type CourseRating = {
  __typename: "CourseRating"
  id?: string
  courseID?: string
  course?: Course
  totalRating?: number
  qualityOfLectures?: number
  qualityOfExercises?: number | null
  amountOfWork?: number
  support?: number
  happiness?: number | null
  feedback?: string | null
  createdAt?: string
  updatedAt?: string
}

export type UpdateCourseInput = {
  id: string
  name?: string | null
  code?: string | null
  location?: string | null
  sisuId?: string | null
}

export type DeleteCourseInput = {
  id?: string | null
}

export type CreateCourseRatingInput = {
  id?: string | null
  courseID: string
  totalRating: number
  qualityOfLectures: number
  qualityOfExercises?: number | null
  amountOfWork: number
  support: number
  happiness?: number | null
  feedback?: string | null
}

export type ModelCourseRatingConditionInput = {
  courseID?: ModelIDInput | null
  totalRating?: ModelFloatInput | null
  qualityOfLectures?: ModelFloatInput | null
  qualityOfExercises?: ModelFloatInput | null
  amountOfWork?: ModelFloatInput | null
  support?: ModelFloatInput | null
  happiness?: ModelFloatInput | null
  feedback?: ModelStringInput | null
  and?: Array<ModelCourseRatingConditionInput | null> | null
  or?: Array<ModelCourseRatingConditionInput | null> | null
  not?: ModelCourseRatingConditionInput | null
}

export type ModelIDInput = {
  ne?: string | null
  eq?: string | null
  le?: string | null
  lt?: string | null
  ge?: string | null
  gt?: string | null
  contains?: string | null
  notContains?: string | null
  between?: Array<string | null> | null
  beginsWith?: string | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
  size?: ModelSizeInput | null
}

export type ModelFloatInput = {
  ne?: number | null
  eq?: number | null
  le?: number | null
  lt?: number | null
  ge?: number | null
  gt?: number | null
  between?: Array<number | null> | null
  attributeExists?: boolean | null
  attributeType?: ModelAttributeTypes | null
}

export type UpdateCourseRatingInput = {
  id: string
  courseID?: string | null
  totalRating?: number | null
  qualityOfLectures?: number | null
  qualityOfExercises?: number | null
  amountOfWork?: number | null
  support?: number | null
  happiness?: number | null
  feedback?: string | null
}

export type DeleteCourseRatingInput = {
  id?: string | null
}

export type ModelCourseFilterInput = {
  id?: ModelIDInput | null
  name?: ModelStringInput | null
  code?: ModelStringInput | null
  location?: ModelStringInput | null
  sisuId?: ModelStringInput | null
  and?: Array<ModelCourseFilterInput | null> | null
  or?: Array<ModelCourseFilterInput | null> | null
  not?: ModelCourseFilterInput | null
}

export type ModelCourseConnection = {
  __typename: "ModelCourseConnection"
  items?: Array<Course | null> | null
  nextToken?: string | null
}

export type ModelCourseRatingFilterInput = {
  id?: ModelIDInput | null
  courseID?: ModelIDInput | null
  totalRating?: ModelFloatInput | null
  qualityOfLectures?: ModelFloatInput | null
  qualityOfExercises?: ModelFloatInput | null
  amountOfWork?: ModelFloatInput | null
  support?: ModelFloatInput | null
  happiness?: ModelFloatInput | null
  feedback?: ModelStringInput | null
  and?: Array<ModelCourseRatingFilterInput | null> | null
  or?: Array<ModelCourseRatingFilterInput | null> | null
  not?: ModelCourseRatingFilterInput | null
}

export type CreateCourseMutationVariables = {
  input?: CreateCourseInput
  condition?: ModelCourseConditionInput | null
}

export type CreateCourseMutation = {
  createCourse?: {
    __typename: "Course"
    id: string
    name: string
    code: string
    location: string
    sisuId: string
    courseRatings?: {
      __typename: "ModelCourseRatingConnection"
      items?: Array<{
        __typename: "CourseRating"
        id: string
        courseID: string
        totalRating: number
        qualityOfLectures: number
        qualityOfExercises?: number | null
        amountOfWork: number
        support: number
        happiness?: number | null
        feedback?: string | null
        createdAt: string
        updatedAt: string
      } | null> | null
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type UpdateCourseMutationVariables = {
  input?: UpdateCourseInput
  condition?: ModelCourseConditionInput | null
}

export type UpdateCourseMutation = {
  updateCourse?: {
    __typename: "Course"
    id: string
    name: string
    code: string
    location: string
    sisuId: string
    courseRatings?: {
      __typename: "ModelCourseRatingConnection"
      items?: Array<{
        __typename: "CourseRating"
        id: string
        courseID: string
        totalRating: number
        qualityOfLectures: number
        qualityOfExercises?: number | null
        amountOfWork: number
        support: number
        happiness?: number | null
        feedback?: string | null
        createdAt: string
        updatedAt: string
      } | null> | null
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type DeleteCourseMutationVariables = {
  input?: DeleteCourseInput
  condition?: ModelCourseConditionInput | null
}

export type DeleteCourseMutation = {
  deleteCourse?: {
    __typename: "Course"
    id: string
    name: string
    code: string
    location: string
    sisuId: string
    courseRatings?: {
      __typename: "ModelCourseRatingConnection"
      items?: Array<{
        __typename: "CourseRating"
        id: string
        courseID: string
        totalRating: number
        qualityOfLectures: number
        qualityOfExercises?: number | null
        amountOfWork: number
        support: number
        happiness?: number | null
        feedback?: string | null
        createdAt: string
        updatedAt: string
      } | null> | null
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type CreateCourseRatingMutationVariables = {
  input?: CreateCourseRatingInput
  condition?: ModelCourseRatingConditionInput | null
}

export type CreateCourseRatingMutation = {
  createCourseRating?: {
    __typename: "CourseRating"
    id: string
    courseID: string
    course?: {
      __typename: "Course"
      id: string
      name: string
      code: string
      location: string
      sisuId: string
      courseRatings?: {
        __typename: "ModelCourseRatingConnection"
        nextToken?: string | null
      } | null
      createdAt: string
      updatedAt: string
    } | null
    totalRating: number
    qualityOfLectures: number
    qualityOfExercises?: number | null
    amountOfWork: number
    support: number
    happiness?: number | null
    feedback?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type UpdateCourseRatingMutationVariables = {
  input?: UpdateCourseRatingInput
  condition?: ModelCourseRatingConditionInput | null
}

export type UpdateCourseRatingMutation = {
  updateCourseRating?: {
    __typename: "CourseRating"
    id: string
    courseID: string
    course?: {
      __typename: "Course"
      id: string
      name: string
      code: string
      location: string
      sisuId: string
      courseRatings?: {
        __typename: "ModelCourseRatingConnection"
        nextToken?: string | null
      } | null
      createdAt: string
      updatedAt: string
    } | null
    totalRating: number
    qualityOfLectures: number
    qualityOfExercises?: number | null
    amountOfWork: number
    support: number
    happiness?: number | null
    feedback?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type DeleteCourseRatingMutationVariables = {
  input?: DeleteCourseRatingInput
  condition?: ModelCourseRatingConditionInput | null
}

export type DeleteCourseRatingMutation = {
  deleteCourseRating?: {
    __typename: "CourseRating"
    id: string
    courseID: string
    course?: {
      __typename: "Course"
      id: string
      name: string
      code: string
      location: string
      sisuId: string
      courseRatings?: {
        __typename: "ModelCourseRatingConnection"
        nextToken?: string | null
      } | null
      createdAt: string
      updatedAt: string
    } | null
    totalRating: number
    qualityOfLectures: number
    qualityOfExercises?: number | null
    amountOfWork: number
    support: number
    happiness?: number | null
    feedback?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type GetCourseQueryVariables = {
  id?: string
}

export type GetCourseQuery = {
  getCourse?: {
    __typename: "Course"
    id: string
    name: string
    code: string
    location: string
    sisuId: string
    courseRatings?: {
      __typename: "ModelCourseRatingConnection"
      items?: Array<{
        __typename: "CourseRating"
        id: string
        courseID: string
        totalRating: number
        qualityOfLectures: number
        qualityOfExercises?: number | null
        amountOfWork: number
        support: number
        happiness?: number | null
        feedback?: string | null
        createdAt: string
        updatedAt: string
      } | null> | null
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type ListCoursesQueryVariables = {
  filter?: ModelCourseFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListCoursesQuery = {
  listCourses?: {
    __typename: "ModelCourseConnection"
    items?: Array<{
      __typename: "Course"
      id: string
      name: string
      code: string
      location: string
      sisuId: string
      courseRatings?: {
        __typename: "ModelCourseRatingConnection"
        nextToken?: string | null
      } | null
      createdAt: string
      updatedAt: string
    } | null> | null
    nextToken?: string | null
  } | null
}

export type GetCourseRatingQueryVariables = {
  id?: string
}

export type GetCourseRatingQuery = {
  getCourseRating?: {
    __typename: "CourseRating"
    id: string
    courseID: string
    course?: {
      __typename: "Course"
      id: string
      name: string
      code: string
      location: string
      sisuId: string
      courseRatings?: {
        __typename: "ModelCourseRatingConnection"
        nextToken?: string | null
      } | null
      createdAt: string
      updatedAt: string
    } | null
    totalRating: number
    qualityOfLectures: number
    qualityOfExercises?: number | null
    amountOfWork: number
    support: number
    happiness?: number | null
    feedback?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type ListCourseRatingsQueryVariables = {
  filter?: ModelCourseRatingFilterInput | null
  limit?: number | null
  nextToken?: string | null
}

export type ListCourseRatingsQuery = {
  listCourseRatings?: {
    __typename: "ModelCourseRatingConnection"
    items?: Array<{
      __typename: "CourseRating"
      id: string
      courseID: string
      course?: {
        __typename: "Course"
        id: string
        name: string
        code: string
        location: string
        sisuId: string
        createdAt: string
        updatedAt: string
      } | null
      totalRating: number
      qualityOfLectures: number
      qualityOfExercises?: number | null
      amountOfWork: number
      support: number
      happiness?: number | null
      feedback?: string | null
      createdAt: string
      updatedAt: string
    } | null> | null
    nextToken?: string | null
  } | null
}

export type OnCreateCourseSubscription = {
  onCreateCourse?: {
    __typename: "Course"
    id: string
    name: string
    code: string
    location: string
    sisuId: string
    courseRatings?: {
      __typename: "ModelCourseRatingConnection"
      items?: Array<{
        __typename: "CourseRating"
        id: string
        courseID: string
        totalRating: number
        qualityOfLectures: number
        qualityOfExercises?: number | null
        amountOfWork: number
        support: number
        happiness?: number | null
        feedback?: string | null
        createdAt: string
        updatedAt: string
      } | null> | null
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnUpdateCourseSubscription = {
  onUpdateCourse?: {
    __typename: "Course"
    id: string
    name: string
    code: string
    location: string
    sisuId: string
    courseRatings?: {
      __typename: "ModelCourseRatingConnection"
      items?: Array<{
        __typename: "CourseRating"
        id: string
        courseID: string
        totalRating: number
        qualityOfLectures: number
        qualityOfExercises?: number | null
        amountOfWork: number
        support: number
        happiness?: number | null
        feedback?: string | null
        createdAt: string
        updatedAt: string
      } | null> | null
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnDeleteCourseSubscription = {
  onDeleteCourse?: {
    __typename: "Course"
    id: string
    name: string
    code: string
    location: string
    sisuId: string
    courseRatings?: {
      __typename: "ModelCourseRatingConnection"
      items?: Array<{
        __typename: "CourseRating"
        id: string
        courseID: string
        totalRating: number
        qualityOfLectures: number
        qualityOfExercises?: number | null
        amountOfWork: number
        support: number
        happiness?: number | null
        feedback?: string | null
        createdAt: string
        updatedAt: string
      } | null> | null
      nextToken?: string | null
    } | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnCreateCourseRatingSubscription = {
  onCreateCourseRating?: {
    __typename: "CourseRating"
    id: string
    courseID: string
    course?: {
      __typename: "Course"
      id: string
      name: string
      code: string
      location: string
      sisuId: string
      courseRatings?: {
        __typename: "ModelCourseRatingConnection"
        nextToken?: string | null
      } | null
      createdAt: string
      updatedAt: string
    } | null
    totalRating: number
    qualityOfLectures: number
    qualityOfExercises?: number | null
    amountOfWork: number
    support: number
    happiness?: number | null
    feedback?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnUpdateCourseRatingSubscription = {
  onUpdateCourseRating?: {
    __typename: "CourseRating"
    id: string
    courseID: string
    course?: {
      __typename: "Course"
      id: string
      name: string
      code: string
      location: string
      sisuId: string
      courseRatings?: {
        __typename: "ModelCourseRatingConnection"
        nextToken?: string | null
      } | null
      createdAt: string
      updatedAt: string
    } | null
    totalRating: number
    qualityOfLectures: number
    qualityOfExercises?: number | null
    amountOfWork: number
    support: number
    happiness?: number | null
    feedback?: string | null
    createdAt: string
    updatedAt: string
  } | null
}

export type OnDeleteCourseRatingSubscription = {
  onDeleteCourseRating?: {
    __typename: "CourseRating"
    id: string
    courseID: string
    course?: {
      __typename: "Course"
      id: string
      name: string
      code: string
      location: string
      sisuId: string
      courseRatings?: {
        __typename: "ModelCourseRatingConnection"
        nextToken?: string | null
      } | null
      createdAt: string
      updatedAt: string
    } | null
    totalRating: number
    qualityOfLectures: number
    qualityOfExercises?: number | null
    amountOfWork: number
    support: number
    happiness?: number | null
    feedback?: string | null
    createdAt: string
    updatedAt: string
  } | null
}
