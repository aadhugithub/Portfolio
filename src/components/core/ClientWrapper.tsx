"use client";

import { useLenis } from "@/lib/lenis";
import AnimatedCursor from "@/components/core/AnimatedCursor";
import PageLoader from "@/components/core/PageLoader";
import PageTransition from "@/components/core/PageTransition";

/**
 * ClientWrapper — Handles smooth scrolling, animated cursor,
 * page transitions, and ensures correct container positioning
 * for Lenis (avoids console warning about non-static position).
 */
export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  // ✅ Lenis smooth scroll (runs safely on the client)
  useLenis();

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Interactive cursor animation */}
      <AnimatedCursor />

      {/* Loader displayed on route change */}
      <PageLoader />

      {/* Animated route transitions */}
      <PageTransition>{children}</PageTransition>
    </div>
  );
}
