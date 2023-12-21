import { TCourse } from './course.interface';
import { Course } from './course.model';

const createCourseIntoDb = async (courseData: TCourse) => {
  // const result = await Course.create(courseData);
  // if (await Course.isCourseExists(courseData._id)) {
  //   throw new Error('course alrready exists');
  // }
  // const course = new Course(courseData);

  const newCourse = new Course(courseData);

  // Calculate duration in weeks
  const startDate = new Date(newCourse.startDate);
  const endDate = new Date(newCourse.endDate);
  const durationInWeeks = Math.ceil(
    (endDate.getTime() - startDate.getTime()) / (7 * 24 * 60 * 60 * 1000),
  );
  newCourse.durationInWeeks = durationInWeeks;

  // Save course into database
  const savedCourse = await newCourse.save();
  //  OR
  // const result = await Course.create(savedCourse);
  return savedCourse;
};

interface CourseQueryParams {
  page?: number;
  limit?: number;
  sortBy?:
    | 'title'
    | 'price'
    | 'startDate'
    | 'endDate'
    | 'language'
    | 'durationInWeeks';
  sortOrder?: 'asc' | 'desc';
  minPrice?: number;
  maxPrice?: number;
  tags?: string[];
  startDate?: string;
  endDate?: string;
  language?: string;
  provider?: string;
  durationInWeeks?: number;
  level?: string;
}

const getCousresFromDb = async (
  queryParams: CourseQueryParams,
): Promise<any> => {
  try {
    const page = queryParams.page || 1;
    const limit = queryParams.limit || 10;

    const query: any = {};
    if (
      queryParams.minPrice !== undefined ||
      queryParams.maxPrice !== undefined
    ) {
      query.price = {};
      if (queryParams.minPrice !== undefined)
        query.price.$gte = queryParams.minPrice;
      if (queryParams.maxPrice !== undefined)
        query.price.$lte = queryParams.maxPrice;
    }

    if (queryParams.tags && queryParams.tags.length > 0) {
      query['tags.name'] = { $in: queryParams.tags };
    }

    if (queryParams.startDate !== undefined)
      query.startDate = { $gte: queryParams.startDate };
    if (queryParams.endDate !== undefined)
      query.endDate = { $lte: queryParams.endDate };
    if (queryParams.language !== undefined)
      query.language = queryParams.language;
    if (queryParams.provider !== undefined)
      query.provider = queryParams.provider;
    if (queryParams.durationInWeeks !== undefined)
      query.durationInWeeks = queryParams.durationInWeeks;
    if (queryParams.level !== undefined)
      query['details.level'] = queryParams.level;

    const total = await Course.countDocuments(query);

    const courses = await Course.find(query)
      .skip((page - 1) * limit)
      .limit(limit)
      .sort(
        queryParams.sortBy
          ? { [queryParams.sortBy]: queryParams.sortOrder === 'desc' ? -1 : 1 }
          : {},
      );

    return {
      meta: {
        page,
        limit,
        total,
      },
      data: courses,
    };
  } catch (error) {
    throw new Error('Invalid query parameters');
  }
};

export const CourseServices = {
  createCourseIntoDb,
  getCousresFromDb,
};
