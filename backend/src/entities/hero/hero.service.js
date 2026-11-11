import Hero from './hero.model.js';

export const getHeroService = async () => {
  let hero = await Hero.findOne();
  if (!hero) {
    hero = await Hero.create({});
  }
  return hero;
};

export const updateHeroService = async (heroData) => {
  let hero = await Hero.findOne();
  if (hero) {
    hero = await Hero.findByIdAndUpdate(hero._id, heroData, {
      new: true,
      runValidators: true,
    });
  } else {
    hero = await Hero.create(heroData);
  }
  return hero;
};

export const deleteHeroService = async () => {
  await Hero.deleteMany({});
  const defaultHero = await Hero.create({});
  return defaultHero;
};
