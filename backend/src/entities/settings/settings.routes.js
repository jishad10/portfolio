import express from 'express';
import {
  getSettingsController,
  updateSettingsController,
  deleteSettingsController,
} from './settings.controller.js';
import { verifyToken, adminMiddleware } from '../../core/middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getSettingsController);
router.post('/', verifyToken, adminMiddleware, updateSettingsController);
router.put('/', verifyToken, adminMiddleware, updateSettingsController);
router.delete('/', verifyToken, adminMiddleware, deleteSettingsController);

export default router;
