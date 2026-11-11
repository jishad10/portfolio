import catchAsync from '../../lib/catchAsync.js';
import { generateResponse } from '../../lib/responseFormate.js';
import {
  getMyStoryService,
  updateMyStoryService,
  deleteMyStoryService,
  addMilestoneService,
  updateMilestoneService,
  deleteMilestoneService,
} from './mystory.service.js';

export const getMyStoryController = catchAsync(async (req, res) => {
  const story = await getMyStoryService();
  return generateResponse(res, 200, true, 'My Story section data retrieved successfully', story);
});

export const updateMyStoryController = catchAsync(async (req, res) => {
  const story = await updateMyStoryService(req.body);
  return generateResponse(res, 200, true, 'My Story section data updated successfully', story);
});

export const deleteMyStoryController = catchAsync(async (req, res) => {
  const story = await deleteMyStoryService();
  return generateResponse(res, 200, true, 'My Story section reset to default successfully', story);
});

export const addMilestoneController = catchAsync(async (req, res) => {
  const story = await addMilestoneService(req.body);
  return generateResponse(res, 201, true, 'Milestone added successfully', story);
});

export const updateMilestoneController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const story = await updateMilestoneService(id, req.body);
  if (!story) {
    return generateResponse(res, 404, false, 'Milestone not found', null);
  }
  return generateResponse(res, 200, true, 'Milestone updated successfully', story);
});

export const deleteMilestoneController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const story = await deleteMilestoneService(id);
  return generateResponse(res, 200, true, 'Milestone deleted successfully', story);
});
