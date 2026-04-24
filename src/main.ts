import "./styles.css";

import { Game } from "@game/Game";
import { Wheel } from "@wheel/Wheel";
import { WheelRenderer } from "@wheel/WheelRenderer";
import { UI } from "@ui/UI";
import { segments } from "@wheel/segments";

async function main() {
  const canvas = document.createElement("canvas");
  canvas.width = 500;
  canvas.height = 500;

  const container = document.getElementById("pixi-container");

  if (!container) {
    throw new Error("Missing #pixi-container");
  }

  container.appendChild(canvas);

  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Canvas not supported");
  }

  const renderer = new WheelRenderer(ctx, segments, 180);

  const wheel = new Wheel(renderer);

  /* eslint-disable prefer-const */
  let game!: Game;
  /* eslint-enable prefer-const */

  const ui = new UI(
    () => game.startBonus(),
    () => game.spin(),
    () => game.backToMain(),
  );

  game = new Game(wheel, ui);
}

main();
