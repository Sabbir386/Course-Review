import { NextFunction, Request, Response } from 'express';
import { CourseServices } from './course.service';
import CourseValidationSchema from '../../course_modules/course/course.validation';
import sendResponse from '../../utilis/sendResponse';
import httpStatus from 'http-status';

const createCourse = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const course = req.body;
    const zodParsedData = CourseValidationSchema.parse(course);
    const result = await CourseServices.createCourseIntoDb(zodParsedData);
    // res.status(200).json({
    //   success: true,
    //   statusCode: 201,
    //   messsage: 'Course created successfully',
    //   data: result,
    // });
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: 'Course created successfully',
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};
const getCoursesFromDb = async (req: Request, res: Response) => {
  try {
    const queryParams: any = req.query;
    const result = await CourseServices.getCousresFromDb(queryParams);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Courses are retrieved succesfully',
      data: result,
    });
  } catch (error) {
    // console.error(error);
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: 'Internal Server Error',
    });
  }
};
const updatedCourseById = async (req: Request, res: Response) => {
  try {
    const { courseId } = req.params;
    const courseData = req.body;
    const result = await CourseServices.updatedCourseIntoDb(
      courseId,
      courseData,
    );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Course updated successfully',
      data: result,
    });
  } catch (error) {
    // console.error(error);
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: 'Internal Server Error',
    });
  }
};

export const CourseControllers = {
  createCourse,
  getCoursesFromDb,
  updatedCourseById,
};
