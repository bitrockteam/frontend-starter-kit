
import './libs/app';

console.log('Project started...');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', (): void => {
    navigator.serviceWorker.register('./sw.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

const warning = <HTMLElement>document.querySelector('.js-warning');
warning.style.display = 'none';