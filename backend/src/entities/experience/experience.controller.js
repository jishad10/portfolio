import catchAsync from '../../lib/catchAsync.js';
import { generateResponse } from '../../lib/responseFormate.js';
import {
  getExperienceHeaderService,
  updateExperienceHeaderService,
  getAllExperiencesService,
  getExperienceByIdService,
  createExperienceService,
  updateExperienceService,
  deleteExperienceService,
} from './experience.service.js';

// Header controllers
export const getExperienceHeaderController = catchAsync(async (req, res) => {
  const header = await getExperienceHeaderService();
  return generateResponse(res, 200, true, 'Experience header retrieved successfully', header);
});

export const updateExperienceHeaderController = catchAsync(async (req, res) => {
  const header = await updateExperienceHeaderService(req.body);
  return generateResponse(res, 200, true, 'Experience header updated successfully', header);
});

// Item controllers
export const getAllExperiencesController = catchAsync(async (req, res) => {
  const experiences = await getAllExperiencesService();
  return generateResponse(res, 200, true, 'All experience items retrieved successfully', experiences);
});

export const getExperienceByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const exp = await getExperienceByIdService(id);
  if (!exp) {
    return generateResponse(res, 404, false, 'Experience item not found', null);
  }
  return generateResponse(res, 200, true, 'Experience item retrieved successfully', exp);
});

export const createExperienceController = catchAsync(async (req, res) => {
  const exp = await createExperienceService(req.body);
  return generateResponse(res, 201, true, 'Experience item created successfully', exp);
});

export const updateExperienceController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const exp = await updateExperienceService(id, req.body);
  if (!exp) {
    return generateResponse(res, 404, false, 'Experience item not found', null);
  }
  return generateResponse(res, 200, true, 'Experience item updated successfully', exp);
});

export const deleteExperienceController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const exp = await deleteExperienceService(id);
  if (!exp) {
    return generateResponse(res, 404, false, 'Experience item not found', null);
  }
  return generateResponse(res, 200, true, 'Experience item deleted successfully', exp);
});
