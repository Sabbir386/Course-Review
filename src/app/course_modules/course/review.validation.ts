import { z } from 'zod';

const ReviewValidationSchema = z.object({
  _id: z.string().uuid(),
  courseId: z.string().uuid(),
  rating: z.number().int().min(1).max(5),
  review: z.string(),
});

export default ReviewValidationSchema;
