import { Segment } from "@wheel/segments";

export function getSegmentFromRotation(
  rotation: number,
  segments: Segment[],
): number {
  const full = Math.PI * 2;
  const anglePerSegment = full / segments.length;

  const normalized = ((rotation % full) + full) % full;

  const pointerAtTop = -Math.PI / 2;

  const pointerRelativeAngle = (pointerAtTop - normalized + full) % full;

  let index = Math.floor(pointerRelativeAngle / anglePerSegment);

  if (index < 0) index += segments.length;

  index = index % segments.length;

  return index;
}
