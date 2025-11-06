"use client";
import { useLenis } from "@/lib/lenis";
import AnimatedCursor from "@/components/core/AnimatedCursor";
import PageLoader from "@/components/core/PageLoader";
import PageTransition from "@/components/core/PageTransition";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  // ✅ This hook now runs safely on the client
  useLenis();

  return (
    <>
      <AnimatedCursor />
      <PageLoader />
      <PageTransition>{children}</PageTransition>
    </>
  );
}
