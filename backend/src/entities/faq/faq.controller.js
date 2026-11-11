import catchAsync from '../../lib/catchAsync.js';
import { generateResponse } from '../../lib/responseFormate.js';
import {
  getFAQHeaderService,
  updateFAQHeaderService,
  getAllFAQsService,
  getFAQByIdService,
  createFAQService,
  updateFAQService,
  deleteFAQService,
} from './faq.service.js';

// Header controllers
export const getFAQHeaderController = catchAsync(async (req, res) => {
  const header = await getFAQHeaderService();
  return generateResponse(res, 200, true, 'FAQ header retrieved successfully', header);
});

export const updateFAQHeaderController = catchAsync(async (req, res) => {
  const header = await updateFAQHeaderService(req.body);
  return generateResponse(res, 200, true, 'FAQ header updated successfully', header);
});

// Item controllers
export const getAllFAQsController = catchAsync(async (req, res) => {
  const faqs = await getAllFAQsService();
  return generateResponse(res, 200, true, 'All FAQs retrieved successfully', faqs);
});

export const getFAQByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const faq = await getFAQByIdService(id);
  if (!faq) {
    return generateResponse(res, 404, false, 'FAQ item not found', null);
  }
  return generateResponse(res, 200, true, 'FAQ item retrieved successfully', faq);
});

export const createFAQController = catchAsync(async (req, res) => {
  const faq = await createFAQService(req.body);
  return generateResponse(res, 201, true, 'FAQ item created successfully', faq);
});

export const updateFAQController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const faq = await updateFAQService(id, req.body);
  if (!faq) {
    return generateResponse(res, 404, false, 'FAQ item not found', null);
  }
  return generateResponse(res, 200, true, 'FAQ item updated successfully', faq);
});

export const deleteFAQController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const faq = await deleteFAQService(id);
  if (!faq) {
    return generateResponse(res, 404, false, 'FAQ item not found', null);
  }
  return generateResponse(res, 200, true, 'FAQ item deleted successfully', faq);
});
