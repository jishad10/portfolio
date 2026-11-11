import mongoose from 'mongoose';

const MilestoneSchema = new mongoose.Schema(
  {
    year: { type: String, required: true },
    title: { type: String, required: true },
    story: { type: String, required: true },
    order: { type: Number, default: 0 },
  },
  { _id: true, timestamps: true }
);

const MyStorySchema = new mongoose.Schema(
  {
    sectionLabel: { type: String, default: 'My Story' },
    sectionHeadingPrefix: { type: String, default: 'The ' },
    sectionHeadingAccent: { type: String, default: 'Engineering' },
    sectionHeadingSuffix: { type: String, default: ' Journey' },
    sectionSubheading: {
      type: String,
      default:
        'From writing first lines of code to architecting cloud-native systems and publishing AI research.',
    },
    milestones: {
      type: [MilestoneSchema],
      default: [
        {
          year: '2021',
          title: 'AIUB Computer Science Foundation',
          story:
            'Began B.Sc. in Computer Science and Engineering at AIUB (graduated CGPA: 3.57 / 4.00), building a strong foundation in C++, C#, algorithms, and system programming.',
          order: 1,
        },
        {
          year: '2022 — 2023',
          title: 'Backend & Systems Deep Dive',
          story:
            'Specialized in backend engineering with Node.js, Express, MongoDB, PostgreSQL, and Redis caching. Built high-concurrency real-time features using Socket.IO.',
          order: 2,
        },
        {
          year: '2024',
          title: 'Solutya Pvt. Ltd & Professional Certs',
          story:
            'Joined Solutya as Software Engineer Intern, shipping production features across MERN and Next.js applications. Earned IBM DevOps and Google Project Management Professional Certificates.',
          order: 3,
        },
        {
          year: '2025',
          title: 'IEEE BECITHCON Publication',
          story:
            'Authored peer-reviewed IEEE conference paper on Inception v3 Deep Learning for Automated Retinopathy Detection using OCT Images (DOI: 10.1109/BECITHCON69222.2025.11504241).',
          order: 4,
        },
        {
          year: '2025 — Present',
          title: 'Betopia Group (Backend & DevOps Engineer)',
          story:
            'Designing scalable NestJS backend services, architecting AWS and Linux VPS infrastructure, automating CI/CD with Docker & GitHub Actions (~70% deployment speedup), and co-leading engineering initiatives.',
          order: 5,
        },
      ],
    },
  },
  { timestamps: true }
);

const MyStory = mongoose.models.MyStory || mongoose.model('MyStory', MyStorySchema);
export default MyStory;
