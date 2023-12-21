import { TCategory } from './category.interface';
import { Category } from './category.model';

const createCategoryIntoDb = async (categoryData: TCategory) => {
  const result = await Category.create(categoryData);
  return result;
};

export const CategoryServices = {
  createCategoryIntoDb,
};
