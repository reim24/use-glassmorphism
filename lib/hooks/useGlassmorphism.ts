import { MutableRefObject, useEffect } from "react";
import { parseColor } from "../utils/colorUtility";

export type GlassOptions = {
  color: string
  blur: number
  transparency?: number,
}
export const useGlassmorphism = (
  elementRef: MutableRefObject<HTMLElement | null>,
  options: GlassOptions = { color: 'rgb(255,255,255)', blur: 5 }
) => {
  const { r, g, b, a } = parseColor(options.color);
  useEffect(() => {
    const element = elementRef.current
    if (element) {
      element.style.background = `rgba(${r}, ${g}, ${b}, ${options.transparency ?? a})`;
      element.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
      element.style.backdropFilter = `blur(${options.blur}px)`;
    }
  }, [elementRef, options])
};