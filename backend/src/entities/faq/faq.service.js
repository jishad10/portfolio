import { FAQ, FAQHeader } from './faq.model.js';

// Header service
export const getFAQHeaderService = async () => {
  let header = await FAQHeader.findOne();
  if (!header) {
    header = await FAQHeader.create({});
  }
  return header;
};

export const updateFAQHeaderService = async (data) => {
  let header = await FAQHeader.findOne();
  if (header) {
    header = await FAQHeader.findByIdAndUpdate(header._id, data, {
      new: true,
      runValidators: true,
    });
  } else {
    header = await FAQHeader.create(data);
  }
  return header;
};

// Item service
export const getAllFAQsService = async () => {
  let faqs = await FAQ.find().sort({ order: 1, createdAt: -1 });
  if (faqs.length === 0) {
    faqs = await FAQ.insertMany([
      {
        category: 'Recruitment & Roles',
        question:
          'Are you available for full-time or remote backend/DevOps positions?',
        answer:
          'Yes — I am actively open to full-time remote backend engineering and DevOps roles, contract engagements, and technical consulting. I am based in Bangladesh and available for global remote work.',
        order: 1,
      },
      {
        category: 'Tech Stack & Tools',
        question: 'What is your primary engineering technology stack?',
        answer:
          'Node.js + TypeScript for backend services, PostgreSQL + Redis for data persistence & caching, BullMQ for background job queues, Docker + AWS (ECS/EC2) for infrastructure, and GitHub Actions for CI/CD. For AI/ML work, I utilize Python with PyTorch and TensorFlow.',
        order: 2,
      },
      {
        category: 'Graduate Research',
        question:
          'Are you applying for Erasmus Mundus or other CS graduate programmes?',
        answer:
          'Yes. I am targeting Erasmus Mundus and top international graduate programmes in Computer Science with a research focus on AI, deep learning, computer vision, and privacy-preserving machine learning.',
        order: 3,
      },
      {
        category: 'Consulting & Freelance',
        question:
          'Can you take on freelance backend architecture or DevOps consulting work?',
        answer:
          'Absolutely. I take on freelance backend architecture reviews, REST API design, CI/CD pipeline automation, Docker containerization, and cloud deployment contracts of varying lengths.',
        order: 4,
      },
    ]);
  }
  return faqs;
};

export const getFAQByIdService = async (id) => {
  return await FAQ.findById(id);
};

export const createFAQService = async (data) => {
  return await FAQ.create(data);
};

export const updateFAQService = async (id, data) => {
  return await FAQ.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

export const deleteFAQService = async (id) => {
  return await FAQ.findByIdAndDelete(id);
};
