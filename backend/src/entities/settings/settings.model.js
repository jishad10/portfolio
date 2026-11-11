import mongoose from 'mongoose';

const SettingsSchema = new mongoose.Schema(
  {
    siteTitle: {
      type: String,
      default: 'Jahidul Islam Shikdar — Backend & DevOps Engineer',
    },
    metaDescription: {
      type: String,
      default:
        'Portfolio of Jahidul Islam Shikdar — Backend-focused Software Engineer with 2+ years of experience building scalable production systems with NestJS, Node.js, AWS, Docker, and CI/CD.',
    },
    keywords: {
      type: String,
      default:
        'Backend Engineer, DevOps, AWS, NestJS, Node.js, Docker, CI/CD, Redis, BullMQ, Inception v3, Dhaka',
    },
    linkedinUrl: { type: String, default: 'https://linkedin.com/' },
    githubUrl: { type: String, default: 'https://github.com/' },
    twitterUrl: { type: String, default: 'https://twitter.com/' },
    scholarUrl: { type: String, default: 'https://scholar.google.com/' },
    emailAddress: { type: String, default: 'jishadfuture@gmail.com' },
    googleAnalyticsId: { type: String, default: 'G-XXXXXXXXXX' },
    themeDefault: {
      type: String,
      default: 'Light & Dark Mode Switch Enabled',
    },
  },
  { timestamps: true }
);

const Settings =
  mongoose.models.Settings || mongoose.model('Settings', SettingsSchema);
export default Settings;
