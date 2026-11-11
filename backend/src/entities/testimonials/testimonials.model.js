import mongoose from 'mongoose';

const TestimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    company: { type: String, required: true },
    quote: { type: String, required: true },
    rating: { type: Number, default: 5 },
    avatar: { type: String, default: '' },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const TestimonialHeaderSchema = new mongoose.Schema(
  {
    sectionLabel: { type: String, default: 'Testimonials' },
    sectionHeadingPrefix: { type: String, default: 'What ' },
    sectionHeadingAccent: { type: String, default: 'Collaborators Say' },
    sectionHeadingSuffix: { type: String, default: '' },
    sectionSubheading: {
      type: String,
      default:
        'Endorsements from CTOs, engineering managers, and academic researchers who have worked with me.',
    },
  },
  { timestamps: true }
);

export const Testimonial =
  mongoose.models.Testimonial ||
  mongoose.model('Testimonial', TestimonialSchema);
export const TestimonialHeader =
  mongoose.models.TestimonialHeader ||
  mongoose.model('TestimonialHeader', TestimonialHeaderSchema);
