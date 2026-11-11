import mongoose from 'mongoose';

const PrincipleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
}, { _id: true });

const HighlightSchema = new mongoose.Schema({
  label: { type: String, required: true },
  desc: { type: String, required: true },
}, { _id: true });

const AboutSchema = new mongoose.Schema(
  {
    sectionLabel: { type: String, default: 'About Me' },
    sectionHeadingPrefix: { type: String, default: 'Building Systems That ' },
    sectionHeadingAccent: { type: String, default: 'Scale' },
    sectionHeadingSuffix: { type: String, default: ' & Perform' },
    ctaText: { type: String, default: "Let's Talk" },
    ctaLink: { type: String, default: '#contact' },

    profileInitials: { type: String, default: 'JI' },
    profileName: { type: String, default: 'Jahidul Islam Shikdar' },
    profileTitle: { type: String, default: 'Backend & DevOps Engineer' },
    profileLocation: { type: String, default: 'Dhaka, Bangladesh 🇧🇩' },
    isVerified: { type: Boolean, default: true },

    bioParagraph1: {
      type: String,
      default:
        "I'm a Backend-focused Software Engineer with 2+ years of experience building and scaling production systems with NestJS and Node.js. Currently at Betopia Group, I design and own production backend services, manage AWS & Linux infrastructure, and automate CI/CD pipelines.",
    },
    bioParagraph2: {
      type: String,
      default:
        'I hold a B.Sc. in Computer Science & Engineering from AIUB (CGPA: 3.57 / 4.00), and authored a peer-reviewed research paper on Inception v3 Automated Retinopathy Detection using OCT Images published in IEEE BECITHCON 2025.',
    },

    principles: {
      type: [PrincipleSchema],
      default: [
        { title: 'Backend & System Design', subtitle: 'NestJS, Node.js, Express & Microservices' },
        { title: 'Cloud & Infrastructure', subtitle: 'AWS (EC2, S3, RDS, CDN) & Linux VPS' },
        { title: 'CI/CD & Containers', subtitle: 'Docker, GitHub Actions & Nginx' },
        { title: 'Deep Learning Research', subtitle: 'Inception v3 & OCT Medical Imaging' },
      ],
    },

    highlights: {
      type: [HighlightSchema],
      default: [
        {
          label: 'Backend & System Design',
          desc: 'NestJS · Node.js · Express · Redis · BullMQ · PostgreSQL · MongoDB',
        },
        {
          label: 'DevOps & Cloud Infrastructure',
          desc: 'AWS (EC2, S3, ELB, ASG, RDS, CDN) · Linux VPS · Docker · CI/CD',
        },
        {
          label: 'AI & Retinopathy Research',
          desc: 'Inception v3 OCT Retinopathy Detection · IEEE BECITHCON 2025 Paper',
        },
      ],
    },
  },
  { timestamps: true }
);

const About = mongoose.models.About || mongoose.model('About', AboutSchema);
export default About;
