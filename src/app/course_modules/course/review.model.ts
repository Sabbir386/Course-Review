import { Schema, model } from 'mongoose';
import { Review } from './course.interface';

const reviewSchema = new Schema<Review>({
  courseId: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  review: { type: String, required: true },
});

export const ReviewModel = model<Review>('Review', reviewSchema);