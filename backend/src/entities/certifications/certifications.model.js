import mongoose from 'mongoose';

const CertificationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    issuer: { type: String, required: true },
    year: { type: String, default: 'Issued 2024 · Active' },
    abbr: { type: String, default: 'CERT' },
    color: { type: String, default: '#3CBBB1' },
    verifyLink: { type: String, default: '#' },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const CertificationHeaderSchema = new mongoose.Schema(
  {
    sectionLabel: { type: String, default: 'Certifications' },
    sectionHeadingPrefix: { type: String, default: 'Credentials & ' },
    sectionHeadingAccent: { type: String, default: 'Verified Expertise' },
    sectionHeadingSuffix: { type: String, default: '' },
    sectionSubheading: {
      type: String,
      default:
        'Industry-recognized certifications validating cloud architecture, DevOps, and AI proficiency.',
    },
  },
  { timestamps: true }
);

export const Certification =
  mongoose.models.Certification ||
  mongoose.model('Certification', CertificationSchema);
export const CertificationHeader =
  mongoose.models.CertificationHeader ||
  mongoose.model('CertificationHeader', CertificationHeaderSchema);
