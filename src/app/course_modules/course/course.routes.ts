import express from 'express';
import { CourseControllers } from './course.controller';
const router = express.Router();
router.post('/course', CourseControllers.createCourse);
router.get('/courses', CourseControllers.getCoursesFromDb);
router.put('/courses/:courseId', CourseControllers.updatedCourseById);
export const CourseRoutes = router;
