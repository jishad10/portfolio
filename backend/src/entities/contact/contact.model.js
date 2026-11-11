import mongoose from 'mongoose';

const ContactConfigSchema = new mongoose.Schema(
  {
    sectionLabel: { type: String, default: 'Contact' },
    sectionHeadingPrefix: { type: String, default: "Let's " },
    sectionHeadingAccent: { type: String, default: 'Connect' },
    sectionHeadingSuffix: { type: String, default: ' & Collaborate' },
    sectionSubheading: {
      type: String,
      default:
        "Whether it's an engineering role, contract project, or AI research opportunity — I'd love to hear from you.",
    },
    availabilityStatus: {
      type: String,
      default: 'Open for Opportunities',
    },
    availabilityText: {
      type: String,
      default:
        'Available for full-time remote backend/DevOps roles, technical consulting contracts, and AI research projects.',
    },
    responseTime: { type: String, default: '< 12 Hours' },

    email: { type: String, default: 'jishadfuture@gmail.com' },
    phone: { type: String, default: '+880 1821-518484' },
    github: { type: String, default: 'https://github.com/' },
    linkedin: { type: String, default: 'https://linkedin.com/' },
    scholar: { type: String, default: 'https://scholar.google.com/' },
    location: {
      type: String,
      default: 'Dhaka, Bangladesh 🇧🇩 · Available for Worldwide Remote Work',
    },
  },
  { timestamps: true }
);

const ContactMessageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, default: 'Portfolio Contact Form Submission' },
    message: { type: String, required: true },
    status: {
      type: String,
      enum: ['unread', 'read', 'archived'],
      default: 'unread',
    },
  },
  { timestamps: true }
);

export const ContactConfig =
  mongoose.models.ContactConfig ||
  mongoose.model('ContactConfig', ContactConfigSchema);

export const ContactMessage =
  mongoose.models.ContactMessage ||
  mongoose.model('ContactMessage', ContactMessageSchema);
