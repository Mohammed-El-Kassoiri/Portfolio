import { cn } from "@/lib/utils";

describe("cn", () => {
  it("merges tailwind utility conflicts and preserves non-conflicting classes", () => {
    expect(cn("px-2 py-1", "px-4", "text-sm")).toBe("py-1 px-4 text-sm");
  });
});
