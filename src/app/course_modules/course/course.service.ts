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
export const CourseServices = {
  createCourseIntoDb,
};
