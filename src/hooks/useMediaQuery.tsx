import { useState, useEffect } from "react"

import type { Breakpoints } from "~/types"

import { BREAKPOINTS_WIDTH } from "~/constants"

export const useMediaQuery = (breakpoint: Breakpoints) => {
  const [matches, setMatches] = useState<boolean>(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${BREAKPOINTS_WIDTH[breakpoint]}rem)`)

    const handleChange = () => {
      setMatches(mediaQuery.matches)
    }

    handleChange()

    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return matches
}