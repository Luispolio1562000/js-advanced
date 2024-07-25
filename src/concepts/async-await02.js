/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncAwaitComponent2 = async (element) => {
  console.time('start');
  /* const value1 = await slowPromise();
  const value2 = await mediumPromise();
  const value3 = await fastPromise(); */

  ///Se espera a que todas la spromesas se completen, las diapara de manera simultanea.

  const[value1, value2, value3] = await Promise.all([slowPromise(), mediumPromise(), fastPromise(),])

  element.innerHTML = `
  value1: ${value1}
    <br/>
    value2; ${value2}
    <br/>
    value3: ${value3}`;

    console.timeEnd('start')
};

const slowPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("slow Promise");
    }, 4000);
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
