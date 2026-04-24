export const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);

export const easeOutSmooth = (t: number) =>
  easeOutCubic(t) * 0.4 + easeOutQuint(t) * 0.6;
