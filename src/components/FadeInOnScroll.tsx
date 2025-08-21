// path: src/components/FadeInOnScroll.tsx
"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface FadeInOnScrollProps {
  children: ReactNode;
  delay?: number;
}

export default function FadeInOnScroll({
  children,
  delay = 0,
}: FadeInOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Correctly reference the current ref value
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2, // Adjust this value to change when the animation triggers
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    // Use the copied variable in the cleanup function
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // The empty dependency array is correct

  const transitionClass = "transition-all duration-1000 ease-in-out";
  const opacityClass = isVisible ? "opacity-100" : "opacity-0";
  const transformClass = isVisible ? "translate-y-0" : "translate-y-8";
  const delayStyle = { transitionDelay: `${delay}ms` };

  return (
    <div
      ref={ref}
      className={`${transitionClass} ${opacityClass} ${transformClass}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
}
