import catchAsync from '../../lib/catchAsync.js';
import { generateResponse } from '../../lib/responseFormate.js';
import {
  getSkillsService,
  updateSkillsService,
  deleteSkillsService,
  addSkillCategoryService,
  updateSkillCategoryService,
  deleteSkillCategoryService,
} from './skills.service.js';

export const getSkillsController = catchAsync(async (req, res) => {
  const skills = await getSkillsService();
  return generateResponse(res, 200, true, 'Skills section data retrieved successfully', skills);
});

export const updateSkillsController = catchAsync(async (req, res) => {
  const skills = await updateSkillsService(req.body);
  return generateResponse(res, 200, true, 'Skills section data updated successfully', skills);
});

export const deleteSkillsController = catchAsync(async (req, res) => {
  const skills = await deleteSkillsService();
  return generateResponse(res, 200, true, 'Skills section reset to default successfully', skills);
});

export const addSkillCategoryController = catchAsync(async (req, res) => {
  const skills = await addSkillCategoryService(req.body);
  return generateResponse(res, 201, true, 'Skill category added successfully', skills);
});

export const updateSkillCategoryController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const skills = await updateSkillCategoryService(id, req.body);
  if (!skills) {
    return generateResponse(res, 404, false, 'Skill category not found', null);
  }
  return generateResponse(res, 200, true, 'Skill category updated successfully', skills);
});

export const deleteSkillCategoryController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const skills = await deleteSkillCategoryService(id);
  return generateResponse(res, 200, true, 'Skill category deleted successfully', skills);
});
