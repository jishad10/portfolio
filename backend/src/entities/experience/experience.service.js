import { Experience, ExperienceHeader } from './experience.model.js';

// Header config service
export const getExperienceHeaderService = async () => {
  let header = await ExperienceHeader.findOne();
  if (!header) {
    header = await ExperienceHeader.create({});
  }
  return header;
};

export const updateExperienceHeaderService = async (data) => {
  let header = await ExperienceHeader.findOne();
  if (header) {
    header = await ExperienceHeader.findByIdAndUpdate(header._id, data, {
      new: true,
      runValidators: true,
    });
  } else {
    header = await ExperienceHeader.create(data);
  }
  return header;
};

// Experience items CRUD
export const getAllExperiencesService = async () => {
  let jobs = await Experience.find().sort({ order: 1, createdAt: -1 });
  if (jobs.length === 0) {
    // Seed initial experiences
    jobs = await Experience.insertMany([
      {
        role: 'Backend & DevOps Engineer | Previously Junior Backend Developer',
        company: 'Betopia Group',
        period: 'Apr 2025 — Present',
        type: 'Full-time',
        location: 'Mohakhali, Dhaka, Bangladesh',
        description:
          'Designing and owning production backend services, optimizing reliability patterns, and architecting AWS & Linux VPS infrastructure.',
        bullets: [
          'Design and own production backend services using NestJS, Node.js, TypeScript, Express, SQL/NoSQL databases, and Redis, covering API architecture, business logic, third-party integrations, and scalable service design.',
          'Engineer and optimize backend systems using caching, asynchronous processing, concurrency, rate limiting, and reliability patterns to improve performance, scalability, and system efficiency.',
          'Architect and maintain AWS and Linux VPS infrastructure, taking applications from staging to production through server configuration, DNS/domain setup, SSL/TLS, Nginx, networking, monitoring, security, and deployment troubleshooting.',
          'Automate deployment workflows using Docker and GitHub Actions CI/CD, reducing deployment time by ~70%, while applying system design principles and co-leading a 15+ member cross-functional engineering team.',
        ],
        tags: ['NestJS', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'GitHub Actions CI/CD', 'Redis', 'Linux VPS', 'Nginx'],
        accentColor: '#3CBBB1',
        order: 1,
      },
      {
        role: 'Software Engineer Intern',
        company: 'Solutya Pvt. Ltd',
        period: 'Nov 2024 — Feb 2025',
        type: 'Internship',
        location: 'Uttara, Dhaka, Bangladesh',
        description:
          'Developed and shipped production features across MERN and Next.js applications, contributing to backend functionality and integration.',
        bullets: [
          'Developed and shipped production features across MERN and Next.js applications, contributing to backend functionality, integration, and performance improvements while working with existing production codebases and delivery workflows.',
          'Collaborated with cross-functional engineering teams to implement RESTful APIs, optimize database operations, and ensure rapid feature delivery.',
        ],
        tags: ['Node.js', 'Express', 'Next.js', 'MERN', 'MongoDB', 'REST APIs', 'Git'],
        accentColor: '#2DD4BF',
        order: 2,
      },
      {
        role: 'Undergraduate Software Engineer & AI Researcher',
        company: 'American International University-Bangladesh (AIUB)',
        period: 'Feb 2021 — Jun 2025',
        type: 'B.Sc. in CSE (CGPA: 3.57)',
        location: 'Dhaka, Bangladesh',
        description:
          'Graduated with B.Sc. in CSE (CGPA: 3.57 / 4.00), authoring an IEEE conference publication and engineering scalable project backends.',
        bullets: [
          'Authored peer-reviewed IEEE conference paper: Deep Learning Model (Inception v3) for Automated Retinopathy Detection using OCT Images (BECITHCON 2025, DOI: 10.1109/BECITHCON69222.2025.11504241).',
          'Engineered high-concurrency systems, real-time Socket.IO applications, and database-driven platforms across C++, C#, Python, and JavaScript.',
        ],
        tags: ['Python', 'Inception v3', 'Deep Learning', 'C++', 'C#', 'SQL', 'IEEE Publication'],
        accentColor: '#F59E0B',
        order: 3,
      },
    ]);
  }
  return jobs;
};

export const getExperienceByIdService = async (id) => {
  return await Experience.findById(id);
};

export const createExperienceService = async (data) => {
  return await Experience.create(data);
};

export const updateExperienceService = async (id, data) => {
  return await Experience.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

export const deleteExperienceService = async (id) => {
  return await Experience.findByIdAndDelete(id);
};
