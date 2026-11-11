import express from 'express';
import {
  getExperienceHeaderController,
  updateExperienceHeaderController,
  getAllExperiencesController,
  getExperienceByIdController,
  createExperienceController,
  updateExperienceController,
  deleteExperienceController,
} from './experience.controller.js';
import { verifyToken, adminMiddleware } from '../../core/middlewares/authMiddleware.js';

const router = express.Router();

// Header routes
router.get('/header', getExperienceHeaderController);
router.put('/header', verifyToken, adminMiddleware, updateExperienceHeaderController);

// Item routes
router.get('/', getAllExperiencesController);
router.get('/:id', getExperienceByIdController);
router.post('/', verifyToken, adminMiddleware, createExperienceController);
router.put('/:id', verifyToken, adminMiddleware, updateExperienceController);
router.delete('/:id', verifyToken, adminMiddleware, deleteExperienceController);

export default router;
