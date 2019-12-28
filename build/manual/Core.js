import { I as Intro } from './Intro.js';
import { M as Main } from './Main.js';

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

export { App as A };
