import { Course } from './course.interface';
import { CourseModel } from './course.model';

const createCourseIntoDb = async (course: Course) => {
  const result = await CourseModel.create(course);
  return result;
};
export const CourseServices = {
  createCourseIntoDb,
};
