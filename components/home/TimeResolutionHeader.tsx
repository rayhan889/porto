"use client";

import { useTimeResolutionStore } from "@/store/useTimeResolution";
import { useState, useEffect } from "react";

export const TimeResolutionHeader = () => {
  const { time, resolution, updateTime, updateResolution } =
    useTimeResolutionStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);

    updateTime();
    updateResolution();

    const timeInterval = setInterval(updateTime, 1000);
    window.addEventListener("resize", updateResolution);

    return () => {
      clearInterval(timeInterval);
      window.removeEventListener("resize", updateResolution);
    };
  }, [updateTime, updateResolution]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-linear-180 from-black via-black/70 to-transparent fixed top-0 left-0 w-full flex items-center justify-between text-sm p-6 z-50">
      <span className="font-mono">{time}</span>
      <span className="font-mono">{resolution}</span>
    </div>
  );
};
