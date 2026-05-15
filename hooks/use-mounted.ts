"use client";

import { useEffect, useState } from "react";

/**
 * Returns true only after the component has mounted on the client.
 * Useful when reading browser-only state (theme/localStorage/window)
 * to avoid hydration mismatch between server and client rendering.
 */
export function useMounted() {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}
