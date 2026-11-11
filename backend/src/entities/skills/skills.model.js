import mongoose from 'mongoose';

const SkillItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    level: { type: Number, default: 90 },
    exp: { type: String, default: '' },
    tag: { type: String, default: 'Core' },
  },
  { _id: true }
);

const SkillCategorySchema = new mongoose.Schema(
  {
    categoryName: { type: String, required: true },
    icon: { type: String, default: 'Code' },
    skills: [SkillItemSchema],
  },
  { _id: true }
);

const OrbitalSkillSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    icon: { type: String, default: 'Cpu' },
    radius: { type: Number, default: 120 },
    speed: { type: Number, default: 1.0 },
  },
  { _id: true }
);

const SkillsSchema = new mongoose.Schema(
  {
    sectionLabel: { type: String, default: 'Skills & Stack' },
    sectionHeadingPrefix: { type: String, default: 'Technical ' },
    sectionHeadingAccent: { type: String, default: 'Competencies' },
    sectionHeadingSuffix: { type: String, default: ' & Tooling' },
    sectionSubheading: {
      type: String,
      default:
        'Battle-tested core backend languages, DevOps cloud infrastructure, database engines, and AI frameworks.',
    },
    categories: {
      type: [SkillCategorySchema],
      default: [
        {
          categoryName: 'Backend & System Design',
          icon: 'Server',
          skills: [
            { name: 'NestJS & Node.js', level: 96, exp: '2+ Yrs', tag: 'Primary' },
            { name: 'Express.js & ASP.NET', level: 90, exp: '2+ Yrs', tag: 'Primary' },
            { name: 'BullMQ & Redis Queues', level: 92, exp: '2+ Yrs', tag: 'Core' },
            { name: 'Socket.IO & WebSockets', level: 90, exp: '2+ Yrs', tag: 'Core' },
            { name: 'REST APIs & GraphQL', level: 94, exp: '2+ Yrs', tag: 'Primary' },
          ],
        },
        {
          categoryName: 'Cloud & DevOps',
          icon: 'Cloud',
          skills: [
            { name: 'AWS (EC2, S3, ELB, ASG, RDS, CDN)', level: 92, exp: '2+ Yrs', tag: 'Primary' },
            { name: 'Docker & Containerization', level: 94, exp: '2+ Yrs', tag: 'Primary' },
            { name: 'GitHub Actions & Jenkins CI/CD', level: 92, exp: '2+ Yrs', tag: 'Core' },
            { name: 'Linux VPS & Shell Scripting', level: 90, exp: '2+ Yrs', tag: 'Core' },
            { name: 'Nginx, Prometheus & Grafana', level: 86, exp: '1.5 Yrs', tag: 'Core' },
          ],
        },
        {
          categoryName: 'Databases & Caching',
          icon: 'Database',
          skills: [
            { name: 'MongoDB', level: 92, exp: '2+ Yrs', tag: 'Primary' },
            { name: 'PostgreSQL & MySQL', level: 90, exp: '2+ Yrs', tag: 'Primary' },
            { name: 'Redis Caching & Aggregation', level: 94, exp: '2+ Yrs', tag: 'Core' },
            { name: 'Prisma, Supabase & NeonDB', level: 88, exp: '1.5 Yrs', tag: 'Core' },
          ],
        },
        {
          categoryName: 'Languages & Research',
          icon: 'Cpu',
          skills: [
            { name: 'TypeScript & JavaScript', level: 96, exp: '2+ Yrs', tag: 'Primary' },
            { name: 'Python & Deep Learning', level: 90, exp: '2+ Yrs', tag: 'Research' },
            { name: 'Inception v3 & OCT Medical AI', level: 88, exp: '1+ Yr', tag: 'Publication' },
            { name: 'C++ & C#', level: 86, exp: '3+ Yrs', tag: 'Academic' },
          ],
        },
      ],
    },
    orbitalSkills: {
      type: [OrbitalSkillSchema],
      default: [
        { name: 'NestJS', icon: 'Server', radius: 100, speed: 1.2 },
        { name: 'AWS Cloud', icon: 'Cloud', radius: 140, speed: 0.9 },
        { name: 'Docker', icon: 'Container', radius: 180, speed: 0.7 },
        { name: 'Inception v3', icon: 'Cpu', radius: 220, speed: 0.5 },
      ],
    },
  },
  { timestamps: true }
);

const Skills = mongoose.models.Skills || mongoose.model('Skills', SkillsSchema);
export default Skills;
