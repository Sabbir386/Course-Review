import { TCourse } from './course.interface';
import { Course } from './course.model';

const createCourseIntoDb = async (courseData: TCourse) => {
  // const result = await Course.create(courseData);
  const course = new Course(courseData);
  if (await course.isCourseExists(courseData._id)) {
    throw new Error('course alrready exists');
  }
  const result = await course.save();
  return result;
};
export const CourseServices = {
  createCourseIntoDb,
};
