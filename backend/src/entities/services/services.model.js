import mongoose from 'mongoose';

const ServiceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    badge: { type: String, default: 'Core Backend' },
    description: { type: String, required: true },
    deliverables: { type: [String], default: [] },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const ServiceHeaderSchema = new mongoose.Schema(
  {
    sectionLabel: { type: String, default: 'Services' },
    sectionHeadingPrefix: { type: String, default: 'Engineering & ' },
    sectionHeadingAccent: { type: String, default: 'Cloud Solutions' },
    sectionHeadingSuffix: { type: String, default: '' },
    sectionSubheading: {
      type: String,
      default:
        'End-to-end technical capabilities from backend architecture to automated cloud deployment.',
    },
    ctaBannerTitle: {
      type: String,
      default: 'Need a custom backend or cloud infrastructure setup?',
    },
    ctaBannerSub: {
      type: String,
      default:
        'Available for consulting engagements, architecture reviews, and full-stack backend contracts.',
    },
    ctaBannerBtnText: { type: String, default: 'Get In Touch' },
  },
  { timestamps: true }
);

export const Service =
  mongoose.models.Service || mongoose.model('Service', ServiceSchema);
export const ServiceHeader =
  mongoose.models.ServiceHeader ||
  mongoose.model('ServiceHeader', ServiceHeaderSchema);
