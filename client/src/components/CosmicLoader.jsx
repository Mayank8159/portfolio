import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const CosmicLoader = ({ duration = 1400 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(false), duration);
    return () => window.clearTimeout(timer);
  }, [duration]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center",
        "bg-background transition-opacity duration-700",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="relative flex flex-col items-center gap-4">
        <div className="cosmic-loader">
          <div className="cosmic-loader__orbit" />
          <div className="cosmic-loader__planet" />
          <div className="cosmic-loader__star" />
        </div>
        <span className="text-xs uppercase tracking-[0.3em] text-foreground/70">
          Loading
        </span>
      </div>
    </div>
  );
};
