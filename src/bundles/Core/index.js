import { Intro } from '../Intro';
import { Main } from '../Main';

export class App {
  constructor() {
    this.intro = new Intro();
    this.main = new Main();
  }

  run() {
    this.intro.run();
    this.main.run();
  }
}
