import { Schema, model } from 'mongoose';
import { TCategory } from './course.interface';

const categorySchema = new Schema<TCategory>({
  name: { type: String, required: true, unique: true },
});

export const CategoryModel = model<TCategory>('Category', categorySchema);
