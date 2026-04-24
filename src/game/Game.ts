import { GameState, Screen } from "./GameState";
import { Wheel } from "@wheel/Wheel";
import { UI } from "@ui/UI";
import { updateParticles } from "@particles/Particle";

export class Game {
  private state: GameState = {
    screen: Screen.MAIN,
    balance: 1000,
    lastWin: 0,
    spinning: false,
  };

  constructor(
    private wheel: Wheel,
    private ui: UI,
  ) {
    this.render();
    this.loop();
  }

  startBonus() {
    this.state.screen = Screen.BONUS;
    this.render();
  }

  spin() {
    if (this.state.spinning) return;

    this.state.spinning = true;
    this.render();

    this.wheel.spin((win) => {
      this.state.lastWin = win;
      this.state.balance += win;
      this.state.spinning = false;
      this.state.screen = Screen.RESULT;
      this.render();
    });
  }

  backToMain() {
    this.state.screen = Screen.MAIN;
    this.render();
  }

  private render() {
    this.ui.render(this.state);
  }

  private loop() {
    const frame = () => {
      this.wheel.draw();

      updateParticles(this.wheel["renderer"]["ctx"]);

      requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);
  }
}
