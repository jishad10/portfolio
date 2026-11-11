import catchAsync from '../../lib/catchAsync.js';
import { generateResponse } from '../../lib/responseFormate.js';
import {
  getHeroService,
  updateHeroService,
  deleteHeroService,
} from './hero.service.js';

export const getHeroController = catchAsync(async (req, res) => {
  const hero = await getHeroService();
  return generateResponse(res, 200, true, 'Hero section data retrieved successfully', hero);
});

export const updateHeroController = catchAsync(async (req, res) => {
  const hero = await updateHeroService(req.body);
  return generateResponse(res, 200, true, 'Hero section data updated successfully', hero);
});

export const deleteHeroController = catchAsync(async (req, res) => {
  const hero = await deleteHeroService();
  return generateResponse(res, 200, true, 'Hero section reset to default successfully', hero);
});
