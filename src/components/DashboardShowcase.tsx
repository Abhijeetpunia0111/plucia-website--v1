"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion";

/**
 * Dashboard screenshot below the hero — scroll-linked scale-up, similar to
 * the settle-into-frame effect on antigravity.google's video section: the
 * framed container starts slightly scaled down and offset, then smoothly grows to its
 * resting scale/position as it scrolls into view. Driven by scroll progress
 * (not a timer) and run through a soft spring so it tracks Lenis's smooth
 * scroll without feeling mechanical.
 */
export default function DashboardShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.90", "start 0.3"],
  });

  // startScale = size before scrolling in, endScale = max size it grows to
  const startScale = 0.88;
  const endScale = 1.08;
  const rawScale = useTransform(scrollYProgress, [0, 1], [startScale, endScale]);
  const rawY = useTransform(scrollYProgress, [0, 1], [64, 0]);
  const spring = { stiffness: 87, damping: 24, mass: 0.8 };
  const scale = useSpring(rawScale, spring);
  const y = useSpring(rawY, spring);

  return (
    <motion.div
      ref={ref}
      style={reduceMotion ? undefined : { scale, y }}
      className="relative border border-solid border-white aspect-[1107.5/787.5] mx-auto mt-[44px] sm:mt-[70px] lg:mt-[clamp(50pxvh,104px)] overflow-clip rounded-[12px] lg:rounded-[18px] shadow-[0px_4px_30px_-13px_rgba(0,0,0,0.15)] w-full max-w-[1300.5px]"
    >
      <img
        alt="Plucia dashboard"
        className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[inherit] size-full"
        src="/assets/images/hero-dashboard.png"
      />
    </motion.div>
  );
}
