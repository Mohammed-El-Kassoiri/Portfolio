import { renderHook, waitFor } from "@testing-library/react"
import { useMounted } from "@/hooks/use-mounted"

describe("useMounted", () => {
  it("resolves to true after mount", async () => {
    const { result } = renderHook(() => useMounted())

    expect(typeof result.current).toBe("boolean")

    await waitFor(() => {
      expect(result.current).toBe(true)
    })
  })
})
