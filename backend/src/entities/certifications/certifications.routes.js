import express from 'express';
import {
  getCertHeaderController,
  updateCertHeaderController,
  getAllCertificationsController,
  getCertificationByIdController,
  createCertificationController,
  updateCertificationController,
  deleteCertificationController,
} from './certifications.controller.js';
import { verifyToken, adminMiddleware } from '../../core/middlewares/authMiddleware.js';

const router = express.Router();

// Header routes
router.get('/header', getCertHeaderController);
router.put('/header', verifyToken, adminMiddleware, updateCertHeaderController);

// Item routes
router.get('/', getAllCertificationsController);
router.get('/:id', getCertificationByIdController);
router.post('/', verifyToken, adminMiddleware, createCertificationController);
router.put('/:id', verifyToken, adminMiddleware, updateCertificationController);
router.delete('/:id', verifyToken, adminMiddleware, deleteCertificationController);

export default router;
