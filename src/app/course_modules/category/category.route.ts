import express from 'express';
import { CategoryController } from './category.controllers';
const router = express.Router();
router.post('/categories', CategoryController.createCategory);
router.get('/categories', CategoryController.getAllCategories);

export const CategoryRoutes = router;
