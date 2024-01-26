import { useEffect, useRef } from "react";
import { parseColor } from "../utils/colorUtility";

export type GlassOptions = {
  /**
   * The color for the glassmorphic effect. Accepts RGB, RGBA, or hex values.
   * @example "rgb(255, 255, 255)", "rgba(255, 255, 255, 0.5)", "#ffffff"
   * @default "rgb(255, 255, 255)"
   */
  color?: string;

  /**
   * The blur strength for the glassmorphic effect. Should be in the range 0 to 20.
   * @default 5
   */
  blur?: number;

  /**
   * The transparency level for the glassmorphic effect. Should be in the range 0 to 1.
   */
  transparency?: number;
};

/**
 * A React hook for applying glassmorphism effects to elements.
 * @template T - The type of HTML element the ref will reference. Should extend HTMLElement.
 * @param {GlassmorphismOptions} options - The options to configure the glassmorphism effect.
 * @returns {React.RefObject<T>} - The ref object to be assigned to the target element.
 */
export const useGlassmorphism = <T extends HTMLElement>(
  options: GlassOptions = { color: 'rgb(255,255,255)', blur: 5 }
): React.RefObject<T> => {
  const { r, g, b, a } = parseColor(options.color);
  const elementRef = useRef<T | null>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return;

    element.style.background = `rgba(${r}, ${g}, ${b}, ${options.transparency ?? a})`;
    element.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    element.style.backdropFilter = `blur(${options.blur}px)`;
  }, [elementRef, options])

  return elementRef;
};