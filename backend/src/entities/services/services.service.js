import { Service, ServiceHeader } from './services.model.js';

// Header service
export const getServiceHeaderService = async () => {
  let header = await ServiceHeader.findOne();
  if (!header) {
    header = await ServiceHeader.create({});
  }
  return header;
};

export const updateServiceHeaderService = async (data) => {
  let header = await ServiceHeader.findOne();
  if (header) {
    header = await ServiceHeader.findByIdAndUpdate(header._id, data, {
      new: true,
      runValidators: true,
    });
  } else {
    header = await ServiceHeader.create(data);
  }
  return header;
};

// Service items CRUD
export const getAllServicesService = async () => {
  let items = await Service.find().sort({ order: 1, createdAt: -1 });
  if (items.length === 0) {
    items = await Service.insertMany([
      {
        title: 'Backend Architecture & APIs',
        badge: 'Core Backend',
        description:
          'Architecting scalable REST & GraphQL microservices, JWT authentication, Redis caching, and BullMQ background queues.',
        deliverables: [
          'RESTful API design with OpenAPI / Swagger docs',
          'BullMQ async background workers & Redis pub/sub',
          'PostgreSQL database indexing & query tuning',
        ],
        order: 1,
      },
      {
        title: 'Cloud & DevOps Engineering',
        badge: 'DevOps & Cloud',
        description:
          'AWS cloud infrastructure management, Docker containerization, Terraform IaC, and zero-downtime production deployments.',
        deliverables: [
          'AWS ECS, EC2, S3, and Lambda cloud setup',
          'Docker & Docker Compose container orchestration',
          'Infrastructure as Code using Terraform scripts',
        ],
        order: 2,
      },
      {
        title: 'CI/CD Pipeline Automation',
        badge: 'CI/CD Automation',
        description:
          'End-to-end GitHub Actions automated testing, multi-stage Docker builds, ECR registry push, and automated deployment pipelines.',
        deliverables: [
          'Automated unit & integration test suites',
          'Docker image security scanning & ECR push',
          'Zero-downtime rolling ECS deployments',
        ],
        order: 3,
      },
    ]);
  }
  return items;
};

export const getServiceByIdService = async (id) => {
  return await Service.findById(id);
};

export const createServiceService = async (data) => {
  return await Service.create(data);
};

export const updateServiceService = async (id, data) => {
  return await Service.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

export const deleteServiceService = async (id) => {
  return await Service.findByIdAndDelete(id);
};
