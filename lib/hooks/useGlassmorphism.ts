import { useEffect, useRef } from "react";
import { parseColor } from "../utils/colorUtility";
import { GlassOptions } from "../types";

/**
 * A React hook for applying glassmorphism effects to elements.
 * @template T - The type of HTML element the ref will reference. Should extend HTMLElement.
 * @param {GlassmorphismOptions} options - The options to configure the glassmorphism effect.
 * @returns {React.RefObject<T>} - The ref object to be assigned to the target element.
 */
export const useGlassmorphism = <T extends HTMLElement>(
  options: GlassOptions = { color: "rgb(255,255,255)", blur: 5 }
): React.RefObject<T> => {
  const { r, g, b, a } = parseColor(options.color);
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (options.animation) {
      const {
        duration = 0.3,
        timingFunction = "ease",
        delay = 0,
      } = options.animation;

      element.style.transition = `background ${duration}s ${timingFunction} ${delay}s, 
      backdrop-filter ${duration}s ${timingFunction} ${delay}s,
      box-shadow ${duration}s ${timingFunction} ${delay}s`;
    }

    element.style.background = `rgba(${r}, ${g}, ${b}, ${options.transparency ?? a
      })`;
    element.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.1)";
    element.style.backdropFilter = `blur(${options.blur}px)`;

  }, [elementRef, options]);

  return elementRef;
};
