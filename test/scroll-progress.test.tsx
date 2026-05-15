import type React from "react";
import { render } from "@testing-library/react";
import { ScrollProgress } from "@/components/scroll-progress";

const mockUseReducedMotion = vi.fn();
const mockUseSpring = vi.fn();

vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.ComponentProps<"div">) => (
      <div {...props}>{children}</div>
    ),
  },
  useReducedMotion: () => mockUseReducedMotion(),
  useScroll: () => ({ scrollYProgress: 0.5 }),
  useSpring: (...args: unknown[]) => mockUseSpring(...args),
}));

describe("ScrollProgress", () => {
  beforeEach(() => {
    mockUseSpring.mockReturnValue(0.5);
  });

  it("uses reduced-motion spring config when reduced motion is preferred", () => {
    mockUseReducedMotion.mockReturnValue(true);
    const { container } = render(<ScrollProgress />);

    expect(mockUseSpring).toHaveBeenCalledWith(
      0.5,
      expect.objectContaining({ stiffness: 100, damping: 30 }),
    );
    expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
  });

  it("uses animated spring config when reduced motion is not preferred", () => {
    mockUseReducedMotion.mockReturnValue(false);
    render(<ScrollProgress />);

    expect(mockUseSpring).toHaveBeenCalledWith(
      0.5,
      expect.objectContaining({ stiffness: 180, damping: 22 }),
    );
  });
});
