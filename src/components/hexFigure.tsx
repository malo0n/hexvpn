"use client";

import { hexagons } from "@/model/const";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

hexagons.sort((a, b) => {
  return +a.d.slice(1, 4) > +b.d.slice(1, 4) ? -1 : 1;
});

const staggeredVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.15,
      ease: [0.41, 1.02, 0.25, 0.25],
    },
  }),
};

export default function HexAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.svg width='767' height='800' ref={ref} viewBox='0 0 767 915' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_50_6)'>
        {hexagons.map((hex, i) => (
          <motion.path
            key={i}
            d={hex.d}
            fill={hex.fill}
            stroke={hex.stroke}
            strokeWidth='3'
            custom={i}
            variants={staggeredVariants}
            initial='hidden'
            animate={isInView ? "visible" : "hidden"}
          />
        ))}
      </g>
      <defs>
        <clipPath id='clip0_50_6'>
          <rect width='925.776' height='728.444' fill='white' transform='translate(0.523926 203.775) rotate(-12.656)' />
        </clipPath>
      </defs>
    </motion.svg>
  );
}
