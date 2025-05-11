import { home } from './pages/home.js';

export const init = () => {
  clearScreen();
  home();
}

export const clearScreen = () => {
  const content = document.querySelector("div#content");
  content.innerHTML = '';
}
