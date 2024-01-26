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
  /**
   * Animation properties for the glassmorphic effect.
   */
  animation?: {
    /**
     * The duration in seconds of the animation.
     * @default 0
     */
    duration?: number;

    /**
     * The timing function for the animation.
     * @default "ease"
     */
    timingFunction?: "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out";

    /**
     * The delay in seconds before the animation starts.
     * @default 0
     */
    delay?: number;
  };
};
