import { NextFunction, Request, Response } from 'express';

import httpStatus from 'http-status';
import sendResponse from '../../utilis/sendResponse';
import CategoryValidationSchema from './category.validation';
import { CategoryServices } from './category.services';

const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const category = req.body;
    const zodParsedData = CategoryValidationSchema.parse(category);
    const result = await CategoryServices.createCategoryIntoDb(zodParsedData);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: 'Category created successfully',
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

const getAllCategories = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await CategoryServices.getCategoryFromDb();
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Categories retrieved successfully',
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

export const CategoryController = {
  createCategory,
  getAllCategories,
};
