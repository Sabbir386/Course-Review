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
const getCoursesFromDb = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const queryParams: any = req.query;
    const result = await CourseServices.getCousresFromDb(queryParams);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Courses are retrieved succesfully',
      data: result,
    });
  } catch (err: any) {
    // console.error(error);
    next(err);
  }
};
const updatedCourseById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
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
  } catch (err: any) {
    next(err);
  }
};
const getCoursesandReviewsById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const courseId = req.params.courseId;
    const result = await CourseServices.getCourseWithReviewsFromDb(courseId);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Course and Reviews retrieved successfully',
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};
const getBestCourseOnAverageReview = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // const courseId = req.params.courseId;
    const result = await CourseServices.getBestCourseOnAverageReview();

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Best course retrieved successfully',
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

export const CourseControllers = {
  createCourse,
  getCoursesFromDb,
  updatedCourseById,
  getCoursesandReviewsById,
  getBestCourseOnAverageReview,
};
