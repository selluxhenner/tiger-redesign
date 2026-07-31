"use client";

import { useEffect, useRef, useState, type ElementType, type HTMLAttributes, type ReactNode } from "react";

type RevealProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  as?: ElementType;
  className?: string;
};

export function Reveal({ children, as: Tag = "div", className = "", ...rest }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal${inView ? " in" : ""} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
