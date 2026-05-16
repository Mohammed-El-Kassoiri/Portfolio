import { defineConfig } from "vitest/config"
import { fileURLToPath } from "node:url"

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./test/setup.ts"],
    clearMocks: true,
    mockReset: true,
    restoreMocks: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      include: [
        "hooks/**/*.ts",
        "lib/**/*.ts",
        "components/navigation.tsx",
        "components/section-header.tsx",
        "components/scroll-progress.tsx",
        "components/ui/button.tsx",
      ],
    },
    exclude: [".next/**", "node_modules/**", "dist/**"],
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./", import.meta.url)),
    },
  },
})
