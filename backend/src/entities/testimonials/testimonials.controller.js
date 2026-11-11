import catchAsync from '../../lib/catchAsync.js';
import { generateResponse } from '../../lib/responseFormate.js';
import {
  getTestimonialHeaderService,
  updateTestimonialHeaderService,
  getAllTestimonialsService,
  getTestimonialByIdService,
  createTestimonialService,
  updateTestimonialService,
  deleteTestimonialService,
} from './testimonials.service.js';

// Header controller
export const getTestimonialHeaderController = catchAsync(async (req, res) => {
  const header = await getTestimonialHeaderService();
  return generateResponse(res, 200, true, 'Testimonial header retrieved successfully', header);
});

export const updateTestimonialHeaderController = catchAsync(async (req, res) => {
  const header = await updateTestimonialHeaderService(req.body);
  return generateResponse(res, 200, true, 'Testimonial header updated successfully', header);
});

// Item controller
export const getAllTestimonialsController = catchAsync(async (req, res) => {
  const testimonials = await getAllTestimonialsService();
  return generateResponse(res, 200, true, 'All testimonials retrieved successfully', testimonials);
});

export const getTestimonialByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const testimonial = await getTestimonialByIdService(id);
  if (!testimonial) {
    return generateResponse(res, 404, false, 'Testimonial not found', null);
  }
  return generateResponse(res, 200, true, 'Testimonial retrieved successfully', testimonial);
});

export const createTestimonialController = catchAsync(async (req, res) => {
  const testimonial = await createTestimonialService(req.body);
  return generateResponse(res, 201, true, 'Testimonial created successfully', testimonial);
});

export const updateTestimonialController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const testimonial = await updateTestimonialService(id, req.body);
  if (!testimonial) {
    return generateResponse(res, 404, false, 'Testimonial not found', null);
  }
  return generateResponse(res, 200, true, 'Testimonial updated successfully', testimonial);
});

export const deleteTestimonialController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const testimonial = await deleteTestimonialService(id);
  if (!testimonial) {
    return generateResponse(res, 404, false, 'Testimonial not found', null);
  }
  return generateResponse(res, 200, true, 'Testimonial deleted successfully', testimonial);
});
