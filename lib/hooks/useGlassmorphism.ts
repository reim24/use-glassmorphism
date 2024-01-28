import { useEffect, useRef } from 'react';
import { parseColor } from '../utils/colorUtility';
import { GlassOptions } from '../types';

/**
 * A React hook for applying glassmorphism effects to elements.
 * @template T - The type of HTML element the ref will reference. Should extend HTMLElement.
 * @param {GlassmorphismOptions} options - The options to configure the glassmorphism effect.
 * @returns {React.RefObject<T>} - The ref object to be assigned to the target element.
 */
export const useGlassmorphism = <T extends HTMLElement>(
  options: GlassOptions = {}
): React.RefObject<T> => {
  const {
    color = 'rgb(255,255,255)',
    blur = 5,
    transparency,
    outline = 0,
    animation,
  } = options;

  const { r, g, b, a } = parseColor(color);
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (animation) {
      const { duration = 0.3, timingFunction = 'ease', delay = 0 } = animation;

      element.style.transition = `background ${duration}s ${timingFunction} ${delay}s, 
      backdrop-filter ${duration}s ${timingFunction} ${delay}s,
      border ${duration}s ${timingFunction} ${delay}s,
      box-shadow ${duration}s ${timingFunction} ${delay}s`;
    }

    element.style.background = `rgba(${r}, ${g}, ${b}, ${transparency ?? a})`;
    element.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    element.style.backdropFilter = `blur(${blur}px)`;
    element.style.border = `1px solid rgba(${r}, ${g}, ${b}, ${outline})`;
  }, [elementRef, color, blur, transparency, outline, animation]);

  return elementRef;
};
