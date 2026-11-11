import catchAsync from '../../lib/catchAsync.js';
import { generateResponse } from '../../lib/responseFormate.js';
import {
  getContactConfigService,
  updateContactConfigService,
  createContactMessageService,
  getAllContactMessagesService,
  getContactMessageByIdService,
  updateContactMessageStatusService,
  deleteContactMessageService,
} from './contact.service.js';

// Config controllers
export const getContactConfigController = catchAsync(async (req, res) => {
  const config = await getContactConfigService();
  return generateResponse(res, 200, true, 'Contact configuration retrieved successfully', config);
});

export const updateContactConfigController = catchAsync(async (req, res) => {
  const config = await updateContactConfigService(req.body);
  return generateResponse(res, 200, true, 'Contact configuration updated successfully', config);
});

// Message controllers
export const submitContactMessageController = catchAsync(async (req, res) => {
  const message = await createContactMessageService(req.body);
  return generateResponse(res, 201, true, 'Your message has been sent successfully', message);
});

export const getAllContactMessagesController = catchAsync(async (req, res) => {
  const messages = await getAllContactMessagesService();
  return generateResponse(res, 200, true, 'Contact messages retrieved successfully', messages);
});

export const getContactMessageByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const message = await getContactMessageByIdService(id);
  if (!message) {
    return generateResponse(res, 404, false, 'Contact message not found', null);
  }
  return generateResponse(res, 200, true, 'Contact message retrieved successfully', message);
});

export const updateContactMessageStatusController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const message = await updateContactMessageStatusService(id, status);
  if (!message) {
    return generateResponse(res, 404, false, 'Contact message not found', null);
  }
  return generateResponse(res, 200, true, 'Contact message status updated successfully', message);
});

export const deleteContactMessageController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const message = await deleteContactMessageService(id);
  if (!message) {
    return generateResponse(res, 404, false, 'Contact message not found', null);
  }
  return generateResponse(res, 200, true, 'Contact message deleted successfully', message);
});
