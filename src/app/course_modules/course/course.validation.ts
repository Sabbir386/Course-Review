import { z } from 'zod';

const CourseValidationSchema = z.object({
  title: z.string(),
  instructor: z.string(),
  categoryId: z.string(),
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
  durationInWeeks: z.number().int().optional(),
  details: z.object({
    level: z.enum(['Beginner', 'Intermediate', 'Advanced']),
    description: z.string(),
  }),
});

export default CourseValidationSchema;
