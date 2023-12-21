import { TCategory } from './category.interface';
import { Category } from './category.model';

const createCategoryIntoDb = async (categoryData: TCategory) => {
  const result = await Category.create(categoryData);
  return result;
};
const getCategoryFromDb = async () => {
  const result = await Category.find();
  return result;
};
export const CategoryServices = {
  createCategoryIntoDb,
  getCategoryFromDb,
};
