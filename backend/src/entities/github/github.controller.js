import catchAsync from '../../lib/catchAsync.js';
import { generateResponse } from '../../lib/responseFormate.js';
import {
  getGitHubService,
  updateGitHubService,
  deleteGitHubService,
} from './github.service.js';

export const getGitHubController = catchAsync(async (req, res) => {
  const github = await getGitHubService();
  return generateResponse(res, 200, true, 'GitHub activity data retrieved successfully', github);
});

export const updateGitHubController = catchAsync(async (req, res) => {
  const github = await updateGitHubService(req.body);
  return generateResponse(res, 200, true, 'GitHub activity data updated successfully', github);
});

export const deleteGitHubController = catchAsync(async (req, res) => {
  const github = await deleteGitHubService();
  return generateResponse(res, 200, true, 'GitHub activity data reset to default successfully', github);
});
