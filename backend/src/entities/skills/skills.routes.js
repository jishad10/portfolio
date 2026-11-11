import express from 'express';
import {
  getSkillsController,
  updateSkillsController,
  deleteSkillsController,
  addSkillCategoryController,
  updateSkillCategoryController,
  deleteSkillCategoryController,
} from './skills.controller.js';
import { verifyToken, adminMiddleware } from '../../core/middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getSkillsController);
router.post('/', verifyToken, adminMiddleware, updateSkillsController);
router.put('/', verifyToken, adminMiddleware, updateSkillsController);
router.delete('/', verifyToken, adminMiddleware, deleteSkillsController);

// Skill category sub-routes
router.post('/category', verifyToken, adminMiddleware, addSkillCategoryController);
router.put('/category/:id', verifyToken, adminMiddleware, updateSkillCategoryController);
router.delete('/category/:id', verifyToken, adminMiddleware, deleteSkillCategoryController);

export default router;
