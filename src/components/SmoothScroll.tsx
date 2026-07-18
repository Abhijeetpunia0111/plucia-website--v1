"use client";

import { useEffect } from "react";
import { ReactLenis } from "lenis/react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Remove known extension-injected attributes that can cause hydration
    // mismatches (e.g., `bis_skin_checked` from some browser extensions).
    try {
      const removePrefixed = (el: Element | null, prefix: string) => {
        if (!el) return;
        Array.from(el.attributes).forEach((attr) => {
          if (attr.name.startsWith(prefix)) el.removeAttribute(attr.name);
        });
      };
      removePrefixed(document.documentElement, "bis_");
      removePrefixed(document.body, "bis_");
    } catch (e) {
      // no-op
    }
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
