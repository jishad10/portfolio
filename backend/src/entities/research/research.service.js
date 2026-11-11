import Research from './research.model.js';

export const getResearchService = async () => {
  let research = await Research.findOne();
  if (!research) {
    research = await Research.create({});
  }
  return research;
};

export const updateResearchService = async (data) => {
  let research = await Research.findOne();
  if (research) {
    research = await Research.findByIdAndUpdate(research._id, data, {
      new: true,
      runValidators: true,
    });
  } else {
    research = await Research.create(data);
  }
  return research;
};

export const deleteResearchService = async () => {
  await Research.deleteMany({});
  const defaultResearch = await Research.create({});
  return defaultResearch;
};

// Additional paper sub-CRUD
export const addPaperService = async (paperData) => {
  let research = await getResearchService();
  research.additionalPapers.push(paperData);
  await research.save();
  return research;
};

export const updatePaperService = async (paperId, paperData) => {
  let research = await getResearchService();
  const paper = research.additionalPapers.id(paperId);
  if (!paper) return null;
  paper.set(paperData);
  await research.save();
  return research;
};

export const deletePaperService = async (paperId) => {
  let research = await getResearchService();
  research.additionalPapers.pull(paperId);
  await research.save();
  return research;
};
