import { NextFunction, Request, Response } from 'express';

import httpStatus from 'http-status';
import sendResponse from '../../utilis/sendResponse';
import ReviewValidationSchema from './review.validation';
import { ReviewServices } from './review.services';

const createReview = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const review = req.body;
    const zodParsedData = ReviewValidationSchema.parse(review);
    const result = await ReviewServices.createReviewIntoDb(zodParsedData);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: 'Review created successfully',
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

export const ReviewController = {
  createReview,
};
