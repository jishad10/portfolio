import mongoose from 'mongoose';

const FAQSchema = new mongoose.Schema(
  {
    category: { type: String, default: 'General Inquiry' },
    question: { type: String, required: true },
    answer: { type: String, required: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const FAQHeaderSchema = new mongoose.Schema(
  {
    sectionLabel: { type: String, default: 'FAQ' },
    sectionHeadingPrefix: { type: String, default: 'Frequently Asked ' },
    sectionHeadingAccent: { type: String, default: 'Questions' },
    sectionHeadingSuffix: { type: String, default: '' },
    sectionSubheading: {
      type: String,
      default:
        'Answers to common questions from recruiters, engineering leads, and academic research collaborators.',
    },
    ctaBannerTitle: {
      type: String,
      default: 'Have a question not listed here?',
    },
    ctaBannerSub: {
      type: String,
      default:
        'Feel free to send a direct message. I reply within 12 hours.',
    },
    ctaBannerBtnText: { type: String, default: 'Ask a Question' },
  },
  { timestamps: true }
);

export const FAQ = mongoose.models.FAQ || mongoose.model('FAQ', FAQSchema);
export const FAQHeader =
  mongoose.models.FAQHeader || mongoose.model('FAQHeader', FAQHeaderSchema);
