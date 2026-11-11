import catchAsync from '../../lib/catchAsync.js';
import { generateResponse } from '../../lib/responseFormate.js';
import {
  getProjectHeaderService,
  updateProjectHeaderService,
  getAllProjectsService,
  getProjectByIdService,
  createProjectService,
  updateProjectService,
  deleteProjectService,
} from './projects.service.js';

// Header controllers
export const getProjectHeaderController = catchAsync(async (req, res) => {
  const header = await getProjectHeaderService();
  return generateResponse(res, 200, true, 'Project section header retrieved successfully', header);
});

export const updateProjectHeaderController = catchAsync(async (req, res) => {
  const header = await updateProjectHeaderService(req.body);
  return generateResponse(res, 200, true, 'Project section header updated successfully', header);
});

// Projects controllers
export const getAllProjectsController = catchAsync(async (req, res) => {
  const projects = await getAllProjectsService();
  return generateResponse(res, 200, true, 'All projects retrieved successfully', projects);
});

export const getProjectByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const project = await getProjectByIdService(id);
  if (!project) {
    return generateResponse(res, 404, false, 'Project not found', null);
  }
  return generateResponse(res, 200, true, 'Project retrieved successfully', project);
});

export const createProjectController = catchAsync(async (req, res) => {
  const project = await createProjectService(req.body);
  return generateResponse(res, 201, true, 'Project created successfully', project);
});

export const updateProjectController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const project = await updateProjectService(id, req.body);
  if (!project) {
    return generateResponse(res, 404, false, 'Project not found', null);
  }
  return generateResponse(res, 200, true, 'Project updated successfully', project);
});

export const deleteProjectController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const project = await deleteProjectService(id);
  if (!project) {
    return generateResponse(res, 404, false, 'Project not found', null);
  }
  return generateResponse(res, 200, true, 'Project deleted successfully', project);
});
