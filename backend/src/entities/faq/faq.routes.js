import express from 'express';
import {
  getFAQHeaderController,
  updateFAQHeaderController,
  getAllFAQsController,
  getFAQByIdController,
  createFAQController,
  updateFAQController,
  deleteFAQController,
} from './faq.controller.js';
import { verifyToken, adminMiddleware } from '../../core/middlewares/authMiddleware.js';

const router = express.Router();

// Header routes
router.get('/header', getFAQHeaderController);
router.put('/header', verifyToken, adminMiddleware, updateFAQHeaderController);

// Item routes
router.get('/', getAllFAQsController);
router.get('/:id', getFAQByIdController);
router.post('/', verifyToken, adminMiddleware, createFAQController);
router.put('/:id', verifyToken, adminMiddleware, updateFAQController);
router.delete('/:id', verifyToken, adminMiddleware, deleteFAQController);

export default router;
