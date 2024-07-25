import { heroes } from "../data/heores";
/**
 *
 * @param {HTMLDivElement} element
 */
export const forAwaitComponent = async (element) => {
  const id1 = "5d86371f9f80b591f499df32";
/*  if (await getHeroAsync(id1)) {
  element.innerHTML = 'Si existe';
  return;

 } */
 const heroesIds = heroes.map(hero => hero.id);
 console.log(heroesIds);
 const heroPromises = getHeroesAsync(heroesIds);

 for await ( const hero of heroPromises){ 
  element.innerHTML +=` ${hero.name} <br/>`
 }
 
};

/**
 *
 * @param {Array<String>} heroIds
 * @returns {Array<Promise>}
 */
const getHeroesAsync = (heroIds) => {
  const heroPromises = [];

  heroIds.forEach((id) => {
    heroPromises.push(getHeroAsync(id));
  });

  return heroPromises;
};

const getHeroAsync = async (id) => {
  await new Promise((resolve) => {
    setTimeout(() => resolve(), 1000);
  });

  return heroes.find((hero) => hero.id === id);
};
