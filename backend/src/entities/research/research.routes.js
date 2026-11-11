import express from 'express';
import {
  getResearchController,
  updateResearchController,
  deleteResearchController,
  addPaperController,
  updatePaperController,
  deletePaperController,
} from './research.controller.js';
import { verifyToken, adminMiddleware } from '../../core/middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getResearchController);
router.post('/', verifyToken, adminMiddleware, updateResearchController);
router.put('/', verifyToken, adminMiddleware, updateResearchController);
router.delete('/', verifyToken, adminMiddleware, deleteResearchController);

// Sub-resource routes for additional research papers
router.post('/paper', verifyToken, adminMiddleware, addPaperController);
router.put('/paper/:id', verifyToken, adminMiddleware, updatePaperController);
router.delete('/paper/:id', verifyToken, adminMiddleware, deletePaperController);

export default router;
