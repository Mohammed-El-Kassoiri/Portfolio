import { render, screen } from "@testing-library/react";
import { SectionHeader } from "@/components/section-header";

describe("SectionHeader", () => {
  it("renders requested heading level and merges class names", () => {
    render(
      <SectionHeader
        eyebrow="Portfolio"
        title="Featured Work"
        isCyber={false}
        as="h3"
        className="custom-class"
      />,
    );

    const heading = screen.getByRole("heading", {
      level: 3,
      name: "Featured Work",
    });

    expect(heading).toHaveClass("section-title");
    expect(screen.getByText("Portfolio")).toBeInTheDocument();
    expect(heading.parentElement).toHaveClass("custom-class");
  });
});
