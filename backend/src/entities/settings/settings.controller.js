import catchAsync from '../../lib/catchAsync.js';
import { generateResponse } from '../../lib/responseFormate.js';
import {
  getSettingsService,
  updateSettingsService,
  deleteSettingsService,
} from './settings.service.js';

export const getSettingsController = catchAsync(async (req, res) => {
  const settings = await getSettingsService();
  return generateResponse(res, 200, true, 'Global settings retrieved successfully', settings);
});

export const updateSettingsController = catchAsync(async (req, res) => {
  const settings = await updateSettingsService(req.body);
  return generateResponse(res, 200, true, 'Global settings updated successfully', settings);
});

export const deleteSettingsController = catchAsync(async (req, res) => {
  const settings = await deleteSettingsService();
  return generateResponse(res, 200, true, 'Global settings reset to default successfully', settings);
});
