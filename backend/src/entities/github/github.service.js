import GitHub from './github.model.js';

export const getGitHubService = async () => {
  let github = await GitHub.findOne();
  if (!github) {
    github = await GitHub.create({});
  }
  return github;
};

export const updateGitHubService = async (data) => {
  let github = await GitHub.findOne();
  if (github) {
    github = await GitHub.findByIdAndUpdate(github._id, data, {
      new: true,
      runValidators: true,
    });
  } else {
    github = await GitHub.create(data);
  }
  return github;
};

export const deleteGitHubService = async () => {
  await GitHub.deleteMany({});
  const defaultGitHub = await GitHub.create({});
  return defaultGitHub;
};
