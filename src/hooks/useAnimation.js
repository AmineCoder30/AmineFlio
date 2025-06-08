import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useAnimation = (type = 'fadeUp') => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial state
    gsap.set(element, { 
      opacity: 1,
      visibility: 'visible'
    });

    let animation;

    switch (type) {
      case 'fadeUp':
        gsap.set(element, { y: 50, opacity: 0 });
        animation = gsap.to(element, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });
        break;

      case 'fadeIn':
        gsap.set(element, { opacity: 0 });
        animation = gsap.to(element, {
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });
        break;

      case 'scaleUp':
        gsap.set(element, { scale: 0.8, opacity: 0 });
        animation = gsap.to(element, {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });
        break;

      case 'slideIn':
        gsap.set(element, { x: -100, opacity: 0 });
        animation = gsap.to(element, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });
        break;

      case 'stagger':
        const children = element.children;
        gsap.set(children, { y: 30, opacity: 0 });
        animation = gsap.to(children, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });
        break;

      default:
        break;
    }

    return () => {
      if (animation) {
        animation.kill();
      }
    };
  }, [type]);

  return elementRef;
}; 