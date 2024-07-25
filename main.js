import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { asyncAwaitComponent } from "./src/concepts/async-await";
import { asyncAwaitComponent2 } from "./src/concepts/async-await02";
import { forAwaitComponent } from "./src/concepts/for-async-await";
import { funcionGeneradoraComponent } from "./src/concepts/funcion-generadora";
import { generatorAsyncComponent } from "./src/concepts/generator-Aync";
/* import { enviromentsComponent } from "./src/concepts/enviroment.js";
import { callbacksComponent, findHeroe } from "./src/concepts/callbacks.js";
import { promiseComponents } from "./src/concepts/promises.js";
import { promiseRaceComponent } from "./src/concepts/promise-race.js"; 
import { asyncComponent } from "./src/concepts/async.js";*/

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 class="title">Hello Vite!</h1>
    <div class="card">
    </div>
    
  </div>
`;
const element = document.querySelector(".card");

//enviromentsComponent(element);

//callbacksComponent(element);
//promiseComponents(element);
//promiseRaceComponent(element);

//asyncComponent(element);
//asyncAwaitComponent(element);
//asyncAwaitComponent2(element);
//forAwaitComponent(element);
//funcionGeneradoraComponent(element)
generatorAsyncComponent(element)