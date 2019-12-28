import { Intro } from './Intro.js';
import { Main } from './Main.js';

class App {
  constructor() {
    this.intro = new Intro();
    this.main = new Main();
  }

  run() {
    this.intro.run();
    this.main.run();
  }
}

export { App };
