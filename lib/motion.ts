export const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

export const SCROLL_REVEAL = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: PREMIUM_EASE },
} as const;

export const CARD_MOTION = {
  hover: { y: -4, scale: 1.03, rotateZ: 0 },
  float: { y: [0, -3, 0] as [number, number, number] },
  transition: { duration: 0.35, ease: PREMIUM_EASE },
  floatTransition: { duration: 4.2, repeat: Infinity, ease: "easeInOut" as const },
} as const;

export const BUTTON_MOTION = {
  hover: { scale: 1.03 },
  tap: { scale: 0.97 },
} as const;
