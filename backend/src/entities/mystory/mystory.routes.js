import express from 'express';
import {
  getMyStoryController,
  updateMyStoryController,
  deleteMyStoryController,
  addMilestoneController,
  updateMilestoneController,
  deleteMilestoneController,
} from './mystory.controller.js';
import { verifyToken, adminMiddleware } from '../../core/middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getMyStoryController);
router.post('/', verifyToken, adminMiddleware, updateMyStoryController);
router.put('/', verifyToken, adminMiddleware, updateMyStoryController);
router.delete('/', verifyToken, adminMiddleware, deleteMyStoryController);

// Milestone sub-resource routes
router.post('/milestone', verifyToken, adminMiddleware, addMilestoneController);
router.put('/milestone/:id', verifyToken, adminMiddleware, updateMilestoneController);
router.delete('/milestone/:id', verifyToken, adminMiddleware, deleteMilestoneController);

export default router;
