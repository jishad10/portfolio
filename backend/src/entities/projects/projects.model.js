import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, default: 'Backend & APIs' },
    description: { type: String, required: true },
    metric: { type: String, default: '' },
    stars: { type: Number, default: 0 },
    size: { type: String, enum: ['large', 'small'], default: 'small' },
    archSnippet: { type: String, default: '' },
    achievements: { type: [String], default: [] },
    tags: { type: [String], default: [] },
    githubUrl: { type: String, default: '' },
    liveUrl: { type: String, default: '' },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const ProjectHeaderSchema = new mongoose.Schema(
  {
    sectionLabel: { type: String, default: 'Projects' },
    sectionHeadingPrefix: { type: String, default: 'Featured ' },
    sectionHeadingAccent: { type: String, default: 'Engineering' },
    sectionHeadingSuffix: { type: String, default: ' Work' },
    sectionSubheading: {
      type: String,
      default:
        'Production-ready backend platforms, DevOps pipelines, and AI research models.',
    },
    githubRepoBtnText: { type: String, default: 'View GitHub Repos' },
    githubRepoBtnLink: { type: String, default: 'https://github.com/' },
  },
  { timestamps: true }
);

export const Project =
  mongoose.models.Project || mongoose.model('Project', ProjectSchema);
export const ProjectHeader =
  mongoose.models.ProjectHeader ||
  mongoose.model('ProjectHeader', ProjectHeaderSchema);
