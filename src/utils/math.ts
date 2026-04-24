export const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export const randomRange = (min: number, max: number) =>
  Math.random() * (max - min) + min;
