import type { Variants, Transition } from 'framer-motion'

export const softSpring: Transition = {
  type: 'spring',
  stiffness: 90,
  damping: 20,
  mass: 1,
}

export const gentleEase: Transition = {
  duration: 1.1,
  ease: [0.16, 1, 0.3, 1],
}

export const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: gentleEase,
  },
}

export const fadeInUpSlow: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export const containerStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.15,
    },
  },
}

export const textLetterVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
}
