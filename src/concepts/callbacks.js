import { heroes } from "../data/heores";
/**
 *
 * @param {HTMLDivElement} element
 */
export const callbacksComponent = (element) => {
  const id = "5d86371fd55e2e2a30fe1cc";
  findHeroe( id, (error,heroe) => {
    if (error) {
      element.innerHTML = error;
      return;
    }
    element.innerHTML =
      heroe?.name || "No hay heroe";
  });
};

/**
 *
 * @param {String} id
 * @param {(error?:String | null, hero:Object) => void} callback
 */
export const findHeroe = (id, callback) => {
  const hero = heroes.find((hero) => hero.id === id);
  if (!hero) {
    callback(`El heroe con el ${id} no ha sido encontrado`);
    return;
  }
  callback(null, hero);
};
