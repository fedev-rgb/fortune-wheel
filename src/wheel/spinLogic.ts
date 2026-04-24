import { Segment } from "./segments";

export function getWeightedIndex(items: Segment[]): number {
  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);

  let random = Math.random() * totalWeight;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (random < item.weight) {
      return i;
    }

    random -= item.weight;
  }

  return items.length - 1;
}
