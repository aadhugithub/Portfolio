"use client";
import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { usePathname } from "next/navigation";

export default function PageLoader() {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.configure({ showSpinner: false, trickleSpeed: 150 });
    NProgress.start();
    NProgress.done();
  }, [pathname]);

  return null;
}
