export type AnimationOptions = {
  from: number;
  to: number;
  duration: number;
  onUpdate: (value: number) => void;
  onComplete?: () => void;
};

export class AnimationService {
  animateRotation(options: AnimationOptions) {
    const { from, to, duration, onUpdate, onComplete } = options;

    let start: number | null = null;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp: number) => {
      if (!start) start = timestamp;

      const progress = timestamp - start;
      const t = Math.min(progress / duration, 1);

      const eased = easeOutCubic(t);
      const value = from + (to - from) * eased;

      onUpdate(value);

      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        onComplete?.();
      }
    };

    requestAnimationFrame(step);
  }
}
