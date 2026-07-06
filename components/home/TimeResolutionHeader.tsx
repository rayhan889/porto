"use client";

import { useState, useEffect } from "react";

export const TimeResolutionHeader = () => {
  const [time, setTime] = useState<string>("");
  const [resolution, setResolution] = useState<string>("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);

    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const ampm = hours >= 12 ? "PM" : "AM";
      const displayHours = hours % 12 || 12;

      const timeString = `${String(displayHours).padStart(2, " ")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")} ${ampm}`;
      setTime(timeString);
    };

    const updateResolution = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setResolution(`${width} x ${height}`);
    };

    updateTime();
    updateResolution();

    const timeInterval = setInterval(updateTime, 1000);
    window.addEventListener("resize", updateResolution);

    return () => {
      clearInterval(timeInterval);
      window.removeEventListener("resize", updateResolution);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between text-sm p-6 z-50">
      <span className="font-mono">{time}</span>
      <span className="font-mono">{resolution}</span>
    </div>
  );
};
