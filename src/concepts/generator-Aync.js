import { heroes } from "../data/heores";

/**
 *
 * @param {HTMLDivElement} element
 */
export const generatorAsyncComponent =  async (element) => {
const heroGenerator= getHeroGenerator();
let isFinish = false;
  do {
    const {value, done} = await heroGenerator.next()
    isFinish = done;
    if (isFinish) break;
    console.log({value});
    element.innerHTML = value;
  
} while (!isFinish);
};
  


  async function* getHeroGenerator() {
    
    for ( const hero of heroes ) {
        await sleep();
        yield hero.name;
    }

    return 'no hay mas';
}


const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 500);
    })
}