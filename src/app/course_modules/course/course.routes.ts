import express from 'express';
import { CourseControllers } from './course.controller';
const router = express.Router();
router.post('/create-course', CourseControllers.createCourse);
