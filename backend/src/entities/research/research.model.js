import mongoose from 'mongoose';

const PaperSchema = new mongoose.Schema(
  {
    paperTitle: { type: String, required: true },
    paperVenue: { type: String, required: true },
    paperYear: { type: String, default: '2024' },
    paperType: { type: String, default: 'International Conference Paper' },
    paperStatus: { type: String, default: 'Published & Peer-Reviewed' },
    doiLink: { type: String, default: '' },
    pdfLink: { type: String, default: '' },
    contributions: { type: [String], default: [] },
    paperTags: { type: [String], default: [] },
  },
  { _id: true }
);

const ResearchSchema = new mongoose.Schema(
  {
    sectionLabel: { type: String, default: 'Research' },
    sectionHeadingPrefix: { type: String, default: 'Publications & ' },
    sectionHeadingAccent: { type: String, default: 'Academic Focus' },
    sectionHeadingSuffix: { type: String, default: '' },
    sectionSubheading: {
      type: String,
      default:
        'Bridging production software engineering with cutting-edge academic research in Deep Learning & AI.',
    },
    visionBadge: {
      type: String,
      default: 'RESEARCH PHILOSOPHY & GRADUATE GOALS',
    },
    visionQuote: {
      type: String,
      default:
        'My goal is to bridge high-throughput software systems engineering with rigorous academic research through graduate study — innovating in computer vision, deep neural networks, and privacy-preserving machine learning.',
    },
    visionAuthor: {
      type: String,
      default: '— Jahidul Islam Shikdar · Backend & DevOps Engineer · AI Researcher',
    },
    visionTopics: {
      type: [String],
      default: [
        'Inception v3',
        'OCT Retinopathy',
        'Deep Learning',
        'Computer Vision',
        'Medical AI',
      ],
    },
    paperTitle: {
      type: String,
      default:
        'Deep Learning Model (Inception v3) for Automated Retinopathy Detection using OCT Images',
    },
    paperVenue: {
      type: String,
      default:
        'IEEE Conference — BECITHCON 2025',
    },
    paperYear: { type: String, default: '2025' },
    paperType: { type: String, default: 'IEEE Conference Paper' },
    paperStatus: { type: String, default: 'Published & Peer-Reviewed' },
    doiLink: {
      type: String,
      default: 'https://doi.org/10.1109/BECITHCON69222.2025.11504241',
    },
    pdfLink: { type: String, default: 'https://doi.org/10.1109/BECITHCON69222.2025.11504241' },
    contributions: {
      type: [String],
      default: [
        'Trained and fine-tuned Inception v3 deep convolutional neural network for automated detection of retinopathy from OCT retinal scans.',
        'Engineered an automated preprocessing, augmentation, and feature extraction pipeline for high-precision diagnostic classification.',
        'Peer-reviewed and published in IEEE BECITHCON 2025 conference proceedings (DOI: 10.1109/BECITHCON69222.2025.11504241).',
      ],
    },
    paperTags: {
      type: [String],
      default: [
        'Inception v3',
        'OCT Images',
        'Deep Learning',
        'Computer Vision',
        'Medical AI',
        'IEEE Xplore',
        'Python',
      ],
    },
    additionalPapers: {
      type: [PaperSchema],
      default: [],
    },
  },
  { timestamps: true }
);

const Research = mongoose.models.Research || mongoose.model('Research', ResearchSchema);
export default Research;
