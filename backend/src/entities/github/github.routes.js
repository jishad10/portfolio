import express from 'express';
import {
  getGitHubController,
  updateGitHubController,
  deleteGitHubController,
} from './github.controller.js';
import { verifyToken, adminMiddleware } from '../../core/middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getGitHubController);
router.post('/', verifyToken, adminMiddleware, updateGitHubController);
router.put('/', verifyToken, adminMiddleware, updateGitHubController);
router.delete('/', verifyToken, adminMiddleware, deleteGitHubController);

export default router;
