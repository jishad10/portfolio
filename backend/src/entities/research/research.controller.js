import catchAsync from '../../lib/catchAsync.js';
import { generateResponse } from '../../lib/responseFormate.js';
import {
  getResearchService,
  updateResearchService,
  deleteResearchService,
  addPaperService,
  updatePaperService,
  deletePaperService,
} from './research.service.js';

export const getResearchController = catchAsync(async (req, res) => {
  const research = await getResearchService();
  return generateResponse(res, 200, true, 'Research section data retrieved successfully', research);
});

export const updateResearchController = catchAsync(async (req, res) => {
  const research = await updateResearchService(req.body);
  return generateResponse(res, 200, true, 'Research section data updated successfully', research);
});

export const deleteResearchController = catchAsync(async (req, res) => {
  const research = await deleteResearchService();
  return generateResponse(res, 200, true, 'Research section reset to default successfully', research);
});

export const addPaperController = catchAsync(async (req, res) => {
  const research = await addPaperService(req.body);
  return generateResponse(res, 201, true, 'Research paper added successfully', research);
});

export const updatePaperController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const research = await updatePaperService(id, req.body);
  if (!research) {
    return generateResponse(res, 404, false, 'Research paper not found', null);
  }
  return generateResponse(res, 200, true, 'Research paper updated successfully', research);
});

export const deletePaperController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const research = await deletePaperService(id);
  return generateResponse(res, 200, true, 'Research paper deleted successfully', research);
});
