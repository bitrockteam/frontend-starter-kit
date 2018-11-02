
import pkg from './../../package.json';
import { kitchenSink } from './kitchen';
import './../styles/app.scss';

const root: Element = document.querySelector('#root');

const hello: string = /*html*/`
  <main class="container">
    <h1>Hello <span>${pkg.name}</span>!</h1>
    <p><small>another awesome <span class="strong">Bitrock</span> application!</small></p>
    <hr />
    <img 
      class="cover"
      src="https://placeimg.com/1000/500/nature" 
      alt="example cover image"
    >
    ${kitchenSink}
  </main>
`;

root.innerHTML = hello;

export { root, pkg };