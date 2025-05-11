import './styles.css';

import { home } from './pages/home.js';
import { about } from './pages/about.js';
import { menu } from './pages/menu.js';
import { init } from './pageload.js'
import { clearScreen } from './pageload.js'

console.log('Working!');

const homeButton = document.querySelector("button#home-btn");
const menuButton = document.querySelector("button#menu-btn");
const aboutButton = document.querySelector("button#about-btn");

[homeButton, menuButton, aboutButton].forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(button.id);
    switch (button.id) {
      case "home-btn":
        clearScreen();
        home();
        break;
      case "menu-btn":
        clearScreen();
        menu();
        break;
      case "about-btn":
        clearScreen();
        about();
        break;
    }
  })
});

init();
