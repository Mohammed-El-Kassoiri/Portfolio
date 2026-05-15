import type React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Navigation } from "@/components/navigation";

const setTheme = vi.fn();

vi.mock("next-themes", () => ({
  useTheme: () => ({ theme: "dark", setTheme }),
}));

vi.mock("@/components/language-provider", () => ({
  useLanguage: () => ({
    language: "en",
    toggleLanguage: vi.fn(),
  }),
}));

vi.mock("@/hooks/use-mounted", () => ({
  useMounted: () => true,
}));

vi.mock("framer-motion", () => ({
  motion: {
    nav: ({ children, ...props }: React.ComponentProps<"nav">) => (
      <nav {...props}>{children}</nav>
    ),
    div: ({ children, ...props }: React.ComponentProps<"div">) => (
      <div {...props}>{children}</div>
    ),
    button: ({ children, ...props }: React.ComponentProps<"button">) => (
      <button {...props}>{children}</button>
    ),
    a: ({ children, ...props }: React.ComponentProps<"a">) => (
      <a {...props}>{children}</a>
    ),
  },
}));

vi.mock("@/components/ui/sheet", () => ({
  Sheet: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SheetTrigger: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SheetContent: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SheetHeader: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SheetTitle: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SheetDescription: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SheetClose: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

function addSection(id: string, offsetTop: number) {
  const section = document.createElement("section");
  section.id = id;
  Object.defineProperty(section, "offsetTop", { value: offsetTop, configurable: true });
  document.body.appendChild(section);
}

describe("Navigation", () => {
  beforeEach(() => {
    setTheme.mockReset();
    document.body.innerHTML = "";
    addSection("hero", 0);
    addSection("about", 400);
    addSection("experience", 800);
    addSection("projects", 1200);
    addSection("research", 1600);
    addSection("skills", 2000);
    addSection("contact", 2400);
  });

  it("renders main navigation landmark and marks active section with aria-current", async () => {
    Object.defineProperty(window, "scrollY", { value: 450, writable: true });
    render(<Navigation />);
    fireEvent.scroll(window);

    await waitFor(() => {
      expect(screen.getByRole("navigation", { name: "Main navigation" })).toBeInTheDocument();
      expect(screen.getAllByRole("link", { name: "About" })[0]).toHaveAttribute(
        "aria-current",
        "page",
      );
    });
  });

  it("allows theme toggling from mobile controls", () => {
    render(<Navigation />);

    fireEvent.click(screen.getByRole("button", { name: "Switch to cyber theme" }));
    expect(setTheme).toHaveBeenCalledWith("cyber");
  });
});
