import { TCourse } from './course.interface';
import { Course } from './course.model';

const createCourseIntoDb = async (courseData: TCourse) => {
  // const result = await Course.create(courseData);
  if (await Course.isCourseExists(courseData._id)) {
    throw new Error('course alrready exists');
  }
  // const course = new Course(courseData);

  const result = await Course.create(courseData);
  return result;
};
export const CourseServices = {
  createCourseIntoDb,
};
