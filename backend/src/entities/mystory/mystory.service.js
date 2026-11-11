import MyStory from './mystory.model.js';

export const getMyStoryService = async () => {
  let story = await MyStory.findOne();
  if (!story) {
    story = await MyStory.create({});
  }
  return story;
};

export const updateMyStoryService = async (data) => {
  let story = await MyStory.findOne();
  if (story) {
    story = await MyStory.findByIdAndUpdate(story._id, data, {
      new: true,
      runValidators: true,
    });
  } else {
    story = await MyStory.create(data);
  }
  return story;
};

export const deleteMyStoryService = async () => {
  await MyStory.deleteMany({});
  const defaultStory = await MyStory.create({});
  return defaultStory;
};

export const addMilestoneService = async (milestoneData) => {
  let story = await getMyStoryService();
  story.milestones.push(milestoneData);
  await story.save();
  return story;
};

export const updateMilestoneService = async (milestoneId, milestoneData) => {
  let story = await getMyStoryService();
  const milestone = story.milestones.id(milestoneId);
  if (!milestone) return null;
  milestone.set(milestoneData);
  await story.save();
  return story;
};

export const deleteMilestoneService = async (milestoneId) => {
  let story = await getMyStoryService();
  story.milestones.pull(milestoneId);
  await story.save();
  return story;
};
