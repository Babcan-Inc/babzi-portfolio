"use client";

import { useEffect, useRef } from "react";

export default function CursorTrace() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let raf = 0;

    const move = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${x - 3}px, ${y - 3}px, 0)`;
    };

    const frame = () => {
      rx += (x - rx) * 0.13;
      ry += (y - ry) * 0.13;
      if (ring.current) ring.current.style.transform = `translate3d(${rx - 15}px, ${ry - 15}px, 0)`;
      raf = requestAnimationFrame(frame);
    };

    window.addEventListener("mousemove", move, { passive: true });
    raf = requestAnimationFrame(frame);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <><div ref={dot} className="cursor-dot" /><div ref={ring} className="cursor-ring" /></>;
}
