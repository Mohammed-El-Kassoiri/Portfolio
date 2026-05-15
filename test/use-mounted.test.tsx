import { renderHook, waitFor } from "@testing-library/react";
import { useMounted } from "@/hooks/use-mounted";

describe("useMounted", () => {
  it("is false on first render and true after mount effect", async () => {
    const { result } = renderHook(() => useMounted());

    expect(result.current).toBe(false);

    await waitFor(() => {
      expect(result.current).toBe(true);
    });
  });
});
