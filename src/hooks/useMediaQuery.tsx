import { useCallback, useSyncExternalStore } from "react";

import type { Breakpoints } from "~/types";
import { BREAKPOINTS_WIDTH } from "~/constants";

export const useMediaQuery = (breakpoint: Breakpoints) => {
  const query = `(max-width: ${BREAKPOINTS_WIDTH[breakpoint]}rem)`;
  const subscribe = useCallback((onChange: () => void) => {
    const mediaQuery = window.matchMedia(query);
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, [query]);

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
};
