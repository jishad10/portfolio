import express from 'express';
import {
  getTestimonialHeaderController,
  updateTestimonialHeaderController,
  getAllTestimonialsController,
  getTestimonialByIdController,
  createTestimonialController,
  updateTestimonialController,
  deleteTestimonialController,
} from './testimonials.controller.js';
import { verifyToken, adminMiddleware } from '../../core/middlewares/authMiddleware.js';

const router = express.Router();

// Header routes
router.get('/header', getTestimonialHeaderController);
router.put('/header', verifyToken, adminMiddleware, updateTestimonialHeaderController);

// Item routes
router.get('/', getAllTestimonialsController);
router.get('/:id', getTestimonialByIdController);
router.post('/', verifyToken, adminMiddleware, createTestimonialController);
router.put('/:id', verifyToken, adminMiddleware, updateTestimonialController);
router.delete('/:id', verifyToken, adminMiddleware, deleteTestimonialController);

export default router;
