import About from './about.model.js';

export const getAboutService = async () => {
  let about = await About.findOne();
  if (!about) {
    about = await About.create({});
  }
  return about;
};

export const updateAboutService = async (aboutData) => {
  let about = await About.findOne();
  if (about) {
    about = await About.findByIdAndUpdate(about._id, aboutData, {
      new: true,
      runValidators: true,
    });
  } else {
    about = await About.create(aboutData);
  }
  return about;
};

export const deleteAboutService = async () => {
  await About.deleteMany({});
  const defaultAbout = await About.create({});
  return defaultAbout;
};
