import { NextFunction, Request, Response } from 'express';
import { CourseServices } from './course.service';
import CourseValidationSchema from './course.validation';

const createCourse = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const course = req.body;
    const zodParsedData = CourseValidationSchema.parse(course);
    const result = await CourseServices.createCourseIntoDb(zodParsedData);
    res.status(200).json({
      success: true,
      statusCode: 201,
      messsage: 'Course Created Successfully',
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};
export const CourseControllers = {
  createCourse,
};
