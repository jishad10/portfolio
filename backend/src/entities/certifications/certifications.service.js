import {
  Certification,
  CertificationHeader,
} from './certifications.model.js';

// Header service
export const getCertHeaderService = async () => {
  let header = await CertificationHeader.findOne();
  if (!header) {
    header = await CertificationHeader.create({});
  }
  return header;
};

export const updateCertHeaderService = async (data) => {
  let header = await CertificationHeader.findOne();
  if (header) {
    header = await CertificationHeader.findByIdAndUpdate(header._id, data, {
      new: true,
      runValidators: true,
    });
  } else {
    header = await CertificationHeader.create(data);
  }
  return header;
};

// Certifications CRUD
export const getAllCertificationsService = async () => {
  let certs = await Certification.find().sort({ order: 1, createdAt: -1 });
  if (certs.length === 0) {
    certs = await Certification.insertMany([
      {
        title: 'IBM DevOps and Software Engineering Professional Certificate',
        issuer: 'IBM — Coursera',
        year: 'Professional Certificate · Verified',
        abbr: 'IBM',
        color: '#0F62FE',
        verifyLink: 'https://www.coursera.org/professional-certificates/devops-and-software-engineering',
        order: 1,
      },
      {
        title: 'Google Project Management Professional Certificate',
        issuer: 'Google — Coursera',
        year: 'Professional Certificate · Verified',
        abbr: 'Google',
        color: '#4285F4',
        verifyLink: 'https://www.coursera.org/professional-certificates/google-project-management',
        order: 2,
      },
      {
        title: 'AWS Cloud Infrastructure & Services Specialization',
        issuer: 'Amazon Web Services',
        year: 'EC2, S3, RDS, ASG, ELB, CDN · Active',
        abbr: 'AWS',
        color: '#FF9900',
        verifyLink: '#',
        order: 3,
      },
      {
        title: 'Docker & CI/CD Pipeline Automation',
        issuer: 'DevOps & Containers Specialization',
        year: 'GitHub Actions, Docker & Nginx · Verified',
        abbr: 'Docker',
        color: '#0DB7ED',
        verifyLink: '#',
        order: 4,
      },
    ]);
  }
  return certs;
};

export const getCertificationByIdService = async (id) => {
  return await Certification.findById(id);
};

export const createCertificationService = async (data) => {
  return await Certification.create(data);
};

export const updateCertificationService = async (id, data) => {
  return await Certification.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

export const deleteCertificationService = async (id) => {
  return await Certification.findByIdAndDelete(id);
};
