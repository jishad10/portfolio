import express from 'express';
import {
  getServiceHeaderController,
  updateServiceHeaderController,
  getAllServicesController,
  getServiceByIdController,
  createServiceController,
  updateServiceController,
  deleteServiceController,
} from './services.controller.js';
import { verifyToken, adminMiddleware } from '../../core/middlewares/authMiddleware.js';

const router = express.Router();

// Header routes
router.get('/header', getServiceHeaderController);
router.put('/header', verifyToken, adminMiddleware, updateServiceHeaderController);

// Item routes
router.get('/', getAllServicesController);
router.get('/:id', getServiceByIdController);
router.post('/', verifyToken, adminMiddleware, createServiceController);
router.put('/:id', verifyToken, adminMiddleware, updateServiceController);
router.delete('/:id', verifyToken, adminMiddleware, deleteServiceController);

export default router;
