import express from 'express';
import {
  getContactConfigController,
  updateContactConfigController,
  submitContactMessageController,
  getAllContactMessagesController,
  getContactMessageByIdController,
  updateContactMessageStatusController,
  deleteContactMessageController,
} from './contact.controller.js';
import { verifyToken, adminMiddleware } from '../../core/middlewares/authMiddleware.js';

const router = express.Router();

// Config routes
router.get('/config', getContactConfigController);
router.put('/config', verifyToken, adminMiddleware, updateContactConfigController);

// Inbound Contact form submission (Public)
router.post('/messages', submitContactMessageController);

// Inbound Contact form management (Admin protected)
router.get('/messages', verifyToken, adminMiddleware, getAllContactMessagesController);
router.get('/messages/:id', verifyToken, adminMiddleware, getContactMessageByIdController);
router.put('/messages/:id/status', verifyToken, adminMiddleware, updateContactMessageStatusController);
router.delete('/messages/:id', verifyToken, adminMiddleware, deleteContactMessageController);

export default router;
