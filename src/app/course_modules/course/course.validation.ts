import { z } from 'zod';

const CourseValidationSchema = z.object({
  _id: z.string().uuid(),
  title: z.string(),
  instructor: z.string(),
  categoryId: z.string().uuid(),
  price: z.number(),
  tags: z.array(
    z.object({
      name: z.string(),
      isDeleted: z.boolean(),
    }),
  ),
  startDate: z.string(),
  endDate: z.string(),
  language: z.string(),
  provider: z.string(),
  durationInWeeks: z.number().int(),
  details: z.object({
    level: z.string(),
    description: z.string(),
  }),
});

export default CourseValidationSchema;
