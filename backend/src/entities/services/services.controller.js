import catchAsync from '../../lib/catchAsync.js';
import { generateResponse } from '../../lib/responseFormate.js';
import {
  getServiceHeaderService,
  updateServiceHeaderService,
  getAllServicesService,
  getServiceByIdService,
  createServiceService,
  updateServiceService,
  deleteServiceService,
} from './services.service.js';

// Header controllers
export const getServiceHeaderController = catchAsync(async (req, res) => {
  const header = await getServiceHeaderService();
  return generateResponse(res, 200, true, 'Services header retrieved successfully', header);
});

export const updateServiceHeaderController = catchAsync(async (req, res) => {
  const header = await updateServiceHeaderService(req.body);
  return generateResponse(res, 200, true, 'Services header updated successfully', header);
});

// Item controllers
export const getAllServicesController = catchAsync(async (req, res) => {
  const services = await getAllServicesService();
  return generateResponse(res, 200, true, 'All services retrieved successfully', services);
});

export const getServiceByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const service = await getServiceByIdService(id);
  if (!service) {
    return generateResponse(res, 404, false, 'Service item not found', null);
  }
  return generateResponse(res, 200, true, 'Service item retrieved successfully', service);
});

export const createServiceController = catchAsync(async (req, res) => {
  const service = await createServiceService(req.body);
  return generateResponse(res, 201, true, 'Service item created successfully', service);
});

export const updateServiceController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const service = await updateServiceService(id, req.body);
  if (!service) {
    return generateResponse(res, 404, false, 'Service item not found', null);
  }
  return generateResponse(res, 200, true, 'Service item updated successfully', service);
});

export const deleteServiceController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const service = await deleteServiceService(id);
  if (!service) {
    return generateResponse(res, 404, false, 'Service item not found', null);
  }
  return generateResponse(res, 200, true, 'Service item deleted successfully', service);
});
