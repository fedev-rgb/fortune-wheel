import { Particle } from "./Particles";

const particles: Particle[] = [];

export function spawnConfetti(x: number, y: number) {
  for (let i = 0; i < 80; i++) {
    particles.push(new Particle(x, y));
  }
}

export function updateParticles(ctx: CanvasRenderingContext2D) {
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.update();
    p.draw(ctx);

    if (p.life <= 0) {
      particles.splice(i, 1);
    }
  }
}
