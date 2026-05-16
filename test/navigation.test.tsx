import type React from "react"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { Navigation } from "@/components/navigation"

const setTheme = vi.fn()
const toggleLanguage = vi.fn()

vi.mock("next-themes", () => ({
  useTheme: () => ({ theme: "dark", setTheme }),
}))

vi.mock("@/components/language-provider", () => ({
  useLanguage: () => ({
    language: "en",
    toggleLanguage,
  }),
}))

vi.mock("@/hooks/use-mounted", () => ({
  useMounted: () => true,
}))

function sanitizeMotionProps<T extends Record<string, unknown>>(props: T): T {
  const rest = { ...props } as Record<string, unknown>
  delete rest.whileHover
  delete rest.whileTap
  delete rest.animate
  delete rest.initial
  delete rest.transition
  delete rest.layoutId
  return rest as T
}

vi.mock("framer-motion", () => ({
  motion: {
    nav: ({ children, ...props }: React.ComponentProps<"nav">) => (
      <nav {...sanitizeMotionProps(props)}>{children}</nav>
    ),
    div: ({ children, ...props }: React.ComponentProps<"div">) => (
      <div {...sanitizeMotionProps(props)}>{children}</div>
    ),
    button: ({ children, ...props }: React.ComponentProps<"button">) => (
      <button {...sanitizeMotionProps(props)}>{children}</button>
    ),
    a: ({ children, ...props }: React.ComponentProps<"a">) => (
      <a {...sanitizeMotionProps(props)}>{children}</a>
    ),
  },
}))

vi.mock("@/components/ui/sheet", () => ({
  Sheet: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SheetTrigger: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SheetContent: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SheetHeader: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SheetTitle: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SheetDescription: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  SheetClose: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}))

function addSection(id: string, offsetTop: number) {
  const section = document.createElement("section")
  section.id = id
  Object.defineProperty(section, "offsetTop", {
    value: offsetTop,
    configurable: true,
  })
  document.body.appendChild(section)
}

describe("Navigation", () => {
  beforeEach(() => {
    setTheme.mockReset()
    toggleLanguage.mockReset()
    document.body.innerHTML = ""
    addSection("hero", 0)
    addSection("about", 400)
    addSection("experience", 800)
    addSection("projects", 1200)
    addSection("research", 1600)
    addSection("skills", 2000)
    addSection("contact", 2400)
  })

  it("renders navigation landmark and updates active section from scroll position", async () => {
    Object.defineProperty(window, "scrollY", { value: 450, writable: true })
    render(<Navigation />)
    fireEvent.scroll(window)

    await waitFor(() => {
      expect(
        screen.getByRole("navigation", { name: "Main navigation" }),
      ).toBeInTheDocument()
      expect(screen.getAllByRole("link", { name: "About" })[0]).toHaveAttribute(
        "aria-current",
        "page",
      )
    })
  })

  it("supports theme toggling from both mobile and desktop controls", () => {
    render(<Navigation />)

    const toggles = screen.getAllByRole("button", { name: "Switch to cyber theme" })

    fireEvent.click(toggles[0])
    fireEvent.click(toggles[1])

    expect(setTheme).toHaveBeenNthCalledWith(1, "cyber")
    expect(setTheme).toHaveBeenNthCalledWith(2, "cyber")
  })

  it("provides accessible language and mobile menu controls", () => {
    render(<Navigation />)

    fireEvent.click(screen.getByRole("button", { name: "Switch to French" }))

    expect(toggleLanguage).toHaveBeenCalledTimes(1)
    expect(screen.getByRole("button", { name: "Open menu" })).toBeInTheDocument()
  })
})
