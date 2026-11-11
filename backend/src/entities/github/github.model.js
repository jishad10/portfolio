import mongoose from 'mongoose';

const GitHubSchema = new mongoose.Schema(
  {
    sectionLabel: { type: String, default: 'GitHub' },
    sectionHeadingPrefix: { type: String, default: 'Open Source ' },
    sectionHeadingAccent: { type: String, default: 'Activity' },
    sectionHeadingSuffix: { type: String, default: '' },
    sectionSubheading: {
      type: String,
      default:
        'A year of continuous commits, open-source code, and public repositories.',
    },
    githubProfileBtnText: { type: String, default: 'Open GitHub Profile' },
    githubProfileBtnLink: { type: String, default: 'https://github.com/' },

    username: { type: String, default: 'jahidul-islam' },
    showHeatmap: { type: Boolean, default: true },
    totalCommits: { type: String, default: '1,240+' },
    publicRepos: { type: String, default: '42' },
    starsEarned: { type: String, default: '380+' },
    forksCount: { type: String, default: '95+' },
  },
  { timestamps: true }
);

const GitHub = mongoose.models.GitHub || mongoose.model('GitHub', GitHubSchema);
export default GitHub;
