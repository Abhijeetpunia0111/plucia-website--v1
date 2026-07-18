"use client";

import { createContext, useContext, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

/**
 * Cursor-follow parallax for collage compositions.
 *
 * `ParallaxGroup` tracks the pointer over its box and exposes the position as
 * normalized −1..1 motion values (0,0 at center). Each `ParallaxItem` shifts
 * toward the cursor by up to `strength` px, smoothed through its own spring —
 * `speed` scales the spring's responsiveness, so items drift at different
 * rates. Pointer-leave eases everything back to rest. Inert under
 * prefers-reduced-motion and on touch (no mousemove).
 */

const ParallaxCtx = createContext<{ nx: MotionValue<number>; ny: MotionValue<number> } | null>(null);

export function ParallaxGroup({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const nx = useMotionValue(0);
  const ny = useMotionValue(0);
  const reduceMotion = useReducedMotion();

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={(e) => {
        if (reduceMotion || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        nx.set(((e.clientX - r.left) / r.width) * 2 - 1);
        ny.set(((e.clientY - r.top) / r.height) * 2 - 1);
      }}
      onMouseLeave={() => {
        nx.set(0);
        ny.set(0);
      }}
    >
      <ParallaxCtx.Provider value={{ nx, ny }}>{children}</ParallaxCtx.Provider>
    </div>
  );
}

export function ParallaxItem({
  strength = 16,
  speed = 1,
  className = "",
  children,
}: {
  /** Max shift toward the cursor, in px (reached at the group's edges). */
  strength?: number;
  /** Spring responsiveness multiplier — higher follows the cursor faster. */
  speed?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const ctx = useContext(ParallaxCtx);
  const fallback = useMotionValue(0);
  const reduceMotion = useReducedMotion();
  const nx = ctx?.nx ?? fallback;
  const ny = ctx?.ny ?? fallback;

  const spring = { stiffness: 50 * speed, damping: 16 + 5 * speed, mass: 1 };
  const x = useSpring(useTransform(nx, (v) => v * strength), spring);
  const y = useSpring(useTransform(ny, (v) => v * strength), spring);

  return (
    <motion.div className={className} style={reduceMotion ? undefined : { x, y }} data-parallax-item>
      {children}
    </motion.div>
  );
}
