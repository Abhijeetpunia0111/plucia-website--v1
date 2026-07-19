"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

/**
 * GSAP-style scroll "lag": skews its children a hair in proportion to scroll
 * velocity, spring-smoothed and clamped to ±maxSkew deg, so fast scrolling
 * makes the page feel elastic. Inert under prefers-reduced-motion. Don't put
 * position:fixed/sticky elements inside — the transform re-parents them.
 */
export default function VelocitySkew({
  children,
  className = "",
  maxSkew = 1.5,
}: {
  children: React.ReactNode;
  className?: string;
  maxSkew?: number;
}) {
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothed = useSpring(velocity, { stiffness: 150, damping: 40, mass: 0.6 });
  const skewY = useTransform(smoothed, [-3500, 3500], [-maxSkew, maxSkew], {
    clamp: true,
  });
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} style={{ skewY }}>
      {children}
    </motion.div>
  );
}
