interface ColorValues {
  r: number;
  g: number;
  b: number;
  a: number;
}

export function parseColor(color: string): ColorValues | null {
  const match = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d+))?\)$|^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);

  return match
    ? {
      r: match[5] ? parseInt(match[5], 16) : parseInt(match[1], 10),
      g: match[6] ? parseInt(match[6], 16) : parseInt(match[2], 10),
      b: match[7] ? parseInt(match[7], 16) : parseInt(match[3], 10),
      a: match[4] ? parseFloat(match[4]) : 0.2,
    }
    : null;
}
