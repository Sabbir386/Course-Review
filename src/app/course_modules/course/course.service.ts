import { Request, Response } from 'express';
import { TCourse } from './course.interface';
import { Course } from './course.model';

const createCourseIntoDb = async (courseData: TCourse) => {
  // const result = await Course.create(courseData);
  // if (await Course.isCourseExists(courseData._id)) {
  //   throw new Error('course alrready exists');
  // }
  // const course = new Course(courseData);

  const newCourse = new Course(courseData);

  // Calculate duration in weeks
  const startDate = new Date(newCourse.startDate);
  const endDate = new Date(newCourse.endDate);
  const durationInWeeks = Math.ceil(
    (endDate.getTime() - startDate.getTime()) / (7 * 24 * 60 * 60 * 1000),
  );
  newCourse.durationInWeeks = durationInWeeks;

  // Save course into database
  const savedCourse = await newCourse.save();
  //  OR
  // const result = await Course.create(savedCourse);
  return savedCourse;
};
// export type Ttag = {
//   name: string;
//   isDeleted: boolean;
// };
// type queryObject = {
//   page: string;
//   limit: string;
//   minPrice: string;
//   maxPrice: string;
//   tags: Ttag[];
//   startDate: string;
//   endDate: string;
//   language: string;
//   provider: string;
//   durationInWeeks: string;
//   level: string;
// };

interface CourseQueryParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  minPrice?: number;
  maxPrice?: number;
  tags?: string;
  startDate?: string;
  endDate?: string;
  language?: string;
  provider?: string;
  durationInWeeks?: number;
  level?: string;
}
const getCousresFromDb = async (
  queryParams: CourseQueryParams,
): Promise<any> => {
  try {
    const page = queryParams.page || 1;
    const limit = queryParams.limit || 10;

    const query: any = {}; // Construct your query based on queryParams

    const total = await Course.countDocuments(query);

    const courses = await Course.find(query)
      .skip((page - 1) * limit)
      .limit(limit)
      .sort(
        queryParams.sortBy
          ? { [queryParams.sortBy]: queryParams.sortOrder === 'desc' ? -1 : 1 }
          : {},
      );

    return {
      meta: {
        page,
        limit,
        total,
      },
      data: courses,
    };
  } catch (error) {
    throw new Error('Internal Server Error');
  }
};

export const CourseServices = {
  createCourseIntoDb,
  getCousresFromDb,
};
