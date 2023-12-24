import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { CourseRoutes } from './app/course_modules/course/course.routes';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';
import { CategoryRoutes } from './app/course_modules/category/category.route';
import { ReviewRoutes } from './app/course_modules/review/review.routes';
const app: Application = express();
//parsers
app.use(express.json());
app.use(cors());

app.use('/api/', CourseRoutes);
app.use('/api/', CategoryRoutes);
app.use('/api/', ReviewRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
app.use(globalErrorHandler);
app.use(notFound);
export default app;
