import { TReview } from './review.interface';
import { Review } from './review.model';

const createReviewIntoDb = async (reviewData: TReview) => {
  const result = await Review.create(reviewData);
  return result;
};
export const ReviewServices = {
  createReviewIntoDb,
};
