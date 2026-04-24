import { WheelRenderer } from "./WheelRenderer";
import { segments } from "./segments";
import { getWeightedIndex } from "./spinLogic";
import { spawnConfetti } from "@particles/Particle";
import { playSpinSound, playWinSound } from "@audio/sounds";
import { easeOutQuint } from "@utils/easing";
import { randomRange } from "@utils/math";
import { getSegmentFromRotation } from "@utils/getSegmentFromRotation";

export class Wheel {
  private rotation = 0;
  private spinning = false;

  constructor(private renderer: WheelRenderer) {}

  spin(onComplete: (win: number) => void) {
    if (this.spinning) return;

    this.spinning = true;

    playSpinSound();

    const index = getWeightedIndex(segments);
    const anglePerSegment = (Math.PI * 2) / segments.length;

    const extraSpins = randomRange(4, 8) * Math.PI * 2;
    const jitter = randomRange(-0.5, 0.5) * anglePerSegment * 0.3;

    const targetAngle =
      extraSpins +
      -Math.PI / 2 -
      (index * anglePerSegment + anglePerSegment / 2) +
      jitter;

    const start = this.rotation;

    this.animate(start, start + targetAngle, () => {
      this.rotation = (start + targetAngle) % (Math.PI * 2);
      this.spinning = false;

      const realIndex = getSegmentFromRotation(this.rotation, segments);
      const win = segments[realIndex].value;

      playWinSound();
      spawnConfetti(200, 200);

      onComplete(win);
    });
  }

  private animate(from: number, to: number, done: () => void) {
    const duration = 3200;
    const start = performance.now();

    const frame = (now: number) => {
      const t = Math.min((now - start) / duration, 1);

      const eased = easeOutQuint(t);

      this.rotation = from + (to - from) * eased;

      if (t < 1) {
        requestAnimationFrame(frame);
      } else {
        done();
      }
    };

    requestAnimationFrame(frame);
  }

  draw() {
    this.renderer.draw(this.rotation);
  }
}
