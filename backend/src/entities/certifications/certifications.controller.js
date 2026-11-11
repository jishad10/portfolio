import catchAsync from '../../lib/catchAsync.js';
import { generateResponse } from '../../lib/responseFormate.js';
import {
  getCertHeaderService,
  updateCertHeaderService,
  getAllCertificationsService,
  getCertificationByIdService,
  createCertificationService,
  updateCertificationService,
  deleteCertificationService,
} from './certifications.service.js';

// Header controllers
export const getCertHeaderController = catchAsync(async (req, res) => {
  const header = await getCertHeaderService();
  return generateResponse(res, 200, true, 'Certification header retrieved successfully', header);
});

export const updateCertHeaderController = catchAsync(async (req, res) => {
  const header = await updateCertHeaderService(req.body);
  return generateResponse(res, 200, true, 'Certification header updated successfully', header);
});

// Item controllers
export const getAllCertificationsController = catchAsync(async (req, res) => {
  const certs = await getAllCertificationsService();
  return generateResponse(res, 200, true, 'All certifications retrieved successfully', certs);
});

export const getCertificationByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const cert = await getCertificationByIdService(id);
  if (!cert) {
    return generateResponse(res, 404, false, 'Certification not found', null);
  }
  return generateResponse(res, 200, true, 'Certification retrieved successfully', cert);
});

export const createCertificationController = catchAsync(async (req, res) => {
  const cert = await createCertificationService(req.body);
  return generateResponse(res, 201, true, 'Certification created successfully', cert);
});

export const updateCertificationController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const cert = await updateCertificationService(id, req.body);
  if (!cert) {
    return generateResponse(res, 404, false, 'Certification not found', null);
  }
  return generateResponse(res, 200, true, 'Certification updated successfully', cert);
});

export const deleteCertificationController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const cert = await deleteCertificationService(id);
  if (!cert) {
    return generateResponse(res, 404, false, 'Certification not found', null);
  }
  return generateResponse(res, 200, true, 'Certification deleted successfully', cert);
});
