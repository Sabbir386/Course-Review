import { Request, Response } from 'express';
import { CourseServices } from './course.service';

const createCourse = async (req: Request, res: Response) => {
  try {
    const course = req.body.course;
    const result = await CourseServices.createCourseIntoDb(course);
    res.status(200).json({
      success: true,
      messsage: 'Course Created Successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const CourseControllers = {
  createCourse,
};
