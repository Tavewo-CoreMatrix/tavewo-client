import { motion, styleEffect } from "framer-motion";
import { Link } from "react-router-dom";

export const MotionLink = motion(Link);
export const MotionDiv = motion.div;
export const MotionButton = motion.button;

// Spread these onto any motion element for a consistent button feel
export const buttonHover = {
  whileHover: { scale: 1.04 },
  whileTap: { scale: 0.97 },
  transition: { type: "spring", stiffness: 400, damping: 20 },
};

// Spread onto cards for a subtle lift on hover
export const cardHover = {
  whileHover: { y: -6, boxShadow: "0 12px 28px rgba(10, 25, 48, 0.12)" },
  whileTap: { y: -6, boxShadow: "0 12px 28px rgba(10, 25, 48, 0.12)" },
  transition: { type: "spring", stiffness: 300, damping: 22 },
};

 // Brand tokens used: --color-brand (#1B4D8C), --color-eyebrow (#9CC1EE),
// --color-brand-dark (#143C6E) — swap the rgba values below if your
// actual hex values differ.
export const cardHover2 = {
  whileHover: {
    y: -6,
    boxShadow: [
      "0 6px 14px rgba(27, 77, 140, 0.30)",   // tight, saturated brand-blue core
      "0 16px 30px rgba(156, 193, 238, 0.35)", // lighter blue, wider spread — the "glow"
      "0 28px 50px rgba(20, 60, 110, 0.18)",   // soft brand-dark falloff for depth
    ].join(", "),
  },
  whileTap: {
    y: -6,
    boxShadow: [
      "0 6px 14px rgba(27, 77, 140, 0.30)",
      "0 16px 30px rgba(156, 193, 238, 0.35)",
      "0 28px 50px rgba(20, 60, 110, 0.18)",
    ].join(", "),
  },
  transition: { type: "spring", stiffness: 300, damping: 30 },
};