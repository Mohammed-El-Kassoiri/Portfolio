import { act, renderHook, waitFor } from "@testing-library/react"
import { useIsMobile } from "@/hooks/use-mobile"

function setInnerWidth(width: number) {
  Object.defineProperty(window, "innerWidth", {
    configurable: true,
    writable: true,
    value: width,
  })
}

describe("useIsMobile", () => {
  it("returns true when viewport is below mobile breakpoint", async () => {
    setInnerWidth(640)
    const { result } = renderHook(() => useIsMobile())

    await waitFor(() => {
      expect(result.current).toBe(true)
    })
  })

  it("reacts to media query change events", async () => {
    let onChange: (() => void) | undefined

    window.matchMedia = vi.fn().mockImplementation(() => ({
      matches: false,
      media: "(max-width: 767px)",
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: (_: string, cb: () => void) => {
        onChange = cb
      },
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))

    setInnerWidth(1200)
    const { result } = renderHook(() => useIsMobile())

    await waitFor(() => {
      expect(result.current).toBe(false)
    })

    setInnerWidth(500)
    act(() => {
      onChange?.()
    })

    await waitFor(() => {
      expect(result.current).toBe(true)
    })
  })
})
