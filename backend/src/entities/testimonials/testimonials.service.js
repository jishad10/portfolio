import { Testimonial, TestimonialHeader } from './testimonials.model.js';

// Header service
export const getTestimonialHeaderService = async () => {
  let header = await TestimonialHeader.findOne();
  if (!header) {
    header = await TestimonialHeader.create({});
  }
  return header;
};

export const updateTestimonialHeaderService = async (data) => {
  let header = await TestimonialHeader.findOne();
  if (header) {
    header = await TestimonialHeader.findByIdAndUpdate(header._id, data, {
      new: true,
      runValidators: true,
    });
  } else {
    header = await TestimonialHeader.create(data);
  }
  return header;
};

// Item service
export const getAllTestimonialsService = async () => {
  let items = await Testimonial.find().sort({ order: 1, createdAt: -1 });
  if (items.length === 0) {
    items = await Testimonial.insertMany([
      {
        name: 'Sarah Jenkins',
        role: 'CTO',
        company: 'CloudScale Technologies',
        quote:
          'Jahidul delivered our backend API platform on time and beyond scope. His Redis caching & queue implementation cut our API response times by 60%. A rare engineer who truly thinks in system architectures.',
        rating: 5,
        order: 1,
      },
      {
        name: 'Marcus Thorne',
        role: 'Engineering Manager',
        company: 'DevOps Solutions',
        quote:
          'Outstanding DevOps work. Jahidul set up our entire AWS infrastructure using Terraform IaC and GitHub Actions CI/CD pipelines. Zero downtime since the migration — exactly the engineer we needed.',
        rating: 5,
        order: 2,
      },
      {
        name: 'Dr. Amir Hossain',
        role: 'Professor',
        company: 'CS Department',
        quote:
          'His research contribution to our deep learning project was invaluable. Bridging production software engineering with AI research is rare — Jahidul does it naturally and published at a top conference.',
        rating: 5,
        order: 3,
      },
      {
        name: 'Elena Rostova',
        role: 'Lead Backend Developer',
        company: 'SaaS Platform',
        quote:
          'Jahidul redesigned our multi-tenant auth microservice with JWT + refresh rotation. Clean architecture, thorough documentation, and an absolute pleasure to collaborate with.',
        rating: 5,
        order: 4,
      },
    ]);
  }
  return items;
};

export const getTestimonialByIdService = async (id) => {
  return await Testimonial.findById(id);
};

export const createTestimonialService = async (data) => {
  return await Testimonial.create(data);
};

export const updateTestimonialService = async (id, data) => {
  return await Testimonial.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

export const deleteTestimonialService = async (id) => {
  return await Testimonial.findByIdAndDelete(id);
};
