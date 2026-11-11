import Skills from './skills.model.js';

export const getSkillsService = async () => {
  let skills = await Skills.findOne();
  if (!skills) {
    skills = await Skills.create({});
  }
  return skills;
};

export const updateSkillsService = async (data) => {
  let skills = await Skills.findOne();
  if (skills) {
    skills = await Skills.findByIdAndUpdate(skills._id, data, {
      new: true,
      runValidators: true,
    });
  } else {
    skills = await Skills.create(data);
  }
  return skills;
};

export const deleteSkillsService = async () => {
  await Skills.deleteMany({});
  const defaultSkills = await Skills.create({});
  return defaultSkills;
};

// Category sub-operations
export const addSkillCategoryService = async (categoryData) => {
  let skills = await getSkillsService();
  skills.categories.push(categoryData);
  await skills.save();
  return skills;
};

export const updateSkillCategoryService = async (categoryId, categoryData) => {
  let skills = await getSkillsService();
  const category = skills.categories.id(categoryId);
  if (!category) return null;
  category.set(categoryData);
  await skills.save();
  return skills;
};

export const deleteSkillCategoryService = async (categoryId) => {
  let skills = await getSkillsService();
  skills.categories.pull(categoryId);
  await skills.save();
  return skills;
};
