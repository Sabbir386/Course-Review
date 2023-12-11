export type Tag = {
  name: string;
  isDeleted: boolean;
};

export type CourseDetails = {
  level: string;
  description: string;
};
export type Course = {
  _id: string;
  title: string;
  instructor: string;
  categoryId: string;
  price: number;
  tags: Tag[];
  startDate: string;
  endDate: string;
  language: string;
  provider: string;
  durationInWeeks: number;
  details: CourseDetails;
};
export type Category = {
  _id: string;
  name: string;
};

export type Review = {
  _id: string;
  courseId: string;
  rating: number;
  review: string;
};
