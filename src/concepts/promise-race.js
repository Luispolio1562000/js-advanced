/**
 *
 * @param {HTMLDivElement} element
 */

//Varias promesas, queriendo la que se resuelva más rápido.
export const promiseRaceComponent = (element) => {
  element.innerHTML = 'Loading';
  const renderValue = (value) => {
    element.innerHTML = value;
  };

  Promise.race([slowPromise(), mediumPromise(), fastPromise()]).then(
    renderValue
  );
};
const slowPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("slow Promise");
    }, 40000);
  });
};

const mediumPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("medium Promise");
    }, 2000);
  });
};

const fastPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("fast Promise");
    }, 1000);
  });
};
