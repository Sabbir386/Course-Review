import { Model } from 'mongoose';

export type TTag = {
  name: string;
  isDeleted: boolean;
};

export type TCourseDetails = {
  level: string;
  description: string;
};
export type TCourse = {
  _id: string;
  title: string;
  instructor: string;
  categoryId: string;
  price: number;
  tags: TTag[];
  startDate: string;
  endDate: string;
  language: string;
  provider: string;
  durationInWeeks: number;
  details: TCourseDetails;
};
export type TCategory = {
  _id: string;
  name: string;
};

export type TReview = {
  _id: string;
  courseId: string;
  rating: number;
  review: string;
};
//custom instance method
export type CourseMethod = {
  isCourseExists(id: string): Promise<TCourse | null>;
};
export type CourseModel = Model<TCourse, Record<string, never>, CourseMethod>;
