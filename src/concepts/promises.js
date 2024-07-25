import { heroes } from "../data/heores";
/**
 *
 * @param {HTMLDivElement} element
 */
 const promiseComponents = (element) => {
  if (!element) throw new Error("El elemento HTML es requerido");
  const renderHeroe = (hero) => {
    element.innerHTML = hero.name;
  };

  const renderTwoHeroes = (hero1, hero2) => {
    element.innerHTML = `
    <h3>${hero1.name} </h3>
    <h3>${hero2.name} </h3>
    `;
  };
  const renderError = (error) => {
    element.innerHTML = `<h3>${error} </h3>`;
  };
  const id1 = "5d86371fd55e2e2a30fe1cc4";
  const id2 = "5d86371f97c29d020f1e1f6d";

  //! Promise.all
  Promise.all([
    findHero(id1),
    findHero(id2),
  ]).then(([hero1, hero2])=>{
    renderTwoHeroes(hero1,hero2);

  })
  .catch(renderError);
  //!Forma 2
  /*  
 
  let hero1;findHero(id1)
    .then((hero) => {
      hero1 = hero;
      return findHero(id2);
    })
    .then((hero2) => {
      renderTwoHeroes(hero1, hero2);
    })
    .catch(renderError)
 */

  //!Forma 1
  /*  findHero(id1)
    //En caso de que se tenga un argumento que en el que su funcion sea ser enviarla a una función en el mismo orden
    //se puede acortar como se observa en el then.
    .then((hero1) => {
      findHero(id2).then((hero2) => {
        renderTwoHeroes(hero1, hero2)
      })
      .catch(renderError);
    })
    .catch((error) => renderError(error))
    .finally(() => {
      console.log("Finalizo la promesa");
    }); */
};
/**
 *
 * @param {String} id
 * @returns {Promise}
 */
const findHero = (id) => {
  return new Promise((resolve, reject) => {
    const heroe = heroes.find((hero) => hero.id === id);
    if (heroe) {
      resolve(heroe);
      return;
    }
    reject(`Heróe con el id: ${id} no ha sido encontrado`);
  });
};
