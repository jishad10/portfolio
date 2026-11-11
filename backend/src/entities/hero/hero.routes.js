import express from 'express';
import {
  getHeroController,
  updateHeroController,
  deleteHeroController,
} from './hero.controller.js';
import { verifyToken, adminMiddleware } from '../../core/middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getHeroController);
router.post('/', verifyToken, adminMiddleware, updateHeroController);
router.put('/', verifyToken, adminMiddleware, updateHeroController);
router.delete('/', verifyToken, adminMiddleware, deleteHeroController);

export default router;
