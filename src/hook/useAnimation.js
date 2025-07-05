import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * useAnimation - React hook to animate children of a box using GSAP and ScrollTrigger
 * @param {Object} options - GSAP animation options (optional)
 * @returns {React.RefObject} ref to attach to the parent box
 */
const useAnimation = (options = {}) => {
  const boxRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const children = box.children;
    const anim = gsap.fromTo(
      children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: box,
          start: "top 60%",
          // toggleActions: "play none none none",
        },
        ...options,
      }
    );
    return () => {
      if (anim.scrollTrigger) anim.scrollTrigger.kill();
      anim.kill();
    };
  }, [options]);

  return boxRef;
};

export default useAnimation;
