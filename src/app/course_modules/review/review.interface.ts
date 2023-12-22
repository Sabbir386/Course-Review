import { Schema } from 'mongoose';

export type TReview = {
  courseId: { type: Schema.Types.ObjectId; ref: 'Course' };
  rating: number;
  review: string;
};
