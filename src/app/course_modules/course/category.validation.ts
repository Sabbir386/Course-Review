import { z } from 'zod';

const CategoryValidationSchema = z.object({
  _id: z.string().uuid(),
  name: z.string(),
});

export default CategoryValidationSchema;
