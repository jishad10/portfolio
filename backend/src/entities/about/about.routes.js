import express from 'express';
import {
  getAboutController,
  updateAboutController,
  deleteAboutController,
} from './about.controller.js';
import { verifyToken, adminMiddleware } from '../../core/middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getAboutController);
router.post('/', verifyToken, adminMiddleware, updateAboutController);
router.put('/', verifyToken, adminMiddleware, updateAboutController);
router.delete('/', verifyToken, adminMiddleware, deleteAboutController);

export default router;
