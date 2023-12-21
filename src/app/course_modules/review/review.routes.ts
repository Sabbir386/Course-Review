import express from 'express';
import { ReviewController } from './review.controllers';
const router = express.Router();
router.post('/reviews', ReviewController.createReview);

export const ReviewRoutes = router;
