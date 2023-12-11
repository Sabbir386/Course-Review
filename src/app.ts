import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { CourseRoutes } from './app/course_modules/course/course.routes';
const app: Application = express();
//parsers
app.use(express.json());
app.use(cors());

app.use('/api/course', CourseRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
export default app;
