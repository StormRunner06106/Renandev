"use client";

import { Variants, easeInOut, motion } from "framer-motion"; // Import easeInOut
import { ReactNode } from "react";

interface AnimatedPageTransitionProps {
  children: ReactNode;
}

const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeInOut, // Use the imported easing function
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: easeInOut, // Use the imported easing function
    },
  },
};

export const AnimatedPageTransition = ({
  children,
}: AnimatedPageTransitionProps) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};
