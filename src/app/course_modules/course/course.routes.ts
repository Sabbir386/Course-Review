import express from 'express';
import { CourseControllers } from './course.controller';
const router = express.Router();
router.post('/course', CourseControllers.createCourse);
router.get('/courses', CourseControllers.getCoursesFromDb);
router.put('/courses/:courseId', CourseControllers.updatedCourseById);
router.get(
  '/courses/:courseId/reviews',
  CourseControllers.getCoursesandReviewsById,
);
router.get('/course/best', CourseControllers.getBestCourseOnAverageReview);
export const CourseRoutes = router;
