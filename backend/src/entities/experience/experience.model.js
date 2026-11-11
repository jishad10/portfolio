import mongoose from 'mongoose';

const ExperienceSchema = new mongoose.Schema(
  {
    role: { type: String, required: true },
    company: { type: String, required: true },
    period: { type: String, required: true },
    type: { type: String, default: 'Full-time' },
    location: { type: String, default: 'Remote' },
    description: { type: String, default: '' },
    bullets: { type: [String], default: [] },
    tags: { type: [String], default: [] },
    accentColor: { type: String, default: '#3CBBB1' },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const ExperienceHeaderSchema = new mongoose.Schema(
  {
    sectionLabel: { type: String, default: 'Experience' },
    sectionHeadingPrefix: { type: String, default: 'My ' },
    sectionHeadingAccent: { type: String, default: 'Professional' },
    sectionHeadingSuffix: { type: String, default: ' Journey' },
    sectionSubheading: {
      type: String,
      default:
        'A proven track record — from building backend microservices to architecting cloud-native infrastructure.',
    },
  },
  { timestamps: true }
);

export const Experience =
  mongoose.models.Experience || mongoose.model('Experience', ExperienceSchema);
export const ExperienceHeader =
  mongoose.models.ExperienceHeader ||
  mongoose.model('ExperienceHeader', ExperienceHeaderSchema);
