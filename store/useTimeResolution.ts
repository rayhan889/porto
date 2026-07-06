import { create } from "zustand";

interface TimeResolutionStore {
  time: string;
  resolution: string;
  updateTime: () => void;
  updateResolution: () => void;
}

export const useTimeResolutionStore = create<TimeResolutionStore>((set) => ({
  time: "",
  resolution: "",

  updateTime: () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    const displayHours = hours % 12 || 12;

    const timeString = `${String(displayHours).padStart(2, " ")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")} ${ampm}`;

    set({ time: timeString });
  },

  updateResolution: () => {
    // Ensure this only runs on the client browser
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      const height = window.innerHeight;
      set({ resolution: `${width} x ${height}` });
    }
  },
}));
