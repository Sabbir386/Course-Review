import { Schema, model } from 'mongoose';
import { Category } from './course.interface';

const categorySchema = new Schema<Category>({
  name: { type: String, required: true, unique: true },
});

export const CategoryModel = model<Category>('Category', categorySchema);
