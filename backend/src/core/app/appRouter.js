import express from 'express';
import authRoutes from '../../entities/auth/auth.routes.js';
import userRoutes from '../../entities/user/user.routes.js';
import heroRoutes from '../../entities/hero/hero.routes.js';
import aboutRoutes from '../../entities/about/about.routes.js';
import myStoryRoutes from '../../entities/mystory/mystory.routes.js';
import projectsRoutes from '../../entities/projects/projects.routes.js';
import skillsRoutes from '../../entities/skills/skills.routes.js';
import experienceRoutes from '../../entities/experience/experience.routes.js';
import researchRoutes from '../../entities/research/research.routes.js';
import certificationsRoutes from '../../entities/certifications/certifications.routes.js';
import servicesRoutes from '../../entities/services/services.routes.js';
import testimonialsRoutes from '../../entities/testimonials/testimonials.routes.js';
import faqRoutes from '../../entities/faq/faq.routes.js';
import githubRoutes from '../../entities/github/github.routes.js';
import contactRoutes from '../../entities/contact/contact.routes.js';
import settingsRoutes from '../../entities/settings/settings.routes.js';

const router = express.Router();

router.use('/v1/auth', authRoutes);
router.use('/v1/user', userRoutes);
router.use('/v1/hero', heroRoutes);
router.use('/v1/about', aboutRoutes);
router.use('/v1/mystory', myStoryRoutes);
router.use('/v1/projects', projectsRoutes);
router.use('/v1/skills', skillsRoutes);
router.use('/v1/experience', experienceRoutes);
router.use('/v1/research', researchRoutes);
router.use('/v1/certifications', certificationsRoutes);
router.use('/v1/services', servicesRoutes);
router.use('/v1/testimonials', testimonialsRoutes);
router.use('/v1/faq', faqRoutes);
router.use('/v1/github', githubRoutes);
router.use('/v1/contact', contactRoutes);
router.use('/v1/settings', settingsRoutes);

export default router;




