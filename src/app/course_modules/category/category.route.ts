import express from 'express';
import { CategoryController } from './category.controllers';
const router = express.Router();
router.post('/categories', CategoryController.createCategory);

export const CategoryRoutes = router;
