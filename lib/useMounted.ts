"use client";

import { useSyncExternalStore } from "react";

/** True after client mount — avoids hydration mismatch for first-paint motion. */
export function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}
