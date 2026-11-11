import express from 'express';
import {
  getProjectHeaderController,
  updateProjectHeaderController,
  getAllProjectsController,
  getProjectByIdController,
  createProjectController,
  updateProjectController,
  deleteProjectController,
} from './projects.controller.js';
import { verifyToken, adminMiddleware } from '../../core/middlewares/authMiddleware.js';

const router = express.Router();

// Header routes
router.get('/header', getProjectHeaderController);
router.put('/header', verifyToken, adminMiddleware, updateProjectHeaderController);

// Projects routes
router.get('/', getAllProjectsController);
router.get('/:id', getProjectByIdController);
router.post('/', verifyToken, adminMiddleware, createProjectController);
router.put('/:id', verifyToken, adminMiddleware, updateProjectController);
router.delete('/:id', verifyToken, adminMiddleware, deleteProjectController);

export default router;
