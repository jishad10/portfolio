import { Project, ProjectHeader } from './projects.model.js';

// Header config
export const getProjectHeaderService = async () => {
  let header = await ProjectHeader.findOne();
  if (!header) {
    header = await ProjectHeader.create({});
  }
  return header;
};

export const updateProjectHeaderService = async (data) => {
  let header = await ProjectHeader.findOne();
  if (header) {
    header = await ProjectHeader.findByIdAndUpdate(header._id, data, {
      new: true,
      runValidators: true,
    });
  } else {
    header = await ProjectHeader.create(data);
  }
  return header;
};

// Projects CRUD
export const getAllProjectsService = async () => {
  let projects = await Project.find().sort({ order: 1, createdAt: -1 });
  if (projects.length === 0) {
    // Seed initial projects matching ProjectsManager default data
    projects = await Project.insertMany([
      {
        title: 'Beatboks Music Platform',
        category: 'Backend & APIs',
        description:
          'Scalable NestJS backend for a Spotify-like music platform serving 10,000+ users, implementing music catalog, playlists, search, library, subscriptions, and user workflows.',
        metric: '10k+ Users · ~85% Faster',
        stars: 142,
        size: 'large',
        archSnippet:
          'NestJS API -> Redis Aggregation -> BullMQ Queue -> AWS (EC2/S3/ELB/ASG/CDN)',
        achievements: [
          'Designed a Redis/BullMQ asynchronous pipeline that reduced bulk upload processing time by ~85% (from 45 min to 7 min) through concurrent background processing.',
          'Designed and deployed scalable AWS infrastructure using EC2, S3, ELB, ASG, and CDN with Docker and GitHub Actions CI/CD; Redis-based aggregation reduced database writes by ~90%.',
        ],
        tags: [
          'NestJS',
          'MongoDB',
          'Redis',
          'BullMQ',
          'AWS (EC2, S3, ELB, ASG)',
          'Docker',
          'CI/CD',
        ],
        featured: true,
        order: 1,
      },
      {
        title: 'Hoplift – Ride Sharing Platform',
        category: 'Backend & APIs',
        description:
          'High-concurrency ride-sharing backend platform powering Flutter mobile app with geospatial matching, booking, seat management, ride lifecycle, ratings, and real-time Socket.IO chat.',
        metric: 'Real-time Matching',
        stars: 88,
        size: 'small',
        achievements: [
          'Engineered ride-matching, geospatial search, booking, seat management, ride lifecycle, ratings, notifications, and real-time chat features.',
          'Implemented automated scheduled background jobs for ride and chat lifecycle state management with zero-lag WebSocket delivery.',
        ],
        tags: [
          'Node.js',
          'Express',
          'MongoDB',
          'Socket.IO',
          'Geospatial Queries',
          'Scheduled Jobs',
        ],
        featured: true,
        order: 2,
      },
      {
        title: 'Returns Logistics Platform',
        category: 'DevOps & Cloud',
        description:
          'Multi-role (user/driver/admin) logistics platform with subscription-based Stripe payments, Google Maps route optimization, and full-stack production hosting on Linux VPS.',
        metric: 'Multi-Role · Linux VPS',
        stars: 76,
        size: 'small',
        achievements: [
          'Built multi-role architecture with automated Stripe subscription billing and payout management.',
          'Configured and deployed full-stack system onto Linux VPS with Google Maps route optimization, Nginx reverse proxy, SSL/TLS, and DNS.',
        ],
        tags: [
          'Node.js',
          'Express',
          'MongoDB',
          'Stripe',
          'Google Maps API',
          'Linux VPS',
          'Nginx',
        ],
        featured: true,
        order: 3,
      },
      {
        title: 'Deep Learning Retinopathy Detection (Inception v3)',
        category: 'AI Research',
        description:
          'Deep learning computer vision model (Inception v3) for automated retinopathy detection using Optical Coherence Tomography (OCT) retinal images, published in IEEE BECITHCON 2025.',
        metric: 'IEEE BECITHCON 2025 Paper',
        stars: 110,
        size: 'large',
        archSnippet:
          'OCT Retinal Images -> Preprocessing Pipeline -> Inception v3 Feature Extractor -> Softmax Classifier',
        achievements: [
          'Trained and fine-tuned Inception v3 convolutional neural network for automated detection of retinopathy from OCT retinal scans.',
          'Peer-reviewed and published in IEEE Conference Proceedings (BECITHCON 2025, DOI: 10.1109/BECITHCON69222.2025.11504241).',
        ],
        tags: [
          'Python',
          'Inception v3',
          'Deep Learning',
          'OCT Images',
          'Computer Vision',
          'IEEE BECITHCON',
        ],
        featured: true,
        order: 4,
      },
    ]);
  }
  return projects;
};

export const getProjectByIdService = async (id) => {
  return await Project.findById(id);
};

export const createProjectService = async (projectData) => {
  return await Project.create(projectData);
};

export const updateProjectService = async (id, projectData) => {
  return await Project.findByIdAndUpdate(id, projectData, {
    new: true,
    runValidators: true,
  });
};

export const deleteProjectService = async (id) => {
  return await Project.findByIdAndDelete(id);
};
