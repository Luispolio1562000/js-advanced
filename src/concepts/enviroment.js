/**
 *
 * @param {HTMLDivElement} element
 */
export const enviromentsComponent = (element) => {
    const html = `
  Variables: 
  DEV: ${import.meta.env.DEV} <br/>
  API: ${import.meta.env.VITE_API_KEY} <br/>
  `;
    console.log(import.meta.env);
    element.innerHTML = html;
  };
  