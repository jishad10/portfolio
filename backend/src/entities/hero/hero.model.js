import mongoose from 'mongoose';

const HeroSchema = new mongoose.Schema(
  {
    // Navbar Properties
    logoInitials: { type: String, default: 'JI' },
    logoTitle: { type: String, default: 'Jahidul' },
    logoSublabel: { type: String, default: 'DevOps & AI' },
    navCtaText: { type: String, default: 'Hire Me' },
    navCtaLink: { type: String, default: '#contact' },

    // Hero Badge & Headline
    statusBadgeText: {
      type: String,
      default: 'Available for Full-Time & Research Roles',
    },
    isAvailable: { type: Boolean, default: true },
    headlinePart1: { type: String, default: 'Backend & ' },
    headlineAccent1: { type: String, default: 'DevOps' },
    headlinePart2: { type: String, default: 'Engineer + ' },
    headlineAccent2: { type: String, default: 'AI' },
    headlinePart3: { type: String, default: ' Researcher' },
    bioText: {
      type: String,
      default:
        'Backend-focused Software Engineer with 2+ years of experience building scalable production systems using NestJS, Node.js, AWS, Docker, and CI/CD. Author of an IEEE BECITHCON 2025 deep learning publication.',
    },

    // Hero Action Buttons
    ctaPrimaryText: { type: String, default: 'View Projects' },
    ctaPrimaryLink: { type: String, default: '#projects' },
    ctaSecondaryText: { type: String, default: 'Resume' },
    resumeLink: { type: String, default: '/resume.pdf' },
    ctaTertiaryText: { type: String, default: 'GitHub' },
    githubLink: { type: String, default: 'https://github.com/' },

    // Hero Stats Cards
    stat1Value: { type: String, default: '2+' },
    stat1Label: { type: String, default: 'Years Experience' },
    stat2Value: { type: String, default: '10k+' },
    stat2Label: { type: String, default: 'Users Scaled' },
    stat3Value: { type: String, default: '1' },
    stat3Label: { type: String, default: 'IEEE Publication' },
  },
  { timestamps: true }
);

const Hero = mongoose.models.Hero || mongoose.model('Hero', HeroSchema);
export default Hero;
