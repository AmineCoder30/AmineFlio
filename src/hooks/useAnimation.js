import { useRef } from "react";

// Simplified version without GSAP animations
export const useAnimation = () => {
  const elementRef = useRef(null);
  return elementRef;
};
