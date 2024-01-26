import { useEffect, useRef } from "react";
import { parseColor } from "../utils/colorUtility";

export type GlassOptions = {
  color?: string
  blur?: number
  transparency?: number,
}
/**
 * A React hook for applying glassmorphism effects to elements.
 * @param {GlassmorphismOptions} options - The options to configure the glassmorphism effect.
 * @returns {React.RefObject<T>} - The ref object to be assigned to the target element.
 */
export const useGlassmorphism = (
  options: GlassOptions = { color: 'rgb(255,255,255)', blur: 5 }
) => {
  const { r, g, b, a } = parseColor(options.color);
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (element) {
      element.style.background = `rgba(${r}, ${g}, ${b}, ${options.transparency ?? a})`;
      element.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
      element.style.backdropFilter = `blur(${options.blur}px)`;
    }
  }, [elementRef, options])

  return elementRef;
};