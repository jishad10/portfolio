import catchAsync from '../../lib/catchAsync.js';
import { generateResponse } from '../../lib/responseFormate.js';
import {
  getAboutService,
  updateAboutService,
  deleteAboutService,
} from './about.service.js';

export const getAboutController = catchAsync(async (req, res) => {
  const about = await getAboutService();
  return generateResponse(res, 200, true, 'About section data retrieved successfully', about);
});

export const updateAboutController = catchAsync(async (req, res) => {
  const about = await updateAboutService(req.body);
  return generateResponse(res, 200, true, 'About section data updated successfully', about);
});

export const deleteAboutController = catchAsync(async (req, res) => {
  const about = await deleteAboutService();
  return generateResponse(res, 200, true, 'About section reset to default successfully', about);
});
